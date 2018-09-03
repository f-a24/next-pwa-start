module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    }
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/next-pwa-start' : '',
}
