function Main(input){
    input = input.split("\n");
    var arr = input[1].split(" ");

    console.log(arr.indexOf('1') + 1);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
