const path = require("path");

module.exports = {
    // These are the entry point of our library. We tell webpack to use the name we assign later, when creating the bundle.
    // We also use the name to filter the second entry point for applying code minification via UglifyJS
    entry: {
        'manifesto': ['./src/index.ts'],
        'manifesto.min': ['./src/index.ts']
    },
    // The output defines how and where we want the bundles. The special value `[name]` in `filename` tell Webpack to use the name we defined above.
    // We target a UMD and name it MyLib. When including the bundle in the browser it will be accessible at `window.MyLib`
    output: {
        path: path.resolve(__dirname, 'dist-umd'),
        filename: '[name].js',
        libraryTarget: 'umd',
        library: 'manifesto',
        umdNamedDefine: true
    },
    // Add resolve for `tsx` and `ts` files, otherwise Webpack would
    // only look for common JavaScript file extension (.js)
    resolve: {
        extensions: ['.ts', '.tsx', '.js']
    },
    // Activate source maps for the bundles in order to preserve the original
    // source when the user debugs the application
    devtool: 'source-map',
    optimization: {
        minimize: true
        //   sourceMap: true,
        //   include: /\.min\.js$/
    },
    // Webpack doesn't understand TypeScript files and a loader is needed.
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    { loader: 'awesome-typescript-loader' }
                ]
            }
        ]
    }
}