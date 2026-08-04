## 2026-08-04 - Proper form semantics and focus states
**Learning:** Inputs lacking `<label>` elements, relying only on placeholders, are inherently inaccessible. Furthermore, explicit focus states (like `focus-visible`) must be provided for keyboard navigability, especially since defaults might be cleared by Tailwind.
**Action:** When creating forms, always wrap inputs in `<form>`, use semantic `<label>` elements with `htmlFor`, and ensure all interactive elements have visible `focus-visible` rings.
