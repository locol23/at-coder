function Main(input){
    input = input.split("\n");
    var arr = input[1].split(" ");
    var result = '';

    arr.forEach(function(val){
        if(arr[0] === val){
            return result = val;
        }
        return result += ',' +val
    });

    console.log(result);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
