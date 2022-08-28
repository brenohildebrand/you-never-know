import html from '@rollup/plugin-html';
import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import nodePolyfills from 'rollup-plugin-polyfill-node';

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'compiled/main.js',
      format: 'cjs',
    },
    plugins: [
      // resolve(),
      // commonjs(),
    ],
  },
  {
    input: 'src/preload.js',
    output: {
      file: 'compiled/preload.js',
      format: 'cjs',
    },
    plugins: [
      // resolve(),
      // commonjs(),
    ],
  },
  {
    input: 'src/renderer.js',
    output: {
      file: 'compiled/renderer.js',
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
      html({
        title: 'You Never Know',
        meta: [
          {
            "charset": "UTF-8",
          },
          {
            "http-equiv": "X-UA-Compatible",
            "content": "IE=edge",
          },
          {
            "name": "viewport",
            "content": "width=device-width, initial-scale=1.0",
          }
        ]
      }),
    ]
  }
];