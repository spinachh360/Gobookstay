## 2026-07-28 - Fixed Form Placeholder Accessibility Anti-Pattern
**Learning:** The application has an established accessibility anti-pattern where form inputs rely on placeholder attributes instead of proper semantic <label> or aria-label elements.
**Action:** Add explicit <label> tags with htmlFor attributes matching input ids and add keyboard focus indicators for all form fields.
