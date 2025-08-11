const path = require('path');

module.exports = {
  entry: {
    main: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/fitvids/dist/fitvids.min.js',
      './assets/js/plugins/jquery.greedy-navigation.js',
      './node_modules/magnific-popup/dist/jquery.magnific-popup.min.js',
      './node_modules/jquery-smooth-scroll/jquery.smooth-scroll.min.js',
      './node_modules/stickyfilljs/dist/stickyfill.min.js',
      './assets/js/_main.js'
    ]
  },
  output: {
    filename: 'main.min.js',
    path: path.resolve(__dirname, 'assets/js')
  },
  mode: 'production'
};
