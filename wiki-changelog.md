# MM Fintech AI Changelog

Latest changes and updates to internal products.

*Last updated: Nov 13, 2025, 12:27:07 PM*

---

# LLM Wiki

## November 7, 2025

### 🔧 Chore

Remove seed_dummy_data.py script from repository Removed the dummy data seed script to prevent accidental execution in production. The script was idempotent but could still create unwanted test data i

- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 11:03:07 AM
- **View Commit:** [2528169](https://gitea.speedy.io/Artificial/llm-wiki/commit/2528169c0f1c94972b39784f96f7048276e7e265)

### ✨ Feature

Improve sidebar width and category name alignment WHAT WAS DONE: - Increased sidebar width from w-64 to w-80 (320px) for better category name display - Fixed category name alignment issues where long 

- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 10:57:53 AM
- **View Commit:** [13ba5f4](https://gitea.speedy.io/Artificial/llm-wiki/commit/13ba5f4a09aa0054866f5ccbd5157c6849316ef3)

---

## November 6, 2025

### 💥 Breaking Change

Fix HTTPBearer auto_error configuration for better auth error handling ## Problem The /me endpoint was returning 500 Internal Server Error due to aggressive error handling in HTTPBearer security depen

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 1:01:54 PM
- **View Commit:** [f48e140](https://gitea.speedy.io/Artificial/llm-wiki/commit/f48e140e9c5317111fa3161bbcb19ca0aec4036c)

### 🐛 Fix

Fix database path resolution for local venv development ## Problem Backend failed on Windows when running from venv with: sqlite3.OperationalError: unable to open database file The issue occurred beca

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 12:08:40 PM
- **View Commit:** [3dfe36d](https://gitea.speedy.io/Artificial/llm-wiki/commit/3dfe36d7749ea35135f7649b8d8e5115ae3f0f04)

### 💥 Breaking Change

Fix category tree dropdown alignment and chevron indexing ## Problem The category dropdown had visual misalignment where child categories (Debian Ubuntu, Kubernetes and Docker, Microsoft And AD) appea

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 9:35:57 AM
- **View Commit:** [78505d8](https://gitea.speedy.io/Artificial/llm-wiki/commit/78505d83970254fc756644e2b0e45c6722b1080e)

---

## October 21, 2025

### 🔧 Chore

LLM fix

- **Author:** svilen
- **Date:** Oct 21, 2025, 3:49:22 PM
- **View Commit:** [21fd4be](https://gitea.speedy.io/Artificial/llm-wiki/commit/21fd4be21b56fde7d1a398dc1edbb6accbad0e67)

### 🔧 Chore

RAG semantic chunks and pagination

- **Author:** svilen
- **Date:** Oct 21, 2025, 3:08:52 PM
- **View Commit:** [e0314cb](https://gitea.speedy.io/Artificial/llm-wiki/commit/e0314cbcde760529a7e1949137cf4e6d6220002c)

### 🔧 Chore

Multiple page actions

- **Author:** svilen
- **Date:** Oct 21, 2025, 11:32:19 AM
- **View Commit:** [71ed933](https://gitea.speedy.io/Artificial/llm-wiki/commit/71ed93339bfcbc92aa72ff03b2a2b731f1301a30)

### 🔧 Chore

Category page count display

- **Author:** svilen
- **Date:** Oct 21, 2025, 10:41:42 AM
- **View Commit:** [5c2f031](https://gitea.speedy.io/Artificial/llm-wiki/commit/5c2f031e8ca1fd10cac0991afaef512330e20d4e)

---

## October 15, 2025

### 🔧 Chore

Category tuned

- **Author:** svilen
- **Date:** Oct 15, 2025, 12:13:20 PM
- **View Commit:** [af92430](https://gitea.speedy.io/Artificial/llm-wiki/commit/af9243066725fec5c60f8d78b4771e2708a61618)

### 🔧 Chore

Sub category count fix

- **Author:** svilen
- **Date:** Oct 15, 2025, 11:15:31 AM
- **View Commit:** [2167646](https://gitea.speedy.io/Artificial/llm-wiki/commit/2167646032ab6e06f9aa67cd8d8d20335d441a89)

---

## October 11, 2025

### 🔧 Chore

Permissions and navigation improvements

- **Author:** svilen
- **Date:** Oct 11, 2025, 1:55:12 PM
- **View Commit:** [4bce68d](https://gitea.speedy.io/Artificial/llm-wiki/commit/4bce68da3e48c7093f44648e45696ad1b835d51f)

---

## October 7, 2025

### 🔧 Chore

Allow writer and admin to edit all public pages

- **Author:** svilen
- **Date:** Oct 7, 2025, 3:45:44 PM
- **View Commit:** [13c58e3](https://gitea.speedy.io/Artificial/llm-wiki/commit/13c58e399adb0600d6f03a1e75311b6373239b11)

### 🔧 Chore

Visibility flag from backend

- **Author:** svilen
- **Date:** Oct 7, 2025, 3:12:07 PM
- **View Commit:** [45edee7](https://gitea.speedy.io/Artificial/llm-wiki/commit/45edee7dc9ad4f8bde233a789f60bdf696455139)

### 🔧 Chore

Page visibility indicator

- **Author:** svilen
- **Date:** Oct 7, 2025, 2:47:55 PM
- **View Commit:** [f6a6b0d](https://gitea.speedy.io/Artificial/llm-wiki/commit/f6a6b0d43299fcd3c08314a75af377080daf39a3)

### 🔧 Chore

Markdown rendering

- **Author:** svilen
- **Date:** Oct 7, 2025, 2:44:28 PM
- **View Commit:** [414f247](https://gitea.speedy.io/Artificial/llm-wiki/commit/414f247eb19dc474d0ffe09c362619c8bbf1422c)

---

## October 6, 2025

### 🔧 Chore

Attachments and images cleanup and wiki.js attachment import

- **Author:** svilen
- **Date:** Oct 6, 2025, 5:16:13 PM
- **View Commit:** [17cc06d](https://gitea.speedy.io/Artificial/llm-wiki/commit/17cc06daa076c11e6ed7ced0381494e71df6199b)

### 🔧 Chore

Wikijs attachments

- **Author:** svilen
- **Date:** Oct 6, 2025, 1:11:22 PM
- **View Commit:** [532860f](https://gitea.speedy.io/Artificial/llm-wiki/commit/532860f442b03b377c2a51e7d679c6eb040e39c3)

### 🔧 Chore

File attachment + wiki attachment migration

- **Author:** svilen
- **Date:** Oct 6, 2025, 11:34:50 AM
- **View Commit:** [94b21ad](https://gitea.speedy.io/Artificial/llm-wiki/commit/94b21adc63142d1b4cda3f03163218187ace6431)

---

## October 5, 2025

### 🔧 Chore

Background fix

- **Author:** svilen
- **Date:** Oct 5, 2025, 8:29:33 AM
- **View Commit:** [79bd2e8](https://gitea.speedy.io/Artificial/llm-wiki/commit/79bd2e8339d10410f44be939d37e2598116a03bc)

---

## October 4, 2025

### 🔧 Chore

SSE parsing fix for Linux

- **Author:** svilen
- **Date:** Oct 4, 2025, 4:40:45 PM
- **View Commit:** [33c209f](https://gitea.speedy.io/Artificial/llm-wiki/commit/33c209f3416024d3a5d78c23ce94d1995ab4a0f0)

### 🔧 Chore

AI Refactor + Styling

- **Author:** svilen
- **Date:** Oct 4, 2025, 4:31:36 PM
- **View Commit:** [12db7f2](https://gitea.speedy.io/Artificial/llm-wiki/commit/12db7f20660de0078b7d6e362256b3ad2b5f1537)

### 🔧 Chore

All pages and lots of final touches

- **Author:** svilen
- **Date:** Oct 4, 2025, 3:29:43 PM
- **View Commit:** [125c334](https://gitea.speedy.io/Artificial/llm-wiki/commit/125c3344bc7962b103d2f4477a3a16b59101a47a)

### 🔧 Chore

UI improvements

- **Author:** svilen
- **Date:** Oct 4, 2025, 11:38:18 AM
- **View Commit:** [aec641a](https://gitea.speedy.io/Artificial/llm-wiki/commit/aec641a09f291bcbe88d6c724f8a259a72deccad)

### 🔧 Chore

Wikijs import completed

- **Author:** svilen
- **Date:** Oct 4, 2025, 11:20:30 AM
- **View Commit:** [091d784](https://gitea.speedy.io/Artificial/llm-wiki/commit/091d7841ad8596727bf7f271cc6a65ee8d1b07e0)

### 🔧 Chore

Wikijs import

- **Author:** svilen
- **Date:** Oct 4, 2025, 10:10:28 AM
- **View Commit:** [c51d431](https://gitea.speedy.io/Artificial/llm-wiki/commit/c51d4318c624bed8e5039c1e4825406aebbccd77)

---

## October 3, 2025

### 🔧 Chore

Wiki js import

- **Author:** svilen
- **Date:** Oct 3, 2025, 6:26:28 PM
- **View Commit:** [39ba09a](https://gitea.speedy.io/Artificial/llm-wiki/commit/39ba09a0f5fcd3dd8f2a7d8782519fbbf91e9cd6)

### 🔧 Chore

Session timeout increase

- **Author:** svilen
- **Date:** Oct 3, 2025, 4:04:04 PM
- **View Commit:** [31ae7ae](https://gitea.speedy.io/Artificial/llm-wiki/commit/31ae7aec2c8b1632950e30eb7490e1b7e4f0a4f1)

### 🔧 Chore

Update embeddings fix

- **Author:** svilen
- **Date:** Oct 3, 2025, 3:15:42 PM
- **View Commit:** [4da39f6](https://gitea.speedy.io/Artificial/llm-wiki/commit/4da39f6638019398ea4a6f8a89dbc16f30ea490c)

### 🔧 Chore

AI Assistant improvement

- **Author:** svilen
- **Date:** Oct 3, 2025, 3:10:54 PM
- **View Commit:** [975f218](https://gitea.speedy.io/Artificial/llm-wiki/commit/975f218c95603f029f1577d5f1ad88cdc18e4db6)

### 🔧 Chore

Ldap login fixed

- **Author:** svilen
- **Date:** Oct 3, 2025, 2:52:45 PM
- **View Commit:** [cdfb40a](https://gitea.speedy.io/Artificial/llm-wiki/commit/cdfb40ad8ddffdd69863cfe16cf50cee577091be)

---

## September 30, 2025

### 🔧 Chore

Category and archived pages hard delete

- **Author:** svilen
- **Date:** Sep 30, 2025, 3:24:43 PM
- **View Commit:** [72d52e4](https://gitea.speedy.io/Artificial/llm-wiki/commit/72d52e4826e2c5c28994c3f609107acb49dc18f8)

### 🔧 Chore

Category fix

- **Author:** svilen
- **Date:** Sep 30, 2025, 2:27:59 PM
- **View Commit:** [ab35eb4](https://gitea.speedy.io/Artificial/llm-wiki/commit/ab35eb4cdd9c42d11dbbe807e3979ef9310e5b24)

### 🔧 Chore

ORM model fix

- **Author:** svilen
- **Date:** Sep 30, 2025, 2:17:23 PM
- **View Commit:** [89906d2](https://gitea.speedy.io/Artificial/llm-wiki/commit/89906d28e0f5a10c81eefe6c59ea897caae62d67)

### 🔧 Chore

Delete user fix

- **Author:** svilen
- **Date:** Sep 30, 2025, 2:13:49 PM
- **View Commit:** [41d96e6](https://gitea.speedy.io/Artificial/llm-wiki/commit/41d96e68b37c6a55c95a71d0558719257796fdec)

### 🔧 Chore

Assistant functionality

- **Author:** svilen
- **Date:** Sep 30, 2025, 2:07:27 PM
- **View Commit:** [20c40b9](https://gitea.speedy.io/Artificial/llm-wiki/commit/20c40b9c164b2ad5df0d88cfd41d18994dbba0d0)

### 🔧 Chore

Html sanitize and version history

- **Author:** svilen
- **Date:** Sep 30, 2025, 1:41:04 PM
- **View Commit:** [6e41313](https://gitea.speedy.io/Artificial/llm-wiki/commit/6e413135f09f0671362b8b3be5bb8446b93fdcca)

---

## September 29, 2025

### 🔧 Chore

Image management, page links

- **Author:** svilen
- **Date:** Sep 29, 2025, 5:37:17 PM
- **View Commit:** [7723cb0](https://gitea.speedy.io/Artificial/llm-wiki/commit/7723cb00c91ad6b30f54cee9267e2bf455a1ab6a)

### 🔧 Chore

Image management

- **Author:** svilen
- **Date:** Sep 29, 2025, 4:31:39 PM
- **View Commit:** [95e9f98](https://gitea.speedy.io/Artificial/llm-wiki/commit/95e9f98e67cd66a4ae89b3b9a71dce009368909d)

---

## September 27, 2025

### 🔧 Chore

Port ignore

- **Author:** svilen
- **Date:** Sep 27, 2025, 9:53:03 AM
- **View Commit:** [3c70839](https://gitea.speedy.io/Artificial/llm-wiki/commit/3c70839ce08b07e089eb10cdd610448d094065b7)

### 🔧 Chore

Port definition

- **Author:** svilen
- **Date:** Sep 27, 2025, 9:39:41 AM
- **View Commit:** [2fe963f](https://gitea.speedy.io/Artificial/llm-wiki/commit/2fe963f0be23b618a865e8a0f1c23bb0b9f27eb0)

---

## September 26, 2025

### 🔧 Chore

AI Refactor + ldap

- **Author:** svilen
- **Date:** Sep 26, 2025, 6:00:26 PM
- **View Commit:** [345dbee](https://gitea.speedy.io/Artificial/llm-wiki/commit/345dbee529eb72dd4c3a68f2009719b6f29c8304)

---

## September 25, 2025

### 🔧 Chore

User create/edit/delete

- **Author:** svilen
- **Date:** Sep 25, 2025, 5:14:40 PM
- **View Commit:** [69fae27](https://gitea.speedy.io/Artificial/llm-wiki/commit/69fae273d9a9eadbac255a68abef8f792924879b)

### 🐛 Fix

Fixes, optimizations and permissions

- **Author:** svilen
- **Date:** Sep 25, 2025, 4:46:22 PM
- **View Commit:** [e910d96](https://gitea.speedy.io/Artificial/llm-wiki/commit/e910d968e471cbc394241dfe2583b6303dab0080)

### 🔧 Chore

Permission management

- **Author:** svilen
- **Date:** Sep 25, 2025, 9:47:52 AM
- **View Commit:** [59cf247](https://gitea.speedy.io/Artificial/llm-wiki/commit/59cf247a02db368131f8745101d57fe2bcfc5f3c)

---

## September 22, 2025

### 🔧 Chore

Category management, sub categories, lots of fixed and optimizations

- **Author:** svilen
- **Date:** Sep 22, 2025, 3:15:26 PM
- **View Commit:** [b579377](https://gitea.speedy.io/Artificial/llm-wiki/commit/b5793776b82f8dcd17f15c8522435bc0c4e7619c)

---

## September 21, 2025

### 🔧 Chore

Redesign, my draft page, fixes

- **Author:** svilen
- **Date:** Sep 21, 2025, 10:04:23 AM
- **View Commit:** [75ec36f](https://gitea.speedy.io/Artificial/llm-wiki/commit/75ec36fb495d4d5cbfc94c86b6aaf214526bfe67)

### 🔧 Chore

Users and Access Groups

- **Author:** svilen
- **Date:** Sep 21, 2025, 9:30:42 AM
- **View Commit:** [a818bb8](https://gitea.speedy.io/Artificial/llm-wiki/commit/a818bb87d300863b7fca17c5ce55bf62a81a31ce)

### 🔧 Chore

LLM connection done

- **Author:** svilen
- **Date:** Sep 21, 2025, 9:03:06 AM
- **View Commit:** [3f6828d](https://gitea.speedy.io/Artificial/llm-wiki/commit/3f6828d7af1d65cf6aa132119b032ec3a297d0df)

### 🔧 Chore

Login, create users fixes

- **Author:** svilen
- **Date:** Sep 21, 2025, 8:20:57 AM
- **View Commit:** [13ef961](https://gitea.speedy.io/Artificial/llm-wiki/commit/13ef96119b73e64cee6e362992d2ea65c6b0cebd)

---




---

*This changelog is automatically generated from Gitea repositories.*
