module.exports = function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css");

};

module.exports.config = {

  dir: {
    input: "src",
    output: "docs",
  }

};