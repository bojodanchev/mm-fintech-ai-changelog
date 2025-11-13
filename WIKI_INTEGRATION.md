# Wiki Integration Guide

This guide covers different ways to integrate the MM Fintech AI Changelog into your internal AI wiki.

## Integration Options

### Option 1: API Endpoint (Recommended)

Expose the changelog as a JSON API that your wiki can consume and display.

**Benefits:**
- Wiki fetches data on-demand
- Always up-to-date
- Can be styled within wiki's design system

**Implementation:**
1. Host the Next.js app on an internal server
2. Expose the `/api/changelog` endpoint
3. Wiki makes API calls and renders the data

**Example API Response:**
```json
[
  {
    "date": "November 13, 2025",
    "entries": [
      {
        "id": "commit-9c83c37",
        "type": "feature",
        "message": "Fixed login dark screen background",
        "repository": "LLM Change Management",
        "author": "bozhidar.danchev",
        "date": "2025-11-13T09:23:11+02:00",
        "sha": "9c83c37",
        "url": "https://gitea.speedy.io/..."
      }
    ]
  }
]
```

---

### Option 2: Embedded iframe Widget

Host the changelog app and embed it as an iframe in your wiki.

**Benefits:**
- Full UI preserved
- Easy to embed
- Self-contained

**Implementation:**
1. Deploy the app on an internal server (accessible from wiki)
2. Add iframe to wiki page:
   ```html
   <iframe 
     src="http://internal-server:3000" 
     width="100%" 
     height="800px"
     frameborder="0">
   </iframe>
   ```

---

### Option 3: Static Markdown Export

Generate a markdown file that can be imported/updated in your wiki.

**Benefits:**
- Works with any wiki system
- Can be version controlled
- Simple to maintain

**Implementation:**
Create a script that generates markdown from the changelog API.

---

### Option 4: Webhook Integration

Have the changelog automatically update wiki pages when new commits are detected.

**Benefits:**
- Automatic updates
- Real-time synchronization
- Wiki stays current

**Implementation:**
1. Set up webhook in Gitea
2. Changelog app receives webhook
3. Updates wiki via wiki's API

---

### Option 5: Custom Wiki Plugin/Widget

Create a custom widget/plugin for your specific wiki system.

**Benefits:**
- Native integration
- Best user experience
- Customizable

**Implementation:**
Depends on your wiki system's plugin architecture.

---

## Quick Setup for API Integration

If your wiki supports custom widgets or can make API calls:

1. **Deploy the changelog app** on an internal server
2. **Expose the API endpoint:** `http://internal-server:3000/api/changelog`
3. **In your wiki**, create a custom widget that:
   - Fetches from the API endpoint
   - Renders the changelog data
   - Updates periodically or on page load

---

## Next Steps

Please let me know:
1. What wiki system you're using
2. Which integration method you prefer
3. Any specific requirements or constraints

I can then create the specific integration code/scripts for your setup.

