module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy('src/keybase.txt')
	eleventyConfig.addPassthroughCopy('src/robots.txt')
	eleventyConfig.addPassthroughCopy({ 'src/favicons': '/' })
	eleventyConfig.addPassthroughCopy('src/fonts')
	eleventyConfig.addPassthroughCopy('src/images')

	return {
		dir: {
			input: 'src',
			output: 'dist',
		},
	}
}
