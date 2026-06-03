---
trigger: always_on
---

DO NOT attempt to automatically open, launch, preview, or start any browser window when tasks are completed.

Required Behavior
Complete all requested code changes, file modifications, installations, and configurations normally.
Do not execute commands that open a browser, such as:
start http://localhost:3000
open http://localhost:3000
xdg-open
Browser launch scripts
Any automatic preview functionality
Do not try to verify the UI by launching Chrome, Edge, Firefox, or any other browser.
Do not repeatedly retry browser launch attempts if they fail.
Do not stop or interrupt development work because a browser could not be opened.
After Completing Work

Instead of opening a browser:

Confirm that all requested changes have been completed.
Report any build, lint, or runtime results.
Provide the local URL if applicable (e.g., http://localhost:3000).
Clearly state:

"Work completed successfully. Browser launch was intentionally skipped according to workspace rules. Please open the application manually for verification."

Priority

This rule has higher priority than any automatic preview, browser-opening, or UI-launch behavior. Browser launch failures must never block task completion.

MANDATORY: Assume the user will manually open and verify the application. Never attempt to open a browser under any circumstance unless the user explicitly requests it.