import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'lightwave.js',
  output: {
    file: 'dist/lightwave.js',
    format: 'es',
  },
  plugins: [nodeResolve()],
};
