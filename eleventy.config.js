// IMPORTS
import markdownIt from "markdown-it";
import interlinker from "@photogabble/eleventy-plugin-interlinker";

// MAIN CONFIG

export default function (eleventyConfig) {

    eleventyConfig.addPreprocessor("drafts", "njk,md,liquid", (data, content) => {
		if(data.draft) {
			// Ignore this file.
			return false;
		}
    });

    eleventyConfig.addPlugin(interlinker);

    // MARKDOWN-IT

    let options = {
		html: true,
		breaks: true,
		linkify: true,
	};
    eleventyConfig.setLibrary("md", markdownIt(options));

    // MAIN

    eleventyConfig.addPassthroughCopy("src/css");
    eleventyConfig.addPassthroughCopy("src/assets/");
    eleventyConfig.addPassthroughCopy("src/scripts/");
    
    return {
        dir: {
            input: 'src',
            includes: '_includes',
            output: 'docs',
        },
        templateFormats: ['md', 'njk', 'html'],
        markdownTemplateEngine: 'njk',
        htmlTemplateEngine: 'njk',
        dataTemplateEngine: 'njk',
    };
}