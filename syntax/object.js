var member = ['kim', 'lee', 'park', 'choi'];
console.log(member[1]); //lee
var i = 0;
while(i < member.length){
  console.log('arry loop :',member[i]);
  i = i + 1;
}


var roles = {
  'programmer' : 'kim',
  'designer' : 'lee',
  'manager' : 'park',
}
console.log(roles.designer); //lee

for(var i in roles){
  console.log('object :', i, 'value :', roles[i]);
}
