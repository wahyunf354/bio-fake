module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true,
        "node": true
    },
    "extends": "eslint:recommended",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaVersion": 11
    },
    "rules": {
        "semi": ["error", "always"],
        "quotes": ["error", "single"],
        "indent": ["error", 2],
        "linebreak-style": ["error", "unix"],
    }
};
