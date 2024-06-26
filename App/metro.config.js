/* module.exports = {
    resolver: {
        assetExts: ["bin", "txt", "jpg", "png", "ttf", "json"],
        sourceExts: ['js', 'jsx', 'ts', 'tsx']
    }
}
*/

const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);

const {
  resolver: { sourceExts, assetExts },
} = getDefaultConfig(__dirname);

const config = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: sourceExts.filter(ext => ext !== 'json'),
    assetExts: [...assetExts, 'bin', 'json'],
  },
};

module.exports = mergeConfig(defaultConfig, config);