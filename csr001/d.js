function Main(input){
    input = input.split("\n");
    var arr = input[1].split(" ");

    var result = arr.sort(function(a, b){
        return a - b;
    }).reduce(function(a, b){
        return a += ' ' + b;
    });

    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
