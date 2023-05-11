const yaml = require('js-yaml');
const eleventyNavigationPlugin = require('@11ty/eleventy-navigation');
module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy("./src/css/");
    eleventyConfig.addWatchTarget("./src/css/");
    eleventyConfig.addPassthroughCopy("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/js/");
    
    eleventyConfig.addLayoutAlias('base', 'base.njk');

    // Return your Object options:
    return {
      markdownTemplateEngine: 'njk',
      dir: {
        input: "src",
        output: "public"
      }
    }
};
