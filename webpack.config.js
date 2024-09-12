const path = require("path");

module.exports = {
    entry: './web/static/js/index.tsx',
    output: {
        path: path.resolve(__dirname, 'dist'),
        clean: true,
        filename: 'bundle.js',
    },
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist'),
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
                    },
                },
            },
            {
                test: /\.css$/i,
                include: path.resolve(__dirname, 'web/static'),
                use: ['style-loader', 'css-loader', 'postcss-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css'],
    },
    mode: 'development',
    watch: true,
};
