module.exports = {
    trailingComma: 'none',
    tabWidth: 4,
    semi: true,
    singleQuote: true,
    bracketSpacing: true,
    printWidth: 160,
    endOfLine: 'crlf',
    overrides: [
        {
            files: '*.html',
            options: {
                printWidth: 100
            }
        }
    ]
};
