const optionsSQLite3 = {
	client: 'sqlite3',
	connection: {
		filename: './db/products.sqlite'
	},
	useNullAsDefault: true
}

const optionsMariaDB = {
	client: 'mysql',
	connection: {
		host: "localhost",
		port: "3306",
		user: 'root',
		password: '',
		database: 'ecommerce'
	}
}

module.exports = { optionsSQLite3, optionsMariaDB };