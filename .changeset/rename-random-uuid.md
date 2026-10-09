---
"deverything": minor
---

Rename `randomUUID` to `incrementalUUID`. It is a counter-based test fixture, not a random id, and the old name led to it being used for production ids. `randomUUID` stays as a deprecated alias.
