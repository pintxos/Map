(function (window) {

	'use strict';

	// UMD
	if(typeof define !== 'function') {
		window.define = function(deps, definition) {
			window.pintxos = window.pintxos || {};
			window.pintxos.Map = definition();
			define = null;
		};
	}

	define([], function () {


		var Map;


		/* Constructor
		----------------------------------------------- */
		Map = function () {
			this._data = [];
			this._length = 0;
		};


		/* Methods
		----------------------------------------------- */

		Map.prototype.get = function (key) {

			var index;

			index = this._indexOf(key);

			return (index > -1) ? clone(this._data[index]) : undefined;

		};

		Map.prototype.set = function (key, value) {

			var entry, index;

			entry = {
				key: key,
				value: value
			};

			index = this._indexOf(key);

			if(index > -1) {
				this._data[index] = entry;
			}else {
				this._data.push(entry);
				this._length = this._data.length;
			}
		};

		Map.prototype._indexOf = function (key) {

			var result, i;

			i = 0;
			result = -1;

			for ( ; i < this._length; i ++) {

				if(this._data[i].key === key) {
					result = i;
					break;
				}
			}

			return result;
		};

		Map.prototype.remove = function (key) {
			var index;

			index = this._indexOf(key);

			if(index > -1) {
				this._data.splice(index, 1);
			}
		};

		Map.prototype.empty = function () {
			this._data = [];
			this._length = 0;
		}

		/* Helpers
		----------------------------------------------- */
		function clone (obj) {

			var dest;

			dest = {};

			for (var key in obj) {
				dest[key] = obj[key];
			}

			return dest;
		}

		/* Export
		----------------------------------------------- */
		return Map;

	});

})(this);
