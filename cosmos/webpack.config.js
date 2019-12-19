module.exports = (config, env) => {
  config.module.rules = [
    ...config.module.rules,
    {
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('babel-loader'),
        },
      ],
    },
    {
      test: /\.(woff|woff2|eot|ttf|svg)$/,
      loader: 'url-loader?name=fonts/[hash:24].[ext]',
      exclude: /node_modules/,
    },
  ]

  config.resolve.extensions.push('.ts', '.tsx')

  return config
}
