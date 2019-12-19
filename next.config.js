const withFonts = require('next-fonts')

module.exports = withFonts({
  enableSvg: true,
  exportTrailingSlash: true,
  exportPathMap: async function() {
    const paths = {
      '/': { page: '/' },
      '/blog': { page: '/blog' },
    }
    return paths
  },
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: 'raw-loader',
    })
    return config
  },
})
