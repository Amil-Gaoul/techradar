module.exports = {
    extends: ['stylelint-config-standard-scss', 'stylelint-config-rational-order', 'stylelint-config-prettier-scss'],
    plugins: ['stylelint-order', 'stylelint-scss'],
    rules: {
        'selector-class-pattern': [
            '^([a-z][a-z0-9]*)(-[a-z0-9]+)*((__([a-z][a-z0-9]*)(-[a-z0-9]+)*)?(_([a-z][a-z0-9]*)(-[a-z0-9]+)*)?)*$',
            {
                message: 'Selector should use lowercase and separate words with hyphens'
            }
        ]
    }
};
