module.exports = {
  plugins: ['filenames'],

  rules: {
    "filenames/match-regex": ['warn', "^[a-z\-.]+$"]
  }
};