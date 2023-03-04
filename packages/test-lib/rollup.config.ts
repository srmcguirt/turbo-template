import { readFileSync } from 'node:fs'
import dts from 'rollup-plugin-dts'
import esbuild from 'rollup-plugin-esbuild'
import type { RollupOptions } from 'rollup'

const pkg = JSON.parse(
  readFileSync(new URL('./package.json', import.meta.url)).toString(),
)

const banner = `/**
  * @module ${pkg.name}
  * @version ${pkg.version}
  * file ${pkg.description}
  * @license ${pkg.license}
*/`

const bundle = (config: RollupOptions) => ({
  ...config,
  input: 'src/index.ts',
  external: Object.keys(pkg.dependencies || {}),
})

export default [
  bundle({
    plugins: [esbuild()],
    output: [
      {
        file: pkg.exports.require,
        format: 'cjs',
        banner,
        sourcemap: true,
      },
      {
        file: pkg.exports.import,
        format: 'es',
        sourcemap: true,
      },
    ],
  }),
  bundle({
    plugins: [dts()],
    output: {
      file: pkg.exports.types,
      format: 'es',
    },
  }),
]
