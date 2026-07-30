## 2024-05-18 - Form Input Accessibility
**Learning:** Contact forms in this application were relying entirely on placeholder text without semantic `<label>` elements, causing accessibility issues for screen readers and providing poor UX when fields are populated.
**Action:** Always wrap form inputs in a `<form>` tag, use semantic `<label>` elements connected via `htmlFor` and `id`, and provide visible focus rings for keyboard navigation.
