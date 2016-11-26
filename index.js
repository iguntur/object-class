'use strict';

module.exports.staticOf = fn => {
	if (!fn || typeof fn !== 'function') {
		throw new TypeError(`Expected argument to be of type 'function', got ${typeof fn}`);
	}

	return [].concat(Object.getOwnPropertyNames(fn))
			.filter(val => ['length', 'name', 'prototype'].indexOf(val) === -1);
};

module.exports.prototypeOf = fn => {
	if (!fn && typeof fn !== 'function') {
		throw new TypeError(`Expected argument to be of type 'function', got ${typeof fn}`);
	}

	return [].concat(Object.getOwnPropertyNames(fn.prototype))
			.filter(val => ['constructor'].indexOf(val) === -1);
};
