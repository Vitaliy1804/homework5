let user ={
  name:"Ivan",
  surname:"Ivanov",
  gender: "male",
  age:30,
     location :{
  	city:"Obyhov",
  	street:"Lenina",
  	flat: 13,
  }

}
function cloneObject(obj){
let clonedObj ={};


if(typeof obj!='object'|| obj===null){
   return obj;
}

for( let key in obj ){
  if(obj.hasOwnProperty(key)){
    clonedObj[key]=cloneObject(obj[key]);
  }
 }
 return clonedObj;
}

let user2 = cloneObject(user)
console.log(user)
console.log(user2)
user2.name="Valera"
console.log(user)
console.log(user2)