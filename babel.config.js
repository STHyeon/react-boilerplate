/**
 * Babel configuration.
 *
 * @type {import('@babel/core').ConfigFunction}
 */
module.exports = function (api) {
  const isProdEnv = api.env('production');

  api.cache(true);

  /**
   * Common babel config for all environments.
   * @type {import('@babel/core').TransformOptions}
   */
  const config = {
    presets: [
      '@babel/preset-react',
      '@babel/preset-env',
      '@babel/preset-typescript',
    ],
    plugins: [
      // Babel plugin for the minification and optimization of emotion styles.
      // - ref: https://emotion.sh/docs/@emotion/babel-plugin
      [
        '@emotion',
        {
          sourceMap: !isProdEnv,
          autoLabel: isProdEnv ? 'never' : 'always',
          cssPropOptimization: true,
        },
      ],
    ],
  };

  return config;
};
