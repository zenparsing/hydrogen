import nodeResolve from 'rollup-plugin-node-resolve';

export default {
  input: 'hydrogen.js',
  output: {
    file: 'dist/hydrogen.js',
    format: 'es',
  },
  plugins: [nodeResolve()],
};
