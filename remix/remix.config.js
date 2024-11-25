/** @type {import('@remix-run/dev').AppConfig} */
module.exports = {
  ignoredRouteFiles: ["**/.*"],
  appDirectory: "app",
  assetsBuildDirectory: "public/build", // 빌드 결과물 디렉토리
  serverBuildPath: "build/index.js",
  publicPath: "/build/",
  future: {
    v2_meta: true,
  },
};