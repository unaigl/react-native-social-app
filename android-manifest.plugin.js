const { withAndroidManifest } = require("@expo/config-plugins");
// import { withAndroidManifest } from "@expo/config-plugins";

module.exports = function androiManifestPlugin(config) {
  return withAndroidManifest(config, async (config) => {
    let androidManifest = config.modResults.manifest;

    // add the tools to apply permission remove
    androidManifest.$ = {
      ...androidManifest.$,
      "xmlns:tools": "http://schemas.android.com/tools",
    };

    // add remove property to the audio record permission
    androidManifest["uses-permission"] = androidManifest["uses-permission"].map(
      (perm) => {
        if (perm.$["android:name"] === "android.intent.action.VIEW") {
          perm.$["android:scheme"] === "wc";
          perm.$["tools:node"] = "add";
        }
        return perm;
      }
    );

    return config;
  });
};

// <queries>
//   <intent>
//     <action android:name="android.intent.action.VIEW" />
//     <data android:scheme="wc" />
//   </intent>
// </queries>;
