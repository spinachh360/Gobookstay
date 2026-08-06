## 2024-08-07 - Form Input Accessibility Pattern
**Learning:** Found a common anti-pattern in the application where form inputs relied entirely on `placeholder` attributes instead of semantic `<label>` tags, and lacked distinct keyboard focus states, hindering accessibility and usability for screen readers and keyboard users.
**Action:** Always wrap form inputs in standard HTML `<form>` tags, connect inputs with descriptive `<label>` elements via the `htmlFor` attribute, provide `focus-visible` states to support clear keyboard navigation, and mark required fields visually.
