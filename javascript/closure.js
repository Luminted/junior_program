function createFunc(){
    var num = 0;
    
    return function(){
        console.log(num);
        num++;
    }
}

var func1 = createFunc();
var func2 = createFunc();

func1();
func1();
func1();
func1();
func2();
func2();
func1();

(function(){
    var apple = 'alma';
    console.log(apple);
})();