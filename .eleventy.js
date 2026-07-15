import markdownIt from "markdown-it";
import interLinker from "@photogabble/eleventy-plugin-interlinker";
import eleventyBacklinks from 'eleventy-plugin-backlinks';

export default function (eleventyConfig) {
    let options = {
        html: true,
		breaks: true,
		linkify: true,
	};
    eleventyConfig.addPlugin(eleventyBacklinks, {
		folder: '/notes', // The folder with your notes
		getData(note) {
			return {
				url: note.url,
				title: note.data.title,
			};
		},
	});
    eleventyConfig.setInputDirectory("src");
    eleventyConfig.setOutputDirectory("docs");
	eleventyConfig.setLibrary("md", markdownIt(options));
    eleventyConfig.addPassthroughCopy("css");
	eleventyConfig.addPassthroughCopy("assets");
	// eleventyConfig.addPassthroughCopy("/src/**/*.jpg");
    // eleventyConfig.addPassthroughCopy("/src/**/*.png");
    // eleventyConfig.addPassthroughCopy("/src/**/*.svg");
    // eleventyConfig.addPlugin(pluginBacklinks);
    eleventyConfig.addPlugin(interLinker),
        {
        defaultLayout: 'layouts/embed.liquid'
        };
    return {
        markdownTemplateEngine: "njk",
        input: "src",
        output: "docs"
    }
};

// export function(eleventyConfig) {
//     eleventyConfig.addPlugin(pluginBacklinks);
//     // You can only have one module.exports in a configuration file,
//     // so make sure you add the above line to your existing one.
// }


// module.exports = (eleventyConfig) => {
//   eleventyConfig.addPlugin(
//     require('@photogabble/eleventy-plugin-interlinker'),
//     {
//       defaultLayout: 'layouts/embed.liquid'
//     }
//   );
// };

