function Main(input){
    input = input.split(" ");

    input[0] = Number(input[0]);
    input[1] = Number(input[1]);
    input[2] = Number(input[2]);
    input[3] = Number(input[3]);

    if(input[2] >= input[1]){
        console.log(0);
    }else if(input[3] <= input[0]){
        console.log(0);
    }else{
        if(input[0] < input[2]){
            var start = input[2]
        }else{
            var start = input[0]
        }

        if(input[1] < input[3]){
            var end = input[1]
        }else{
            var end = input[3]
        }

        console.log('%d', end - start);
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
