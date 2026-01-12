import { nodeResolve } from '@rollup/plugin-node-resolve';
import terser from 'rollup-plugin-terser';

export default {
    input: 'index.js', // ваш главный файл
    output: {
        file: 'dist/bundle.min.js',
        format: 'iife',
        name: 'App'
    },
    plugins: [
        nodeResolve(),
        terser.terser()
    ]
};