function Main(input){
    var input = input.split("\n");
    var a = input[1].split(" ").sort();
    var result = [];
    var temp = 0;

    for(var i = input[0] - 1; i > 0; i--){
        if(a.indexOf(a[i]) !== i && temp !== a[i]){
            temp = a[i];
            result.push(a[i]);
        }
        if(result.length === 2){
            break;
        }
    }

    if(result.length === 0){
        console.log(0)
    }else{
        console.log('%d', result[0] * result[1]);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
