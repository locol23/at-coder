function Main(input){
  for(var  i = 0; i < 10; i++){
    var re = new RegExp(String(i) + String(i) + String(i),'g');
    var arr = input.match(re);
    if(re.test(input)){
        console.log('Yes');
        return;
    }
  }
  console.log('No');
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
