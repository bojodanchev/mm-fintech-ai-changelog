# MM Fintech AI Changelog

Latest changes and updates to internal products.

*Last updated: Nov 13, 2025, 10:57:41 AM*

---

## November 13, 2025

### 🐛 Fix

Fix Mark as Implemented permission issue Changed implement endpoint from get_implementator_user to get_requester_user to allow all non-viewer roles (admin, approver, implementator, requester) to mark 

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 13, 2025, 10:40:59 AM
- **View Commit:** [7ef18f6](https://gitea.speedy.io/Artificial/llm-change-management/commit/7ef18f62fbaf6c8c4c329d1acf6e2cb86e095a43)

### ✨ Feature

Make change requests fully immutable for audit trail compliance Complete immutability implementation: - Removed edit functionality from change request UI (both desktop and mobile) - Removed PUT endpoi

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 13, 2025, 10:33:18 AM
- **View Commit:** [6b16a56](https://gitea.speedy.io/Artificial/llm-change-management/commit/6b16a5608b8010092e30a4f47d854dab33d9aac6)

### ✨ Feature

Fixed login dark screen background - Made body background transparent on login page - Added login-page class to body when on login route - Ensures background image displays properly on first visit and

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 13, 2025, 9:23:11 AM
- **View Commit:** [9c83c37](https://gitea.speedy.io/Artificial/llm-change-management/commit/9c83c3742e0c1305ea62f3fa9a4206068ddc1ac4)

---

## November 11, 2025

### 🔧 Chore

Allow implement from in progress

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 11, 2025, 9:29:45 AM
- **View Commit:** [2434ddf](https://gitea.speedy.io/Artificial/llm-change-management/commit/2434ddf66ed266b261bd649a1329848505754aa1)

### 🔧 Chore

Show mark implemented in progress

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 11, 2025, 9:09:04 AM
- **View Commit:** [cd72728](https://gitea.speedy.io/Artificial/llm-change-management/commit/cd72728743834c553aefbf5a68ce51edfa07cf2b)

---

## November 10, 2025

### 🔧 Chore

Tighten status legend spacing

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 5:30:41 PM
- **View Commit:** [b067d83](https://gitea.speedy.io/Artificial/llm-change-management/commit/b067d83e2b1b7046ee854e1f1e1d80f0222b0798)

### 🔧 Chore

Improve top categories bar labels

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 5:12:00 PM
- **View Commit:** [52a0a12](https://gitea.speedy.io/Artificial/llm-change-management/commit/52a0a127c5c0ef8a17ea8bb585f98c1a7e4afdbc)

### 🔧 Chore

Polish access modal dark theme

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 4:05:03 PM
- **View Commit:** [211174c](https://gitea.speedy.io/Artificial/llm-change-management/commit/211174ca5bfbac9b1166254dae835ae33b09d545)

### 🔧 Chore

Polish task list dark mode

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 3:51:41 PM
- **View Commit:** [c47d183](https://gitea.speedy.io/Artificial/llm-change-management/commit/c47d183dd18f6e2b57f4fb70e12a39e6caf6eee7)

### 🔧 Chore

Dark mode status modal

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 3:46:36 PM
- **View Commit:** [2065702](https://gitea.speedy.io/Artificial/llm-change-management/commit/2065702d2070bf3d47c80ed74c20fbdc09cc35a2)

### 🔧 Chore

Polish edit modal dark mode

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 3:40:59 PM
- **View Commit:** [b347533](https://gitea.speedy.io/Artificial/llm-change-management/commit/b347533376b608c3efa50bc018514395d3d4d106)

### 🔧 Chore

Normalize timezone handling utilities

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 3:27:10 PM
- **View Commit:** [6ea9f31](https://gitea.speedy.io/Artificial/llm-change-management/commit/6ea9f31e83c173be191e8259c49eab7ecefa9f4e)

### ✨ Feature

Implement UTC timezone handling for consistent timestamp storage and display This commit fixes timezone handling across the application by centralizing UTC awareness at the point of timestamp generati

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 2:43:07 PM
- **View Commit:** [e3f5765](https://gitea.speedy.io/Artificial/llm-change-management/commit/e3f5765d8f5d44fdd6bcfe6a948cd01b22962695)

### 🔧 Chore

Apply comprehensive dark mode to Analytics page and chart components Implemented full dark mode for Analytics dashboard based on DevOps team feedback: - All KPI cards with dark backgrounds, borders, a

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 1:14:31 PM
- **View Commit:** [f495c1f](https://gitea.speedy.io/Artificial/llm-change-management/commit/f495c1fb6f9a2abe5a4b738c109534b14fd8d7f0)

### ✨ Feature

Apply comprehensive dark mode to New Change form and Comments section Fixed both issues reported by the team: 1. Applied full dark mode styling to ChangeRequestForm.js (New Change page) - All text inp

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 1:04:55 PM
- **View Commit:** [c8dc8f3](https://gitea.speedy.io/Artificial/llm-change-management/commit/c8dc8f3950d13e93eaf003727e41fff1037fd472)

### ✨ Feature

Complete dark mode implementation for all remaining pages and components Finalize comprehensive dark mode coverage across the entire application: **Critical User-Reported Fixes:** - MyRequestsPage.js:

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 10:47:39 AM
- **View Commit:** [3b02aea](https://gitea.speedy.io/Artificial/llm-change-management/commit/3b02aeae19ddae8aad252c428c866595f74dd8c9)

### ✨ Feature

Add dark mode to critical user-facing components Implement comprehensive dark mode styling for key application pages and components: **Critical Pages:** - ChangeRequestList.js: Complete dark mode for 

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 10:21:05 AM
- **View Commit:** [12ccdf4](https://gitea.speedy.io/Artificial/llm-change-management/commit/12ccdf4637d5b7422995c552134ed2e6cc82ac9b)

### ✨ Feature

Implement comprehensive dark mode for core UI components Add dark mode styling to layout, navigation, dashboard, and badge system: **Core Infrastructure:** - Layout.js: Add dark background (bg-gray-90

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 10, 2025, 10:10:42 AM
- **View Commit:** [e804bb0](https://gitea.speedy.io/Artificial/llm-change-management/commit/e804bb0fa3bc95fb772ae56c78c9c3477fb64000)

---

## November 7, 2025

### ✨ Feature

Add manual dark mode toggle with cookie persistence Implement user-controlled dark mode instead of automatic system detection: - Change Tailwind config from 'media' to 'class' mode for manual control 

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 5:32:12 PM
- **View Commit:** [71b0460](https://gitea.speedy.io/Artificial/llm-change-management/commit/71b0460eddbf6cdb5346d34d00ad14b8278dad7d)

### ✨ Feature

Fix dark mode text visibility across forms and modals Add missing dark mode styling to ensure text is visible in both light and dark modes: - ChangeRequestForm.js: Fixed input fields, textareas, dropd

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 4:57:43 PM
- **View Commit:** [62071e5](https://gitea.speedy.io/Artificial/llm-change-management/commit/62071e500ba18f7972f11f2dc2985bd7db93c4bf)

### 🐛 Fix

Fix image preview loading for ticket attachments Images now load correctly through authenticated API calls using blob URLs instead of direct img src, resolving authentication issues with JWT-protected

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 4:06:08 PM
- **View Commit:** [1f3573e](https://gitea.speedy.io/Artificial/llm-change-management/commit/1f3573ea37666ff22902e689c88a7e2ed88fbdcc)

### ✨ Feature

Add OpenRouter API integration as alternative LLM provider Implement OpenRouter as a simple, cloud-based alternative to locally hosted vLLM. Users can now choose between providers via environment vari

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 2:00:28 PM
- **View Commit:** [b5e3456](https://gitea.speedy.io/Artificial/llm-change-management/commit/b5e3456ec175bc82ca1376fa34bb19f505910da7)

### ✨ Feature

Update .gitignore to exclude local development files Added entries to ignore local development files that should not be committed: - .claude/ (Claude Code configuration) - Docker files (Dockerfile, do

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 1:46:20 PM
- **View Commit:** [ae0af38](https://gitea.speedy.io/Artificial/llm-change-management/commit/ae0af38ad91f068571f275f574117be177aed6f9)

### 📚 Documentation

Clean up: Remove obsolete documentation files from repository root Removed 9 documentation files that were cluttering the repository root: - AUTO_REFRESH_IMPLEMENTATION.md - DARK_MODE_IMPLEMENTATION.m

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 7, 2025, 1:45:44 PM
- **View Commit:** [cc3ad1d](https://gitea.speedy.io/Artificial/llm-change-management/commit/cc3ad1da42b96dc788a80b8b68e471db4025a8d0)

---

## November 6, 2025

### 🐛 Fix

Remove orphaned comment update/delete callback props

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 5:12:18 PM
- **View Commit:** [9bdfe7d](https://gitea.speedy.io/Artificial/llm-change-management/commit/9bdfe7d3f740cf088c5e3042e9c57a9250af1f6c)

### ✨ Feature

Implement immutable audit trail for comments and tasks PROBLEM ADDRESSED: - Security audit requirements mandate full traceability of all information - Previous implementation allowed editing and delet

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 5:08:01 PM
- **View Commit:** [ce747bf](https://gitea.speedy.io/Artificial/llm-change-management/commit/ce747bf5573ee73d3128a5473d112a27f0513da8)

### ✨ Feature

Add manual LDAP Re-Sync feature for user management FEATURE: Manual LDAP Re-Sync button in Users section to restore user access after corporate password rotation or LDAP directory changes. PROBLEM ADD

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 4:45:04 PM
- **View Commit:** [cd6b158](https://gitea.speedy.io/Artificial/llm-change-management/commit/cd6b158132933f4ae6f54c69bfb7ec1736d80dc7)

### ✨ Feature

Fix critical session duration bug and add proactive token refresh CRITICAL BUG FIXED: - Access tokens were hardcoded to 60 minutes instead of configured 9 hours - Users were being logged out after 1 h

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 4:29:15 PM
- **View Commit:** [7d58dc6](https://gitea.speedy.io/Artificial/llm-change-management/commit/7d58dc670e712598071a16c9f22c478db2f4f4d3)

### ✨ Feature

Extend session duration and improve token refresh handling Problem: - Users experiencing unexpected logouts - Session duration was hardcoded to 12 hours - Token durations not configurable via .env - A

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 4:23:45 PM
- **View Commit:** [7eba4e7](https://gitea.speedy.io/Artificial/llm-change-management/commit/7eba4e774837c5d20037ee82b0a4a5a60951e954)

### ✨ Feature

Fix critical React dependency issues in auto-refresh feature ## Summary Applied QA fixes to resolve critical React hooks dependency issues that could cause stale closures and unexpected behavior. All 

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 2:03:21 PM
- **View Commit:** [9465956](https://gitea.speedy.io/Artificial/llm-change-management/commit/94659562842c7c87542cdb5f10dde978d9321dd7)

### ✨ Feature

Implement auto-refresh for change request detail page ## Summary Added automatic data refresh mechanism that updates change request details, comments, history, and attachments every 5 minutes without 

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 1:57:34 PM
- **View Commit:** [ae77d66](https://gitea.speedy.io/Artificial/llm-change-management/commit/ae77d66f8e58147b37000e0b5a20af31d3003860)

### ✨ Feature

Fix critical bugs and QA issues from three feature implementation Applied QA fixes addressing critical and high-priority issues: CRITICAL FIXES: 1. Fixed timezone offset calculation (timezoneUtils.js)

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 1:44:39 PM
- **View Commit:** [6c0189e](https://gitea.speedy.io/Artificial/llm-change-management/commit/6c0189ec463da6abc4648f28e491662b096bcca2)

### ✨ Feature

Add screenshot attachment inline preview with lightbox modal Implemented inline image preview functionality for screenshot attachments: - Created ImagePreviewModal component (139 lines) - Lightbox ove

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 1:39:48 PM
- **View Commit:** [0b32b96](https://gitea.speedy.io/Artificial/llm-change-management/commit/0b32b9653351d27d7f432f10c7ab085f9bab0bc2)

### ✨ Feature

Implement automatic dark mode with system-level theme detection ## Summary Implemented automatic dark mode that dynamically detects and responds to the user's system-level theme preferences (Windows, 

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 1:27:08 PM
- **View Commit:** [d5768de](https://gitea.speedy.io/Artificial/llm-change-management/commit/d5768de1a7f4e5e86151ef75498ce1faf1844c1f)

### 💥 Breaking Change

Implement local timezone synchronization for accurate DevOps KPI tracking ## Summary Implemented comprehensive browser-based timezone synchronization to automatically detect and display submission tim

- **Repository:** LLM Change Management
- **Author:** bozhidar.danchev
- **Date:** Nov 6, 2025, 1:18:04 PM
- **View Commit:** [7015ad7](https://gitea.speedy.io/Artificial/llm-change-management/commit/7015ad71039346977678f2364ac6e86283145d76)

---

## October 29, 2025

### 🔧 Chore

Send telegram when Draft becomes Pending

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Oct 29, 2025, 3:51:48 PM
- **View Commit:** [974bbe2](https://gitea.speedy.io/Artificial/llm-change-management/commit/974bbe2116bedec5dfe54ad07ffbe7c7268a5fa9)

### ✨ Feature

Add new categories to templates as well

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Oct 29, 2025, 3:30:39 PM
- **View Commit:** [a259eed](https://gitea.speedy.io/Artificial/llm-change-management/commit/a259eeda4b220664352fa9bba1b7b2ed58f201e2)

### ✨ Feature

New acccess categories - Human resource and Database

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Oct 29, 2025, 2:30:42 PM
- **View Commit:** [0249381](https://gitea.speedy.io/Artificial/llm-change-management/commit/0249381074648b96323791d471c4ae6d9d2c1868)

### 🔧 Chore

Templates access check

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Oct 29, 2025, 10:45:06 AM
- **View Commit:** [c9a9ac6](https://gitea.speedy.io/Artificial/llm-change-management/commit/c9a9ac61c21b1de2c28cabb2fdab000ac26702c2)

### 🔧 Chore

Endpoint fixes

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Oct 29, 2025, 9:56:57 AM
- **View Commit:** [fa2b34d](https://gitea.speedy.io/Artificial/llm-change-management/commit/fa2b34d379029a22b8022742c91129ed64ae2e1d)

### 🔧 Chore

Routes fixed

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Oct 29, 2025, 9:43:23 AM
- **View Commit:** [26ac370](https://gitea.speedy.io/Artificial/llm-change-management/commit/26ac370ddb88e4ad784c1192f0f838c9680185e4)

### 🔧 Chore

Templates creation fix

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Oct 29, 2025, 8:55:03 AM
- **View Commit:** [9d7b0b0](https://gitea.speedy.io/Artificial/llm-change-management/commit/9d7b0b06be966884e2004b6168ca8f01467696d4)

---

## October 15, 2025

### 🔧 Chore

Analitics fix

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Oct 15, 2025, 3:08:09 PM
- **View Commit:** [ab788aa](https://gitea.speedy.io/Artificial/llm-change-management/commit/ab788aa7e11cc048ee8f90abe57a01ab05f9dde2)

### 🔧 Chore

Analytics fix

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Oct 15, 2025, 2:50:28 PM
- **View Commit:** [d141333](https://gitea.speedy.io/Artificial/llm-change-management/commit/d14133391cbc378f9adcb5c8b3f822b919941779)

---

## October 5, 2025

### 🔧 Chore

LDAP support + login tuned up

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Oct 5, 2025, 8:39:39 AM
- **View Commit:** [40de3fa](https://gitea.speedy.io/Artificial/llm-change-management/commit/40de3faa30610117715e1220752cb10bbe1c2133)

---

## September 30, 2025

### 🔧 Chore

File attachment for change request

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Sep 30, 2025, 5:43:49 PM
- **View Commit:** [cf602ce](https://gitea.speedy.io/Artificial/llm-change-management/commit/cf602ce9bbd7be9bbf8310ac279889cf274ae8ca)

---

## September 25, 2025

### ✨ Feature

Optional title added and UI improvements

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Sep 25, 2025, 6:36:56 PM
- **View Commit:** [d5e8d74](https://gitea.speedy.io/Artificial/llm-change-management/commit/d5e8d74134aa0c6d702028f25ef94eb806a9f198)

---

## September 17, 2025

### 🔧 Chore

AI Offline mode enhanced

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Sep 17, 2025, 6:12:29 PM
- **View Commit:** [b08dd91](https://gitea.speedy.io/Artificial/llm-change-management/commit/b08dd91b894799acc08f5efc5b0d84421d84962b)

---

## September 11, 2025

### 🔧 Chore

Untitled tickets creation fix

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Sep 11, 2025, 11:14:04 AM
- **View Commit:** [71b1c2c](https://gitea.speedy.io/Artificial/llm-change-management/commit/71b1c2c7aeab8b4d6a2c1758bc70a7f849cfbb60)

---

## September 7, 2025

### 🔧 Chore

AI vacation mode + smart AI health check

- **Repository:** LLM Change Management
- **Author:** svilen
- **Date:** Sep 7, 2025, 11:50:44 AM
- **View Commit:** [ff5ac4c](https://gitea.speedy.io/Artificial/llm-change-management/commit/ff5ac4c5af5380cd3d9ee5cc39a352e237d39985)

---


---

*This changelog is automatically generated from Gitea repositories.*
