# MM Fintech AI Changelog

Latest changes and updates to internal products.

*Last updated: Nov 13, 2025, 12:29:57 PM*

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




---

*This changelog is automatically generated from Gitea repositories.*

