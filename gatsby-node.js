exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
    if (stage === "build-html" || stage === "develop-html") {
        actions.setWebpackConfig({
            module: {
                rules: [
                    {
                        test: /react-modal-video/,
                        use: loaders.null(),
                    },
                ],
            },
        })
    }
}