var module2 = (function(){
    var self = {};

    function add(a, b){
        return a + b;
    }

    function doubleNumber(a){
        return module3.multiply(a, 2);
    }

    self.add = add;
    self.doubleNumber = doubleNumber;

    return self;
})();