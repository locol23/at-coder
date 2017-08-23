function Main(input){
    input = input.split("\n");
    var arr = input[1].split(" ");
    var _arr = [];

    arr.forEach(function(val){
        _arr.push(parseInt(val, 10));
    });

    _arr.sort(function(a, b){
        return a - b 
    });

    console.log(_arr[parseInt(input[0], 10) - 1]);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
