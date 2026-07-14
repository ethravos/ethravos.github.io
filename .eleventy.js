import markdownIt from "markdown-it";

export default function (eleventyConfig) {
    let options = {
        html: true,
		breaks: true,
		linkify: true,
	};
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("docs");
	eleventyConfig.setLibrary("md", markdownIt(options));
    eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("assets");
	eleventyConfig.addPassthroughCopy("/src/**/*.jpg");
    eleventyConfig.addPassthroughCopy("/src/**/*.png");
    eleventyConfig.addPassthroughCopy("/src/**/*.svg");
};


// export const config = {
//     templateFormats: ['md', 'njk', 'html'],
//     markdownTemplateEngine: 'njk',
//     htmlTemplateEngine: 'njk',
//     dataTemplateEngine: 'njk',
// }

