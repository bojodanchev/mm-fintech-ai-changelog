# Deployment Guide for Internal Access

Since your Gitea instance is internal and not accessible from Vercel, here are several options to share the changelog with your staff colleagues.

## Option 1: Local Network Access (Simplest)

Run the production build on your local machine and make it accessible on your local network.

### Steps:

1. **Build the production version:**
   ```bash
   npm run build
   ```

2. **Start the production server on your network IP:**
   ```bash
   # On Windows, find your IP address:
   ipconfig
   # Look for IPv4 Address (e.g., 192.168.1.100)
   
   # Start the server bound to your network IP:
   npm start -- -H 0.0.0.0
   ```
   
   Or modify `package.json` to add a custom script:
   ```json
   "scripts": {
     "start:network": "next start -H 0.0.0.0"
   }
   ```

3. **Share the URL:**
   - Your colleagues can access: `http://YOUR_IP_ADDRESS:3000`
   - Example: `http://192.168.1.100:3000`

**Pros:** Simple, no additional setup  
**Cons:** Only works when your computer is on and connected to the same network

---

## Option 2: Cloudflare Tunnel (Recommended for External Access)

Use Cloudflare Tunnel (formerly Argo Tunnel) to expose your local server securely without opening ports.

### Steps:

1. **Install Cloudflare Tunnel:**
   - Download from: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/installation/
   - Or use: `winget install Cloudflare.cloudflared`

2. **Authenticate:**
   ```bash
   cloudflared tunnel login
   ```

3. **Create a tunnel:**
   ```bash
   cloudflared tunnel create changelog
   ```

4. **Create a config file** (`cloudflared-config.yml`):
   ```yaml
   tunnel: changelog
   credentials-file: C:\Users\bozhidar.danchev\.cloudflared\<tunnel-id>.json
   
   ingress:
     - hostname: changelog.yourdomain.com
       service: http://localhost:3000
     - service: http_status:404
   ```

5. **Run the tunnel:**
   ```bash
   # First, start your Next.js app:
   npm run build
   npm start
   
   # Then in another terminal, run:
   cloudflared tunnel --config cloudflared-config.yml run changelog
   ```

6. **Share the URL:** `https://changelog.yourdomain.com`

**Pros:** Secure, works from anywhere, free  
**Cons:** Requires Cloudflare account and domain setup

---

## Option 3: ngrok (Quick External Access)

Use ngrok for a quick public URL.

### Steps:

1. **Sign up and install ngrok:**
   - Sign up at: https://ngrok.com/
   - Download from: https://ngrok.com/download

2. **Get your authtoken** from the ngrok dashboard

3. **Configure ngrok:**
   ```bash
   ngrok config add-authtoken YOUR_AUTH_TOKEN
   ```

4. **Start your Next.js app:**
   ```bash
   npm run build
   npm start
   ```

5. **In another terminal, expose port 3000:**
   ```bash
   ngrok http 3000
   ```

6. **Share the ngrok URL** (e.g., `https://abc123.ngrok.io`)

**Pros:** Very quick setup, works immediately  
**Cons:** Free tier has limitations, URLs change unless you pay

---

## Option 4: Internal Server Deployment

Deploy on an internal server/VPS that can access your Gitea instance.

### Steps:

1. **On your internal server, clone the repository:**
   ```bash
   git clone https://github.com/bojodanchev/mm-fintech-ai-changelog.git
   cd mm-fintech-ai-changelog
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   ```bash
   # Create .env.local file
   GITEA_URL=https://gitea.speedy.io
   GITEA_TOKEN=525310a02f1ca34e62d9ece1414bacb553495817
   ```

4. **Build and start:**
   ```bash
   npm run build
   npm start
   ```

5. **Set up as a service (Linux):**
   Create `/etc/systemd/system/changelog.service`:
   ```ini
   [Unit]
   Description=MM Fintech AI Changelog
   After=network.target

   [Service]
   Type=simple
   User=your-user
   WorkingDirectory=/path/to/mm-fintech-ai-changelog
   ExecStart=/usr/bin/npm start
   Restart=always
   Environment=NODE_ENV=production

   [Install]
   WantedBy=multi-user.target
   ```

   Then:
   ```bash
   sudo systemctl enable changelog
   sudo systemctl start changelog
   ```

**Pros:** Always available, professional setup  
**Cons:** Requires a server and setup

---

## Option 5: Docker Deployment (Portable)

Package the app in Docker for easy deployment anywhere.

### Steps:

1. **Create `Dockerfile`:**
   ```dockerfile
   FROM node:20-alpine AS base

   # Install dependencies only when needed
   FROM base AS deps
   RUN apk add --no-cache libc6-compat
   WORKDIR /app
   COPY package.json package-lock.json* ./
   RUN npm ci

   # Rebuild the source code only when needed
   FROM base AS builder
   WORKDIR /app
   COPY --from=deps /app/node_modules ./node_modules
   COPY . .
   RUN npm run build

   # Production image
   FROM base AS runner
   WORKDIR /app
   ENV NODE_ENV=production
   RUN addgroup --system --gid 1001 nodejs
   RUN adduser --system --uid 1001 nextjs
   COPY --from=builder /app/public ./public
   COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
   COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
   USER nextjs
   EXPOSE 3000
   ENV PORT=3000
   CMD ["node", "server.js"]
   ```

2. **Update `next.config.js`** to enable standalone output:
   ```js
   const nextConfig = {
     reactStrictMode: true,
     output: 'standalone', // Enable for Docker
   }
   ```

3. **Build and run:**
   ```bash
   docker build -t changelog .
   docker run -p 3000:3000 --env-file .env.local changelog
   ```

**Pros:** Portable, consistent environment  
**Cons:** Requires Docker knowledge

---

## Quick Start Script

Create a `start-network.bat` (Windows) file for easy sharing:

```batch
@echo off
echo Building changelog application...
call npm run build
echo.
echo Starting server on network...
echo Your colleagues can access: http://YOUR_IP:3000
echo.
call npm start -- -H 0.0.0.0
```

Replace `YOUR_IP` with your actual IP address.

---

## Recommendation

For quick internal sharing: **Option 1** (Local Network Access)  
For external access: **Option 2** (Cloudflare Tunnel) or **Option 3** (ngrok)  
For production: **Option 4** (Internal Server) or **Option 5** (Docker)

