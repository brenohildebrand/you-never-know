import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';
import html from '@rollup/plugin-html';

export default [
  {
    input: 'src/main.js',
    output: {
      file: 'dist/main.js',
      format: 'cjs',
    },
    plugins: [
      resolve(),
    ],
  },
  {
    input: 'src/preload.js',
    output: {
      file: 'dist/preload.js',
      format: 'cjs',
    },
    plugins: [
      resolve(),
    ],
  },
  {
    input: 'src/renderer.js',
    output: {
      file: 'dist/renderer.js',
      format: 'iife',
    },
    plugins: [
      svelte({}),
      resolve({ browser: true }),
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