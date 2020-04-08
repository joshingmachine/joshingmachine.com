module.exports = function (eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/keybase.txt')

    return {
        dir: {
            input: 'src',
            output: 'dist',
        },
    }
}
