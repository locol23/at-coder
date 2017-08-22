function Main(input){
    var input = parseInt(input, 10);
    const num = [1, 2, 4, 8, 16, 32, 64];

    for(var i = num.length - 1; -1 < i; i--){
        if(num[i] <= input){
            console.log(num[i]);
            break;
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
