const markdownIt = require("markdown-it");
// const interlinker = require("@photogabble/eleventy-plugin-interlinker");
const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

// IMAGES

module.exports = function (eleventyConfig) {
	eleventyConfig.addPlugin(eleventyImageTransformPlugin);
};

// MARKDOWN-IT

module.exports = function (eleventyConfig) {
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};

	eleventyConfig.setLibrary("md", markdownIt(options));
};

// WIKI LINKS

// module.exports = function (eleventyConfig) {
// 	eleventyConfig.addPlugin(interlinker, {
// 		defaultLayout: '_includes/base.html'
// 	});
// };

// module.exports = function (eleventyConfig) {
// 	eleventyConfig.amendLibrary("md", (mdLib) => mdLib.use(replace-link));
// };

// CSS

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("./src/css");

};

// INPUT/OUTPUT

module.exports.config = {

  dir: {
    input: "src",
    output: "docs",
  }

};
