module.exports = {
  webpack: function (config, env) {
    if (process.env.MODE_TYPE === "development") {
      config.mode = "development";
    } else if (process.env.MODE_TYPE === "production") {
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
