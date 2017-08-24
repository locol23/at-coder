function Main(input){
    input = input.split("\n");
    var arr = input[1].split(" ");

    var max = arr.reduce(function(a, b){
        return Math.max(a, b);
    });

    console.log(max);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
