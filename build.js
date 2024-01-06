const esbuild = require('esbuild');
const MyReact = require('./MyReact');

esbuild.build({
    entryPoints: ['App.jsx'],
    bundle: true,
    outfile: 'out.js',
    loader: { '.jsx': 'jsx' },
    jsxFactory: 'MyReact.createElement',
}).catch(() => process.exit(1));