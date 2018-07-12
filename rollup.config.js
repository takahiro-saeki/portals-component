import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { uglify } from 'rollup-plugin-uglify';

export default {
  input: 'src/index.js',
  output: {
    file: 'lib/index.js',
    format: 'cjs'
  },
  plugins: [
    babel({
      exclude: 'node_modules/**'
    }),
    resolve({
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    commonjs(),
    uglify()
  ],
  external: ['react', 'react-dom', 'prop-types']
};
