if (process.env) {
	console.log(process.env);
	module.exports = require('./configureStore.dev');
} else {
	module.exports = require('./configureStore.dev'); // !!!
}
