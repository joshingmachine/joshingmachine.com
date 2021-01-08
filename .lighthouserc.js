module.exports = {
	ci: {
		assert: {
			assertions: {

			},
			preset: 'lighthouse:no-pwa',
		},
		collect: {
			numberOfRuns: 5,
			staticDistDir: './dist',
		},
		upload: {
			outputDir: './dist/lighthouse-reports',
			target: 'filesystem',
		},
	},
}
