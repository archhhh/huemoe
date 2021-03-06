const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: "./frontend/src/index.js",
    output: {
        path: path.join(__dirname, "frontend/static/frontend"),
        filename: "bundle.js"
    },
    devServer: {
      historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test:/(\.css|\.scss|\.sass)$/,
                use: [
                    {
                        loader: "style-loader"
                    }, 
                    {
                        loader: "css-loader"
                    }, 
                    {
                        loader: "sass-loader"
                    }, 
                ]
            },
            {
                test: /\.(jpe?g|png|gif|ico|mp4|vtt|srt)$/i,
                use: [
                  {
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      publicPath: '/static/frontend/'
                    }
                  }
                ]
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000,
                      mimetype: 'application/font-woff'
                    }
                  }
                ]
              },
              {
                test: /\.[ot]tf(\?v=\d+.\d+.\d+)?$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000,
                      mimetype: 'application/octet-stream',
                      publicPath: '/static/frontend/',
                    }
                  }
                ]
              },
              {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: [
                  {
                    loader: 'url-loader',
                    options: {
                      limit: 10000,
                      mimetype: 'image/svg+xml'
                    }
                  }
                ]
              },
        ] 
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: "./frontend/src/index.html"
      })  
    ]
};
