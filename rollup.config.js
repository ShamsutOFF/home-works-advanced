import { nodeResolve } from '@rollup/plugin-node-resolve';
import css from 'rollup-plugin-css-only';

export default {
    input: 'src/app.js', // ваш главный файл
    output: {
        dir: 'dist',
        format: 'iife',
        name: 'App'
    },
    plugins: [
        nodeResolve(),
        css({ output: 'bundle.css' }),
    ]
};