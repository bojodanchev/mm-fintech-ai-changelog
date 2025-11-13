# MM Fintech AI Changelog

Latest changes and updates to internal products.

*Last updated: Nov 13, 2025, 11:28:33 AM*

---

# LLM Change Management

## November 13, 2025

### 🐛 Fix

Fix Mark as Implemented permission issue Changed implement endpoint from get_implementator_user to get_requester_user to allow all non-viewer roles (admin, approver, implementator, requester) to mark 

- **Author:** bozhidar.danchev
- **Date:** Nov 13, 2025, 10:40:59 AM
- **View Commit:** [7ef18f6](https://gitea.speedy.io/Artificial/llm-change-management/commit/7ef18f62fbaf6c8c4c329d1acf6e2cb86e095a43)

### ✨ Feature

Make change requests fully immutable for audit trail compliance Complete immutability implementation: - Removed edit functionality from change request UI (both desktop and mobile) - Removed PUT endpoi

- **Author:** bozhidar.danchev
- **Date:** Nov 13, 2025, 10:33:18 AM
- **View Commit:** [6b16a56](https://gitea.speedy.io/Artificial/llm-change-management/commit/6b16a5608b8010092e30a4f47d854dab33d9aac6)

### ✨ Feature

Fixed login dark screen background - Made body background transparent on login page - Added login-page class to body when on login route - Ensures background image displays properly on first visit and

- **Author:** bozhidar.danchev
- **Date:** Nov 13, 2025, 9:23:11 AM
- **View Commit:** [9c83c37](https://gitea.speedy.io/Artificial/llm-change-management/commit/9c83c3742e0c1305ea62f3fa9a4206068ddc1ac4)

---

## November 11, 2025

### 🔧 Chore

Allow implement from in progress

- **Author:** bozhidar.danchev
- **Date:** Nov 11, 2025, 9:29:45 AM
- **View Commit:** [2434ddf](https://gitea.speedy.io/Artificial/llm-change-management/commit/2434ddf66ed266b261bd649a1329848505754aa1)

### 🔧 Chore

Show mark implemented in progress

- **Author:** bozhidar.danchev
- **Date:** Nov 11, 2025, 9:09:04 AM
- **View Commit:** [cd72728](https://gitea.speedy.io/Artificial/llm-change-management/commit/cd72728743834c553aefbf5a68ce51edfa07cf2b)

---

## November 10, 2025

### 🔧 Chore

Tighten status legend spacing

- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 5:30:41 PM
- **View Commit:** [b067d83](https://gitea.speedy.io/Artificial/llm-change-management/commit/b067d83e2b1b7046ee854e1f1e1d80f0222b0798)

### 🔧 Chore

Improve top categories bar labels

- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 5:12:00 PM
- **View Commit:** [52a0a12](https://gitea.speedy.io/Artificial/llm-change-management/commit/52a0a127c5c0ef8a17ea8bb585f98c1a7e4afdbc)

### 🔧 Chore

Polish access modal dark theme

- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 4:05:03 PM
- **View Commit:** [211174c](https://gitea.speedy.io/Artificial/llm-change-management/commit/211174ca5bfbac9b1166254dae835ae33b09d545)

### 🔧 Chore

Polish task list dark mode

- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 3:51:41 PM
- **View Commit:** [c47d183](https://gitea.speedy.io/Artificial/llm-change-management/commit/c47d183dd18f6e2b57f4fb70e12a39e6caf6eee7)

### 🔧 Chore

Dark mode status modal

- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 3:46:36 PM
- **View Commit:** [2065702](https://gitea.speedy.io/Artificial/llm-change-management/commit/2065702d2070bf3d47c80ed74c20fbdc09cc35a2)

### 🔧 Chore

Polish edit modal dark mode

- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 3:40:59 PM
- **View Commit:** [b347533](https://gitea.speedy.io/Artificial/llm-change-management/commit/b347533376b608c3efa50bc018514395d3d4d106)

### 🔧 Chore

Normalize timezone handling utilities

- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 3:27:10 PM
- **View Commit:** [6ea9f31](https://gitea.speedy.io/Artificial/llm-change-management/commit/6ea9f31e83c173be191e8259c49eab7ecefa9f4e)

### ✨ Feature

Implement UTC timezone handling for consistent timestamp storage and display This commit fixes timezone handling across the application by centralizing UTC awareness at the point of timestamp generati

- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 2:43:07 PM
- **View Commit:** [e3f5765](https://gitea.speedy.io/Artificial/llm-change-management/commit/e3f5765d8f5d44fdd6bcfe6a948cd01b22962695)

### 🔧 Chore

Apply comprehensive dark mode to Analytics page and chart components Implemented full dark mode for Analytics dashboard based on DevOps team feedback: - All KPI cards with dark backgrounds, borders, a

- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 1:14:31 PM
- **View Commit:** [f495c1f](https://gitea.speedy.io/Artificial/llm-change-management/commit/f495c1fb6f9a2abe5a4b738c109534b14fd8d7f0)

### ✨ Feature

Apply comprehensive dark mode to New Change form and Comments section Fixed both issues reported by the team: 1. Applied full dark mode styling to ChangeRequestForm.js (New Change page) - All text inp

- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 1:04:55 PM
- **View Commit:** [c8dc8f3](https://gitea.speedy.io/Artificial/llm-change-management/commit/c8dc8f3950d13e93eaf003727e41fff1037fd472)

### ✨ Feature

Complete dark mode implementation for all remaining pages and components Finalize comprehensive dark mode coverage across the entire application: **Critical User-Reported Fixes:** - MyRequestsPage.js:

- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 10:47:39 AM
- **View Commit:** [3b02aea](https://gitea.speedy.io/Artificial/llm-change-management/commit/3b02aeae19ddae8aad252c428c866595f74dd8c9)

### ✨ Feature

Add dark mode to critical user-facing components Implement comprehensive dark mode styling for key application pages and components: **Critical Pages:** - ChangeRequestList.js: Complete dark mode for 

- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 10:21:05 AM
- **View Commit:** [12ccdf4](https://gitea.speedy.io/Artificial/llm-change-management/commit/12ccdf4637d5b7422995c552134ed2e6cc82ac9b)

### ✨ Feature

Implement comprehensive dark mode for core UI components Add dark mode styling to layout, navigation, dashboard, and badge system: **Core Infrastructure:** - Layout.js: Add dark background (bg-gray-90

- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 10:10:42 AM
- **View Commit:** [e804bb0](https://gitea.speedy.io/Artificial/llm-change-management/commit/e804bb0fa3bc95fb772ae56c78c9c3477fb64000)

---

## November 7, 2025

### ✨ Feature

Add manual dark mode toggle with cookie persistence Implement user-controlled dark mode instead of automatic system detection: - Change Tailwind config from 'media' to 'class' mode for manual control 

- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 5:32:12 PM
- **View Commit:** [71b0460](https://gitea.speedy.io/Artificial/llm-change-management/commit/71b0460eddbf6cdb5346d34d00ad14b8278dad7d)

### ✨ Feature

Fix dark mode text visibility across forms and modals Add missing dark mode styling to ensure text is visible in both light and dark modes: - ChangeRequestForm.js: Fixed input fields, textareas, dropd

- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 4:57:43 PM
- **View Commit:** [62071e5](https://gitea.speedy.io/Artificial/llm-change-management/commit/62071e500ba18f7972f11f2dc2985bd7db93c4bf)

### 🐛 Fix

Fix image preview loading for ticket attachments Images now load correctly through authenticated API calls using blob URLs instead of direct img src, resolving authentication issues with JWT-protected

- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 4:06:08 PM
- **View Commit:** [1f3573e](https://gitea.speedy.io/Artificial/llm-change-management/commit/1f3573ea37666ff22902e689c88a7e2ed88fbdcc)

### ✨ Feature

Add OpenRouter API integration as alternative LLM provider Implement OpenRouter as a simple, cloud-based alternative to locally hosted vLLM. Users can now choose between providers via environment vari

- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 2:00:28 PM
- **View Commit:** [b5e3456](https://gitea.speedy.io/Artificial/llm-change-management/commit/b5e3456ec175bc82ca1376fa34bb19f505910da7)

### ✨ Feature

Update .gitignore to exclude local development files Added entries to ignore local development files that should not be committed: - .claude/ (Claude Code configuration) - Docker files (Dockerfile, do

- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 1:46:20 PM
- **View Commit:** [ae0af38](https://gitea.speedy.io/Artificial/llm-change-management/commit/ae0af38ad91f068571f275f574117be177aed6f9)

### 📚 Documentation

Clean up: Remove obsolete documentation files from repository root Removed 9 documentation files that were cluttering the repository root: - AUTO_REFRESH_IMPLEMENTATION.md - DARK_MODE_IMPLEMENTATION.m

- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 1:45:44 PM
- **View Commit:** [cc3ad1d](https://gitea.speedy.io/Artificial/llm-change-management/commit/cc3ad1da42b96dc788a80b8b68e471db4025a8d0)

---

## November 6, 2025

### 🐛 Fix

Remove orphaned comment update/delete callback props

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 5:12:18 PM
- **View Commit:** [9bdfe7d](https://gitea.speedy.io/Artificial/llm-change-management/commit/9bdfe7d3f740cf088c5e3042e9c57a9250af1f6c)

### ✨ Feature

Implement immutable audit trail for comments and tasks PROBLEM ADDRESSED: - Security audit requirements mandate full traceability of all information - Previous implementation allowed editing and delet

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 5:08:01 PM
- **View Commit:** [ce747bf](https://gitea.speedy.io/Artificial/llm-change-management/commit/ce747bf5573ee73d3128a5473d112a27f0513da8)

### ✨ Feature

Add manual LDAP Re-Sync feature for user management FEATURE: Manual LDAP Re-Sync button in Users section to restore user access after corporate password rotation or LDAP directory changes. PROBLEM ADD

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 4:45:04 PM
- **View Commit:** [cd6b158](https://gitea.speedy.io/Artificial/llm-change-management/commit/cd6b158132933f4ae6f54c69bfb7ec1736d80dc7)

### ✨ Feature

Fix critical session duration bug and add proactive token refresh CRITICAL BUG FIXED: - Access tokens were hardcoded to 60 minutes instead of configured 9 hours - Users were being logged out after 1 h

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 4:29:15 PM
- **View Commit:** [7d58dc6](https://gitea.speedy.io/Artificial/llm-change-management/commit/7d58dc670e712598071a16c9f22c478db2f4f4d3)

### ✨ Feature

Extend session duration and improve token refresh handling Problem: - Users experiencing unexpected logouts - Session duration was hardcoded to 12 hours - Token durations not configurable via .env - A

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 4:23:45 PM
- **View Commit:** [7eba4e7](https://gitea.speedy.io/Artificial/llm-change-management/commit/7eba4e774837c5d20037ee82b0a4a5a60951e954)

### ✨ Feature

Fix critical React dependency issues in auto-refresh feature ## Summary Applied QA fixes to resolve critical React hooks dependency issues that could cause stale closures and unexpected behavior. All 

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 2:03:21 PM
- **View Commit:** [9465956](https://gitea.speedy.io/Artificial/llm-change-management/commit/94659562842c7c87542cdb5f10dde978d9321dd7)

### ✨ Feature

Implement auto-refresh for change request detail page ## Summary Added automatic data refresh mechanism that updates change request details, comments, history, and attachments every 5 minutes without 

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 1:57:34 PM
- **View Commit:** [ae77d66](https://gitea.speedy.io/Artificial/llm-change-management/commit/ae77d66f8e58147b37000e0b5a20af31d3003860)

### ✨ Feature

Fix critical bugs and QA issues from three feature implementation Applied QA fixes addressing critical and high-priority issues: CRITICAL FIXES: 1. Fixed timezone offset calculation (timezoneUtils.js)

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 1:44:39 PM
- **View Commit:** [6c0189e](https://gitea.speedy.io/Artificial/llm-change-management/commit/6c0189ec463da6abc4648f28e491662b096bcca2)

### ✨ Feature

Add screenshot attachment inline preview with lightbox modal Implemented inline image preview functionality for screenshot attachments: - Created ImagePreviewModal component (139 lines) - Lightbox ove

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 1:39:48 PM
- **View Commit:** [0b32b96](https://gitea.speedy.io/Artificial/llm-change-management/commit/0b32b9653351d27d7f432f10c7ab085f9bab0bc2)

### ✨ Feature

Implement automatic dark mode with system-level theme detection ## Summary Implemented automatic dark mode that dynamically detects and responds to the user's system-level theme preferences (Windows, 

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 1:27:08 PM
- **View Commit:** [d5768de](https://gitea.speedy.io/Artificial/llm-change-management/commit/d5768de1a7f4e5e86151ef75498ce1faf1844c1f)

### 💥 Breaking Change

Implement local timezone synchronization for accurate DevOps KPI tracking ## Summary Implemented comprehensive browser-based timezone synchronization to automatically detect and display submission tim

- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 1:18:04 PM
- **View Commit:** [7015ad7](https://gitea.speedy.io/Artificial/llm-change-management/commit/7015ad71039346977678f2364ac6e86283145d76)

---

## October 29, 2025

### 🔧 Chore

Send telegram when Draft becomes Pending

- **Author:** svilen
- **Date:** Oct 29, 2025, 3:51:48 PM
- **View Commit:** [974bbe2](https://gitea.speedy.io/Artificial/llm-change-management/commit/974bbe2116bedec5dfe54ad07ffbe7c7268a5fa9)

### ✨ Feature

Add new categories to templates as well

- **Author:** svilen
- **Date:** Oct 29, 2025, 3:30:39 PM
- **View Commit:** [a259eed](https://gitea.speedy.io/Artificial/llm-change-management/commit/a259eeda4b220664352fa9bba1b7b2ed58f201e2)

### ✨ Feature

New acccess categories - Human resource and Database

- **Author:** svilen
- **Date:** Oct 29, 2025, 2:30:42 PM
- **View Commit:** [0249381](https://gitea.speedy.io/Artificial/llm-change-management/commit/0249381074648b96323791d471c4ae6d9d2c1868)

### 🔧 Chore

Templates access check

- **Author:** svilen
- **Date:** Oct 29, 2025, 10:45:06 AM
- **View Commit:** [c9a9ac6](https://gitea.speedy.io/Artificial/llm-change-management/commit/c9a9ac61c21b1de2c28cabb2fdab000ac26702c2)

### 🔧 Chore

Endpoint fixes

- **Author:** svilen
- **Date:** Oct 29, 2025, 9:56:57 AM
- **View Commit:** [fa2b34d](https://gitea.speedy.io/Artificial/llm-change-management/commit/fa2b34d379029a22b8022742c91129ed64ae2e1d)

### 🔧 Chore

Routes fixed

- **Author:** svilen
- **Date:** Oct 29, 2025, 9:43:23 AM
- **View Commit:** [26ac370](https://gitea.speedy.io/Artificial/llm-change-management/commit/26ac370ddb88e4ad784c1192f0f838c9680185e4)

### 🔧 Chore

Templates creation fix

- **Author:** svilen
- **Date:** Oct 29, 2025, 8:55:03 AM
- **View Commit:** [9d7b0b0](https://gitea.speedy.io/Artificial/llm-change-management/commit/9d7b0b06be966884e2004b6168ca8f01467696d4)

---

## October 15, 2025

### 🔧 Chore

Analitics fix

- **Author:** svilen
- **Date:** Oct 15, 2025, 3:08:09 PM
- **View Commit:** [ab788aa](https://gitea.speedy.io/Artificial/llm-change-management/commit/ab788aa7e11cc048ee8f90abe57a01ab05f9dde2)

### 🔧 Chore

Analytics fix

- **Author:** svilen
- **Date:** Oct 15, 2025, 2:50:28 PM
- **View Commit:** [d141333](https://gitea.speedy.io/Artificial/llm-change-management/commit/d14133391cbc378f9adcb5c8b3f822b919941779)

---

## October 5, 2025

### 🔧 Chore

LDAP support + login tuned up

- **Author:** svilen
- **Date:** Oct 5, 2025, 8:39:39 AM
- **View Commit:** [40de3fa](https://gitea.speedy.io/Artificial/llm-change-management/commit/40de3faa30610117715e1220752cb10bbe1c2133)

---

## September 30, 2025

### 🔧 Chore

File attachment for change request

- **Author:** svilen
- **Date:** Sep 30, 2025, 5:43:49 PM
- **View Commit:** [cf602ce](https://gitea.speedy.io/Artificial/llm-change-management/commit/cf602ce9bbd7be9bbf8310ac279889cf274ae8ca)

---

## September 25, 2025

### ✨ Feature

Optional title added and UI improvements

- **Author:** svilen
- **Date:** Sep 25, 2025, 6:36:56 PM
- **View Commit:** [d5e8d74](https://gitea.speedy.io/Artificial/llm-change-management/commit/d5e8d74134aa0c6d702028f25ef94eb806a9f198)

---

## September 17, 2025

### 🔧 Chore

AI Offline mode enhanced

- **Author:** svilen
- **Date:** Sep 17, 2025, 6:12:29 PM
- **View Commit:** [b08dd91](https://gitea.speedy.io/Artificial/llm-change-management/commit/b08dd91b894799acc08f5efc5b0d84421d84962b)

---

## September 11, 2025

### 🔧 Chore

Untitled tickets creation fix

- **Author:** svilen
- **Date:** Sep 11, 2025, 11:14:04 AM
- **View Commit:** [71b1c2c](https://gitea.speedy.io/Artificial/llm-change-management/commit/71b1c2c7aeab8b4d6a2c1758bc70a7f849cfbb60)

---

## September 7, 2025

### 🔧 Chore

AI vacation mode + smart AI health check

- **Author:** svilen
- **Date:** Sep 7, 2025, 11:50:44 AM
- **View Commit:** [ff5ac4c](https://gitea.speedy.io/Artificial/llm-change-management/commit/ff5ac4c5af5380cd3d9ee5cc39a352e237d39985)

---



# LLM Support Tickets

## November 12, 2025

### 🔧 Chore

Enhanced agent message handoff security

- **Author:** bozhidar.danchev
- **Date:** Nov 12, 2025, 5:10:40 PM
- **View Commit:** [f32bcb2](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/f32bcb2c81035b77175e0facadee9a8cc7d4d0c3)

### 🔧 Chore

Introduced admin-facing message

- **Author:** bozhidar.danchev
- **Date:** Nov 12, 2025, 4:25:02 PM
- **View Commit:** [4438433](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/44384339c76211e22f6fda0f6cf8dafe38a18981)

### ✨ Feature

Add structured output support for diagnostic analysis

- **Author:** bozhidar.danchev
- **Date:** Nov 12, 2025, 3:29:14 PM
- **View Commit:** [c9b291a](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/c9b291ab85680e6a5dc7a900cb4624ee950f6dc8)

### 🔧 Chore

KB Retrieval Pipeline Fixed

- **Author:** bozhidar.danchev
- **Date:** Nov 12, 2025, 3:10:53 PM
- **View Commit:** [b11269e](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/b11269edb02f00476f97cf310876705d1b2f5bbe)

### ✨ Feature

Add new knowledge base docs

- **Author:** bozhidar.danchev
- **Date:** Nov 12, 2025, 12:47:16 PM
- **View Commit:** [3bbe0d3](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/3bbe0d357ba41c54340e0c95dddc9ae60103dc35)

### 🐛 Fix

Fix ticket reference usage in responses

- **Author:** bozhidar.danchev
- **Date:** Nov 12, 2025, 10:25:52 AM
- **View Commit:** [58a9076](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/58a9076c48117241dc817e25c3728afd80ca4120)

### 🔧 Chore

Comprehensive ticket retrieval logging

- **Author:** bozhidar.danchev
- **Date:** Nov 12, 2025, 10:17:39 AM
- **View Commit:** [894102e](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/894102e0d0d79a30a7a84fabc483906f0d964db0)

### ✨ Feature

Add diagnostic response format and risk group detection

- **Author:** bozhidar.danchev
- **Date:** Nov 12, 2025, 10:11:38 AM
- **View Commit:** [8cf5351](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/8cf5351d9851ce707f3b751358478f433717929d)

### 🔧 Chore

Update gitignore and clean test artifacts. Verified KB chunking, prioritization, and grounding validation working correctly.

- **Author:** bozhidar.danchev
- **Date:** Nov 12, 2025, 9:43:28 AM
- **View Commit:** [f0c78ab](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/f0c78abc4603ad63089fd9ab89ba7927586315b5)

---

## November 11, 2025

### ✨ Feature

switch vector store to persistent client

- **Author:** bozhidar.danchev
- **Date:** Nov 11, 2025, 5:28:09 PM
- **View Commit:** [0d232a6](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/0d232a605651b7f1d654079bc1d52540c193c0ad)

### 🔧 Chore

persist vector store after rebuild

- **Author:** bozhidar.danchev
- **Date:** Nov 11, 2025, 5:23:05 PM
- **View Commit:** [1314954](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/1314954163e68c4539a6bdbc87a5455108469aa4)

### 🐛 Fix

improve diagnostic parsing and modal scroll

- **Author:** bozhidar.danchev
- **Date:** Nov 11, 2025, 4:52:00 PM
- **View Commit:** [24c1a4a](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/24c1a4a646efa809ec799a269c0dc284ed456a4e)

### 🐛 Fix

deterministic transaction id parsing

- **Author:** bozhidar.danchev
- **Date:** Nov 11, 2025, 4:18:24 PM
- **View Commit:** [58daec5](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/58daec5cb5cd4726f9fda6c53c2002bf8b01d908)

### 🐛 Fix

Fix transaction ID extraction and mapping in diagnostic system

- **Author:** bozhidar.danchev
- **Date:** Nov 11, 2025, 3:14:02 PM
- **View Commit:** [8144c77](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/8144c777b6eb5961fa27ff119473bd28cd2f5dea)

### ✨ Feature

add grounding safeguards

- **Author:** bozhidar.danchev
- **Date:** Nov 11, 2025, 3:04:19 PM
- **View Commit:** [e7d8dd2](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/e7d8dd2e30b9a4a84e6c3b93866e03193be472e7)

### 🔧 Chore

tighten KB grounding and citations

- **Author:** bozhidar.danchev
- **Date:** Nov 11, 2025, 2:02:45 PM
- **View Commit:** [1c4dd3a](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/1c4dd3acc4e702f0bb3d81dbf5748cb10b7f8c2e)

### ✨ Feature

Improve system and diagnostic prompts for better KB prioritization - Enhanced system prompt to prioritize Knowledge Base as authoritative source - Limited historical ticket references to 1-2 most rele

- **Author:** bozhidar.danchev
- **Date:** Nov 11, 2025, 1:23:45 PM
- **View Commit:** [f37cb7f](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/f37cb7f4663cc0108e14cdbace25598e67a3ee28)

### ✨ Feature

Upgrade knowledge base architecture for better RAG performance - Increased KB context from 600 to 6,000 chars (10x improvement) - Increased ticket context from 500 to 3,000 chars (6x improvement) - Im

- **Author:** bozhidar.danchev
- **Date:** Nov 11, 2025, 12:53:57 PM
- **View Commit:** [065272a](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/065272a4de6fe05b674f90f977c9af77696bd420)

---

## August 10, 2025

### 🔧 Chore

Support tickets - card problems diagnostics

- **Author:** svilen
- **Date:** Aug 10, 2025, 1:55:10 PM
- **View Commit:** [bb19709](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/bb197096d4eb3f87125ef2f79f0366cc02382f7b)

---

## July 20, 2025

### 🔧 Chore

Knowledge base refresh fixed

- **Author:** svilen
- **Date:** Jul 20, 2025, 5:52:27 PM
- **View Commit:** [29092f0](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/29092f092b6a51629c3ed2a723522291d9d6c985)

---

## July 19, 2025

### 🔧 Chore

Status change fix

- **Author:** svilen
- **Date:** Jul 19, 2025, 4:37:35 PM
- **View Commit:** [4429a5e](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/4429a5e8a6e3b9a419362a5f9b932659360ce432)

### 🔧 Chore

Ticket status change fix

- **Author:** svilen
- **Date:** Jul 19, 2025, 4:32:21 PM
- **View Commit:** [c0f4013](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/c0f4013b02763626d01d7841768056e33cfd6c7a)

### 🔧 Chore

Improved default prompts

- **Author:** svilen
- **Date:** Jul 19, 2025, 3:54:24 PM
- **View Commit:** [a7d5058](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/a7d505801b5d83e25d53c53f922091932327428e)

### 🔧 Chore

Editors height

- **Author:** svilen
- **Date:** Jul 19, 2025, 3:06:02 PM
- **View Commit:** [67c878d](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/67c878d2365d7c0e95ed64d8070af8cef4fd7360)

### 🐛 Fix

Generated response with vision fix, styling and fe errors

- **Author:** svilen
- **Date:** Jul 19, 2025, 2:46:45 PM
- **View Commit:** [8ee5c4f](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/8ee5c4f28d89f0164e684a79baaaf319f5ab249e)

### 🔧 Chore

None len fix

- **Author:** svilen
- **Date:** Jul 19, 2025, 2:15:53 PM
- **View Commit:** [464cd6f](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/464cd6f9cf82bfba7f3ca23529c27f88a434fb5b)

### 🔧 Chore

Null check

- **Author:** svilen
- **Date:** Jul 19, 2025, 2:13:55 PM
- **View Commit:** [eeee510](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/eeee5102cc5fe21f709be78bad9da190805edfcc)

### 🔧 Chore

Diagnostic mapping fixed

- **Author:** svilen
- **Date:** Jul 19, 2025, 2:10:14 PM
- **View Commit:** [1dbbafb](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/1dbbafbf4abb61cde6b087b05a3494024f5fe1b5)

---

## July 17, 2025

### 🔧 Chore

Switch vision and diagnostic, show diagnostic information.

- **Author:** svilen
- **Date:** Jul 17, 2025, 12:33:30 PM
- **View Commit:** [d253267](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/d253267ac215196a4f4e3cd6d731d60561b19643)

---

## July 15, 2025

### 🔧 Chore

Port for images fix

- **Author:** svilen
- **Date:** Jul 15, 2025, 12:52:18 PM
- **View Commit:** [c3ec4aa](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/c3ec4aa7bcd05c7e5b53ba9539999aa055881dd8)

### 🔧 Chore

App port handling

- **Author:** svilen
- **Date:** Jul 15, 2025, 12:49:00 PM
- **View Commit:** [d6b973d](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/d6b973d6dab402d0de70d3d053bdb473388153b8)

---

## July 14, 2025

### 🔧 Chore

Polished UI

- **Author:** svilen
- **Date:** Jul 14, 2025, 11:04:19 PM
- **View Commit:** [3a54205](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/3a54205cef3872ae19b8c135018dd181d067491f)

### 🔧 Chore

Dynamic LLM control

- **Author:** svilen
- **Date:** Jul 14, 2025, 10:02:00 PM
- **View Commit:** [9ecb9a8](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/9ecb9a85eda1bbb76cdf2d85ea5830d94b5353f8)

### 🔧 Chore

Removed tickets_cache

- **Author:** svilen
- **Date:** Jul 14, 2025, 8:42:13 PM
- **View Commit:** [598cba3](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/598cba3709c68398a9d32409793a902eff2c96fc)

### 🔧 Chore

Merge branch 'development' of https://gitea.speedy.io/Artificial/llm-support-tickets into development # Conflicts: #	tickets_cache.db

- **Author:** svilen
- **Date:** Jul 14, 2025, 6:58:49 PM
- **View Commit:** [cdffb01](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/cdffb016f64b90036dce8ee2b5ff8078bcb75cb1)

### 🐛 Fix

React front-end local debug

- **Author:** svilen
- **Date:** Jul 14, 2025, 6:56:45 PM
- **View Commit:** [5080566](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/508056641180ef5cabf85dd0e4144ade8361f67a)

---

## July 12, 2025

### 🔧 Chore

Removed db from git

- **Author:** svilen
- **Date:** Jul 12, 2025, 4:50:51 PM
- **View Commit:** [706c583](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/706c5836c65d0fb17451bbd2f847ad333029df3f)

---

## July 11, 2025

### 🔧 Chore

Support tickets - React frontend

- **Author:** svilen
- **Date:** Jul 11, 2025, 5:51:12 PM
- **View Commit:** [c13e97e](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/c13e97e8669ec877580fcbb2d5d8634496f3748b)

---

## July 1, 2025

### 🔧 Chore

Updated knowledge base

- **Author:** svilen
- **Date:** Jul 1, 2025, 1:56:50 PM
- **View Commit:** [f6094cf](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/f6094cfafffdc9e6a3dd208d192de1df2e66a5e2)

---

## June 28, 2025

### 🔧 Chore

smart ticket refresh

- **Author:** svilen
- **Date:** Jun 28, 2025, 1:11:02 PM
- **View Commit:** [e6aef25](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/e6aef2575c79af464c4cb53f489cba9b52bc060e)

---

## June 23, 2025

### 🔧 Chore

Updated prompts

- **Author:** svilen
- **Date:** Jun 23, 2025, 7:34:28 PM
- **View Commit:** [c0b6ffc](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/c0b6ffca391db619ca72ea363a4874b12580a2d0)

### 🔧 Chore

Brand separation on tickets cache

- **Author:** svilen
- **Date:** Jun 23, 2025, 2:27:19 PM
- **View Commit:** [836bce3](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/836bce3304a19e69b8a172abb6ad783c6d42e56f)

---

## June 21, 2025

### 🔧 Chore

Multiple diagnostic functions for ticket analysis

- **Author:** svilen
- **Date:** Jun 21, 2025, 9:52:03 AM
- **View Commit:** [5400827](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/540082788f061f0cc6f0647e74d0181cd3933289)

### 🔧 Chore

Advanced problem investigation

- **Author:** svilen
- **Date:** Jun 21, 2025, 9:05:14 AM
- **View Commit:** [e98a369](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/e98a369665c320f35ee6eeff6007512e83dda1cf)

---

## June 20, 2025

### 🔧 Chore

Include only CLOSED and RESOLVED tickets as knowledge

- **Author:** svilen
- **Date:** Jun 20, 2025, 3:59:47 PM
- **View Commit:** [3c42245](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/3c422450895af4ab37044905347ceb2e3ef2c85b)

### 🔧 Chore

Live support service refactoring

- **Author:** svilen
- **Date:** Jun 20, 2025, 3:12:10 PM
- **View Commit:** [bb1a5ac](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/bb1a5acbe2e76a5f1411c7be4f7e4d2dca5b7ef6)

### 🔧 Chore

Vision evaluation of messages

- **Author:** svilen
- **Date:** Jun 20, 2025, 1:08:58 PM
- **View Commit:** [9d213f1](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/9d213f138f47c9da852ef5033510dfbf29b937ef)

### 🔧 Chore

Image handle + AI vision

- **Author:** svilen
- **Date:** Jun 20, 2025, 10:47:32 AM
- **View Commit:** [58ccfcd](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/58ccfcd01d3789602248c1f8954020c70fdf97e6)

---

## June 19, 2025

### 🔧 Chore

Dynamic ticket loading

- **Author:** svilen
- **Date:** Jun 19, 2025, 3:44:33 PM
- **View Commit:** [25a4d95](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/25a4d95150a3a333f630903d4963ca4835dc6d55)

---

## June 18, 2025

### 🔧 Chore

Qwen3 reasoning handle

- **Author:** svilen
- **Date:** Jun 18, 2025, 9:15:58 AM
- **View Commit:** [b6b364f](https://gitea.speedy.io/Artificial/llm-support-tickets/commit/b6b364f7a469fa4b0870ee55f51a2455c10023d9)

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
