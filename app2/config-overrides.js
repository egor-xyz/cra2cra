const { overrideDevServer, disableChunk, override } = require("customize-cra");

const devServerConfig = () => (config) => {
  return {
    ...config,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  };
};

module.exports = {
  webpack: override(
    disableChunk(),
  ),
  devServer: overrideDevServer(devServerConfig())
};