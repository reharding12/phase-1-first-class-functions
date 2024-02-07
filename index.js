function receivesAFunction(callback) {
    callback();
  }

  function returnsANamedFunction() {
    function namedFunction() {
        console.log();
    }
    return namedFunction;
  }

  function returnsAnAnonymousFunction() {
    return function() {
    };
  }