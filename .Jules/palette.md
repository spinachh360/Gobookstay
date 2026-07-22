## 2024-05-24 - Missing labels on form inputs
**Learning:** Found a pattern across the application (`app/contact/page.tsx`, `app/visa/page.tsx`) where form inputs and textareas rely entirely on `placeholder` attributes for context, lacking semantic `<label>` elements or `aria-label` attributes. This creates significant accessibility barriers for screen reader users who cannot perceive placeholders reliably.
**Action:** Always ensure inputs have an associated `aria-label` when a visible `<label>` is not present to maintain design constraints while ensuring full accessibility.
