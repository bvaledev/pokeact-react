module.exports = {
    presets: [
        '@babel/preset-env',
        '@babel/preset-typescript',
        ['@babel/preset-react', { // para fazer o autoload do react sem importar ele em arquivos jsx
			runtime: 'automatic'
		}  ]
    ],
    plugins: [
        ["@babel/transform-runtime"]
    ]
}