# object-class [![Build Status](https://travis-ci.org/iguntur/object-class.svg?branch=master)](https://travis-ci.org/iguntur/object-class)

> Expose `prototype` and `static` method of class


## Install

```
$ npm install --save object-class
```


## Usage

```js
const objectClass = require('object-class');

class Foo {
    constructor() {
        this.props = 'bar';
    }
    static staticMethod1() {}
    static staticMethod2() {}
    prototypeMethod1() {}
    prototypeMethod2() {}
}

console.log(Foo);
//=> [Function: Foo]

console.log(new Foo());
//=> Foo { props: 'bar' }

console.log(objectClass.staticOf(Foo));
//=> ['staticMethod1', 'staticMethod2']

console.log(objectClass.prototypeOf(Foo));
//=> ['prototypeMethod1', 'prototypeMethod2']
```


## API

### objectClass.staticOf(input)

Returns an array from function name of input

### objectClass.prototypeOf(input)

Returns an array from function name of input

#### input

Type: `function`


## License

MIT © [Guntur Poetra](http://guntur.starmediateknik.com)
