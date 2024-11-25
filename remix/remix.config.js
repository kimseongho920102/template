/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  serverBuildTarget: "browser",
  assetsBuildDirectory: "public/build",
  publicPath: "/template/build/", // 저장소명 반영
};