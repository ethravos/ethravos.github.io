const markdownIt = require("markdown-it");

// MARKDOWN-IT

module.exports = function (eleventyConfig) {
	let options = {
		html: true,
		breaks: true,
		linkify: true,
	};
	let markdownLib = markdownIt(options).use(markdownItAttrs);
	eleventyConfig.setLibrary("md", markdownIt(options));
	eleventyConfig.setLibrary("md", markdownLib);
};

// CSS

module.exports = function (eleventyConfig) {

  eleventyConfig.addPassthroughCopy("css");

};

// INPUT/OUTPUT

module.exports.config = {

  dir: {
    input: "src",
    output: "docs",
  }

};
