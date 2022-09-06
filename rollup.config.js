import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default [
  {
    input: 'src/raw/main.js',
    output: {
      file: 'src/compiled/main.js',
      format: 'cjs',
    },
    plugins: [
      // resolve(),
      // commonjs(),
    ],
  },
  {
    input: 'src/raw/preload.js',
    output: {
      file: 'src/compiled/preload.js',
      format: 'cjs',
    },
    plugins: [
      // resolve(),
      // commonjs(),
    ],
  },
  {
    input: 'src/raw/renderer.js',
    output: {
      file: 'src/compiled/renderer.js',
      format: 'iife',
    },
    plugins: [
      nodePolyfills(),
      resolve({
        browser: true,
        preferBuiltins: true,
      }),
      commonjs(),
      svelte({
        emitCss: false,
      }),
      // nodePolyfills(),
      // resolve({ 
      //   browser: true, 
      //   preferBuiltins: true,
      // }),
      // commonjs(),
    ]
  }
];