## 2024-07-31 - Semantic Labels for Form Inputs
**Learning:** The contact form currently relies entirely on `placeholder` attributes, which makes it challenging for screen readers to convey context and context loss when user types data inside the inputs.
**Action:** Wrap form inputs with proper `<form>` tag and use semantic `<label>` elements linked with `htmlFor` attributes to improve accessibility and provide `focus-visible` to give visual outline when tab navigation occurs.
