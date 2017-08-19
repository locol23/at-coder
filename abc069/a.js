function Main(input){
    input = input.split(" ");
    var x = parseInt(input[0]) - 1;
    var y = parseInt(input[1]) - 1;

    console.log('%d', x * y);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
