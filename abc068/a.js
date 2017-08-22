function Main(input){
    var result = 'ABC' + input;
    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
