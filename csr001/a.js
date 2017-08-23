function Main(input){
    input = input.split("\n");
    input[1].sort();

    console.log(input[1][input[0] - 1]);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
