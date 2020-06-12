import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';
import builtins from 'builtin-modules';
import babel from 'rollup-plugin-babel';
import { sizeSnapshot } from 'rollup-plugin-size-snapshot';
import { terser } from 'rollup-plugin-terser';

import {
  browser,
  devDependencies,
  main,
  module,
  peerDependencies,
} from './package.json';

require('dotenv').config();

const globals = {
  firebase: 'firebase',
  'prop-types': 'PropTypes',
  react: 'React',
  'react-dom': 'ReactDom',
};

const external = [
  builtins,
  ...Object.keys(devDependencies),
  ...Object.keys(peerDependencies),
];

const plugins = [
  url(),
  resolve({ extensions: ['.js', '.jsx'] }),
  babel({
    babelrc: true,
    exclude: ['node_modules/**'],
    runtimeHelpers: true,
  }),
  commonjs(),
  sizeSnapshot(),
  terser(),
];

export default {
  external,
  input: 'src/index.js',
  output: [
    {
      file: main,
      format: 'cjs',
      globals,
      name: '@nappr/nappr-firebase-auth',
      sourcemap: true,
    },
    {
      file: browser,
      format: 'umd',
      globals,
      name: 'NapprFirebaseAuth',
      sourcemap: true,
    },
    {
      file: module,
      format: 'esm',
      globals,
      name: '@nappr/nappr-firebase-auth',
      sourcemap: true,
    },
  ],
  plugins,
};
