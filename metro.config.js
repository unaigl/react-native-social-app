module.exports = {
  transformer: {
    assetPlugins: ["expo-asset/tools/hashAssetFiles"],
  },
  resolver: {
    extraNodeModules: require("expo-crypto-polyfills"),
  },
};
