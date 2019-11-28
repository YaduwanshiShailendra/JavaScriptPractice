/*
Ques : convertFracs [(1, 2), (1, 3), (1, 4)] `shouldBe` [(6, 12), (4, 12), (3, 12)]
 */
var arr = [[1, 2],[1, 3],[1,4]];
console.log("Input array :")
console.log(arr);
var den= [];
for(i=0; i<arr.length; i++) {
 den.push(arr[i][1]);
}
console.log("Denominator array is: ");
console.log(den);
// LCM logic
var i=2;
var lcm=1;
var no=1;
do{
lcm =no*i;
i++;
}
while(lcm%den[0]!=0 || lcm%den[1]!=0 || lcm%den[2]!=0);
// console.log("Lcm of denominator is: "+lcm);
var output=[];
for(i=0; i<arr.length; i++) {
  var temp = (arr[i][0]*lcm)/den[i];
  //console.log(temp);
  output.push([temp, lcm]);
}
console.log("Output is: ");
console.log(output);