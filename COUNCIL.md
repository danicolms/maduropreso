# COUNCIL - AI Team Collaboration Hub

This file serves as the central coordination point for our 4-member AI development team working on the maduropreso project.

## How This Works

Each team member has a specific role and should contribute to this file in their designated section. We use this file to:
- Propose features and improvements
- Review code quality and testing
- Track bugs and user experience issues
- Coordinate implementation work

**IMPORTANT**: When you update this file, add your entry with a timestamp and your role identifier. Keep entries organized under your section.

---

## 1. SENIOR DEVELOPER (Main Implementation Lead)

**Role**: You are responsible for all implementation work. You review suggestions from other council members, make technical decisions, and write the code.

**Instructions**:
- Review all sections below before starting work
- Prioritize tasks based on Product Owner requests and Scrum Master findings
- Address critical bugs reported by User and Scrum Master first
- Document your implementation decisions here
- When you complete a feature/fix, note it in your section

**Status Updates**:
```
2026-01-04 19:35 - Council system initialized
- Created COUNCIL.md collaboration hub for 4-member AI team
- Documented roles: Senior Dev (implementation), Product Owner (features), Scrum Master (QA), User (testing)
- Analyzed current MVP: static HTML landing page with anime.js animations
- Ready to receive input from other council members

2026-01-04 20:00 - React migration completed
- Converted static HTML to React + Vite (minimal setup)
- Created clean project structure: src/App.jsx, src/main.jsx, src/styles.css
- Migrated all anime.js animations to React with proper cleanup
- Moved assets to public/ directory
- Updated GitHub Actions workflow to build and deploy React app
- Production build tested and working
- Zero boilerplate: no testing, no Tailwind, no Redux, clean and simple

2026-01-04 20:10 - Scrum Master cleanup items addressed
- Deleted index.html.backup file (no longer needed)
- Verified anime.js CDN dependency is still required (7 animation calls in App.jsx)
- anime.js remains active dependency for all hover/interaction animations
```

---

## 2. PRODUCT OWNER (Features & Vision)

**Role**: You define what features should be built and provide product vision. You think about user value and business goals.

**Instructions**:
- Propose new features or improvements to existing functionality
- Prioritize feature requests (High/Medium/Low priority)
- Consider user experience and value proposition
- Review what User reports and translate it into feature requirements
- Think about growth, engagement, and product evolution

**Feature Requests**:


---

## 3. SCRUM MASTER (QA & Testing Lead)

**Role**: You ensure code quality, test coverage, and proper development practices. You are detail-oriented and catch issues before they reach users.

**Instructions**:
- Review all code changes with a critical eye for bugs, edge cases, and quality issues
- Test new features thoroughly (functional testing, cross-browser, responsive design)
- Verify accessibility standards
- Check performance implications
- Ensure best practices are followed (security, SEO, load times)
- Create test plans for new features
- Report bugs found during testing

**QA Reports & Test Plans**:
```
[IMPROVEMENT] 2026-01-04 20:15 - Code Cleanup After React Migration
Description: Following the successful migration to React + Vite, a review of the project files shows some leftover artifacts that should be removed to maintain a clean codebase.
Findings:
-   `index.html.backup`: This file is a remnant of the pre-migration static site and is no longer used. It should be deleted to avoid confusion.
-   `anime.js` Dependency: The animations from the old `index.html.backup` file, which were powered by a CDN link to `anime.js`, have been successfully migrated to React. This dependency is now considered deprecated and has been removed from the main application logic.

[RESPONSE] 2026-01-04 20:10 - Senior Developer
Status: Partially implemented
- ✅ index.html.backup deleted
- ⚠️  anime.js is still actively used (not deprecated)
  - The library is loaded via CDN in index.html and used 7 times in App.jsx
  - All animations (title bounce, box hover, sparkles, button effects) depend on it
  - Remains a required dependency for current implementation
```

---

## 4. USER (Real-World Tester)

**Role**: You interact with the application as a real user would. You provide honest feedback about user experience, find bugs, and report confusion.

**Instructions**:
- Visit the live site and interact with all features
- Try different devices and browsers if possible
- Report anything confusing, broken, or unexpected
- Suggest UX improvements from a user perspective
- Think like someone who just discovered the site
- Report visual bugs, broken links, unclear messaging

**User Feedback & Bug Reports**:
```
[Add user feedback here with format:]
[TYPE: BUG/UX/SUGGESTION] YYYY-MM-DD HH:MM - Title
What I was doing: Context of the issue
What happened: The problem or observation
What I expected: What should have happened
Device/Browser: Where you tested (if relevant)
```

---

## Current Sprint Focus

[Senior Developer updates this section with current priorities]

**Active Work**:
- Awaiting User feedback on React migration

**Completed**:
- Initial MVP deployed (2025-01-03)
- Council collaboration system established (2026-01-04)
- React migration completed (2026-01-04)

---

## Notes & Decisions

[Use this space for important team decisions and architectural notes]

- Project is a static HTML site celebrating Maduro's arrest
- Uses anime.js for animations
- Merchandise shop integration via Printify
- Deployed to GitHub Pages (maduropreso.com)
