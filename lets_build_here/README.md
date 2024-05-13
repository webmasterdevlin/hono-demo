### Benchmaring the bundlers
```zsh
hyperfine --prepare 'rm -rf out && rm -rf .parcel-cache' --warmup 1 --runs 5 'parcel build main.js --dist-dir out' 'rollup main.js --file=out/main.js --plugins=terser --sourcemap --minifyInternalExports' 'esbuild main.js --bundle --outfile=out/main.js --sourcemap --minify' 'bun build main.js --outdir ./out --minify --sourcemap=external' 'rsbuild build --config=rsbuild.config.ts' 'webpack-cli build --config=webpack.config.js'
```