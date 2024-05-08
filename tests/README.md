## Benchmark for jest, vitest, and bun test runners
- global vitest, jest, and bun are needed to be installed
```zsh
hyperfine --warmup 1 --runs 3 'vitest run apple' 'bun test banana' 'jest orange'
```
