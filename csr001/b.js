function Main(input){
    input = input.split("\n");
    var arr = input[1].split(" ");
    var result = 0;

    arr.forEach(function(val){
        result += parseInt(val, 10);
    });

    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
