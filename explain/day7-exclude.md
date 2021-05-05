# Day 7 - Exclude

```ts
type a = "a" | "b" | "c"
type b = "a"

type B = a extends b ? never : a // "a" | "b" | "c" ???????????为什么
```
