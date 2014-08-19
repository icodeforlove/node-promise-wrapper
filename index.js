module.exports = {
	wrap: function (func, params) {
		var index = params.indexOf(this.VALUE);

		return function (value) {
			var args = params.slice(0);

			if (index !== -1) {
				args.splice(index, 1, value);
			} else {
				throw new Error('PromiseWrapper: you must provide a VALUE identifier');
			}

			return func.apply(null, args);
		};
	},

	VALUE: function () {}
};