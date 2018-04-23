import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';
import babelrc from 'babelrc-rollup';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/index.js',
  output: {
    file: 'src/bundle.js',
    format: 'umd'
  },
  plugins: [
    resolve(),
    babel({
      exclude: '**/node_modules/**'
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    commonjs(),
    serve('src')
  ]
};