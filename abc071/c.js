function Main(input){
    var input = input.split("\n");
    var a = input[1].split(" ").sort();
    var dup = a.filter(function(val, i, arr){
        return arr.indexOf(val) === i && arr.lastIndexOf(val) !== i;
    });

    if(dup.length < 2){
        console.log('0');
    }else{
        var result = dup[dup.length - 2] * dup[dup.length - 1]; 
        console.log(result);
    }

}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
