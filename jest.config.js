// jest.config.js
// Sync object
module.exports = {
  verbose: true,
  rootDir: ".",
  "collectCoverageFrom": ["./**/*.js"],
  "collectCoverage": true,
};

// Or async function
module.exports = async () => {
  return {
    verbose: true,
    rootDir: ".",
    "collectCoverageFrom": ["./**/*.js"],
    "collectCoverage": true,
    };
};