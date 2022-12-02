let str="racecar";
let bag="";
for(i=str.length-1;i>=0;i--){
  bag+=str[i];
}
if(bag==str){
console.log("palindrome");
}
else{
console.log("Not a palindrome");
}