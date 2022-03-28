module.exports = {
  webpack: function (config, env) {
    if (env.MODE_TYPE === "dev") {
      config.mode = "development";
    } else if (env.MODE_TYPE === "prod") {
      config.mode = "production";
    }
    return config;
  },
  jest: function (config) {
    return config;
  },
  devServer: function (configFunction) {
    return function (proxy, allowedHost) {
      return configFunction(proxy, allowedHost);
    };
  },
  paths: function (paths, env) {
    return paths;
  },
};
