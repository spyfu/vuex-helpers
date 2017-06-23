import babel from 'rollup-plugin-babel';
import babelrc from 'babelrc-rollup';
import istanbul from 'rollup-plugin-istanbul';
import uglify from 'rollup-plugin-uglify';

let pkg = require('./package.json');
let external = Object.keys(pkg.dependencies);

let plugins = [
    babel(babelrc()),
];

if (process.env.NODE_ENV !== 'production') {
    plugins.push(istanbul({
        exclude: ['test/**/*', 'node_modules/**/*'],
    }));
} else {
    plugins.push(uglify());
}

export default {
    entry: 'lib/index.js',
    plugins: plugins,
    external: external,
    targets: [
        {
            dest: pkg.main,
            format: 'umd',
            moduleName: 'vuexHelpers',
            sourceMap: true,
        },
        {
            dest: pkg.module,
            format: 'es',
            sourceMap: true,
        },
    ],
};
