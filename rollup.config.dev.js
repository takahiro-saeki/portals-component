import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import serve from 'rollup-plugin-serve';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';

export default {
  input: 'src/index.js',
  output: {
    file: 'dist/index.js',
    format: 'cjs'
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'development' )
    }),
    babel({
      exclude: 'node_modules/**'
    }),
    resolve(),
    commonjs({
      namedExports: {
        'node_modules/react/react.js': ['Children', 'Component', 'PropTypes', 'createElement'],
        'node_modules/react-dom/index.js': ['render']
      }
    }),
    serve('dist')
  ]
};