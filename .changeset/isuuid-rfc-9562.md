---
"deverything": patch
---

`isUUID` follows RFC 9562: it accepts versions 6, 7 and 8 and the Nil and Max UUIDs, which it used to reject. It now takes any value and is a type guard (`arg is string`), returning false for non-strings.
