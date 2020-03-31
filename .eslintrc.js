module.exports = {
    root: true,
    env: {
        node: true
    },
    'extends': [
        'plugin:vue/recommended', //都要配置这个，插件是eslint-plugin-vue，这个是控制template模板缩进的
        '@vue/standard'
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        "vue/html-indent": ["error", 4], //模板缩进多少个空格，默认是2个
        //"vue/script-indent": ["error", 4], //script模板缩进
        'indent': ['error', 4, {
            'SwitchCase': 1
        }], //设置所有空格都是4个
        // 不限制标签自动闭合any 是自定义
        "vue/html-self-closing": ["error", {
            "html": {
                "void": "any",
                "normal": "any",
                "component": "any"
            },
            "svg": "always",
            "math": "always"
        }],
        // 是否可以使用v-html
        'vue/no-v-html': 0,
        // props是否必须定义类型
        'vue/require-prop-types': 0
    },
    parserOptions: {
        parser: 'babel-eslint'
    },
    overrides: [{
        files: [
            '**/__tests__/*.{j,t}s?(x)',
            '**/tests/unit/**/*.spec.{j,t}s?(x)'
        ],
        env: {
            jest: true
        }
    }]
}
