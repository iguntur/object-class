import test from 'ava';
import fn from './';

class Fixture {
	constructor() {
		this.props = 'bar';
	}
	static staticMethod1() {}
	static staticMethod2() {}
	static staticMethod3() {}
	static staticMethod4() {}
	prototypeMethod1() {}
	prototypeMethod2() {}
	prototypeMethod3() {}
	prototypeMethod4() {}
}

test.beforeEach(t => {
	t.context.statics = ['staticMethod1', 'staticMethod2', 'staticMethod3', 'staticMethod4'];
	t.context.prototypes = ['prototypeMethod1', 'prototypeMethod2', 'prototypeMethod3', 'prototypeMethod4'];
});

test('return an object', t => {
	t.true(typeof fn === 'object');
	t.true(typeof fn !== Array.isArray(fn));
});

test('throws an error if the argument is not a function or empty argument', t => {
	t.throws(() => fn.staticOf({}));
	t.throws(() => fn.staticOf([]));
	t.throws(() => fn.staticOf(/regex/));
	t.throws(() => fn.staticOf());

	t.throws(() => fn.prototypeOf({}));
	t.throws(() => fn.prototypeOf([]));
	t.throws(() => fn.prototypeOf(/regex/));
	t.throws(() => fn.prototypeOf());
});

test('return an array and expose static method of class', t => {
	t.true(Array.isArray(fn.staticOf(Fixture)));
	t.deepEqual(fn.staticOf(Fixture), t.context.statics);
});

test('return an array and expose prototype method of class', t => {
	t.true(Array.isArray(fn.prototypeOf(Fixture)));
	t.deepEqual(fn.prototypeOf(Fixture), t.context.prototypes);
});
