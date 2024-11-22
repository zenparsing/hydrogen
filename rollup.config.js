import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'light-element.js',
  output: {
    file: 'dist/light-element.js',
    format: 'es',
  },
  plugins: [nodeResolve()],
};
