## Benchmark for jest, vitest, and bun test runners

```zsh
hyperfine --warmup 1 --runs 3 'vitest run apple' 'bun test banana' 'jest orange'
```
