## 2024-10-18 - Form Label Accessibility and Focus Management
**Learning:** Found instances where forms relied entirely on placeholder text for context and lacked focus indicators, making them highly inaccessible for screen reader users and keyboard navigation within the Next.js app components.
**Action:** Always wrap form inputs in standard layout blocks with semantic `<label>` elements linked via `htmlFor` and provide explicit text labels. Implement `focus-visible` utility classes for clear keyboard focus states to improve accessibility.
