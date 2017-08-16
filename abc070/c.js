function gcd(a, b){
  var v0 = a;
  var v1 = b;
  var v2 = a % b;

  while(v2 != 0){
    v0 = v1;
    v1 = v2;
    v2 = v0 % v1;
  }
  return v1;
}

function lcm(a, b){
  return a * b / gcd(a, b);
}

function Main(input){
  input = input.split("\n");

  var num = parseInt(input[0], 10);

  for(var i = 1; i < num; i++){
    
  }
}
