// ----------------var,const,let--------------------------


var name = "bhava";
console.log(name);
var age  = 25;
var hasHobby = true;
function displayUser(userName,userAge,userHobby)
{
    return 'Username is '+name+'\n'+
           'Age is '+age+'\n'+
           'Has Hobby: '+hasHobby;
}
console.log(displayUser());

// var - we can access this inside the function but function cant able to use this use outside 
// let we can rename or assign same variablename with different values
//  const - it cant be rename reassign 

// -------------arrow function--------------

const sum = function (a,b)
{
    return a+b;
}
// it is an anonymous function
console.log(sum(1,2));

const sum1 = (a,b)=>
{
    return a+b;
}
// it is an arrow function(version1)
console.log(sum1(2,3));


const one= a => a+1;
// it is a one parameter version
console.log(one(5));


const sum2 = (a,b) => a+b;
// it is an arrow function(version2)
console.log(sum2(3,4));

// -----------------------key value----------------------------------

const person =
{
    name : 'bhava',
    age : 25,
    greet : function()
    {
        console.log('hello i am '+this.age);
    }
}
person.greet()

// -------------------another function-------

const person1 =
{
    name : 'bhava',
    age : 25,
    greet()
    {
        console.log('hello i am '+this.age);
    }
}
person1.greet();

// -------------Array---------------
// version 1
const hobbies=['Sports','Cooking'];
for(const hobby of hobbies)
{
    console.log(hobby);
}
// version 2
const hobbies1=['Sports','Cooking'];
console.log(hobbies1.map(hobby=>'hobby: '+hobby));

// push method
const hobbies2=['sports','dancing'];
hobbies2.push('music');
const per={name:'bhavabs'};
per.name='bhanai';
console.log(per);

// -------------array copies-------

const bhava=['musi','dance'];
const dhar=bhava;
dhar.push('dharu');
console.log(dhar);

const bhava1=['musi','dance'];
const dhar1=bhava1.slice();
dhar1.push('dharu');
console.log(bhava1);
console.log(dhar1);

// -----------spread operator in arrays --------
const bhava2=['musi','dance'];
const dhar2=[bhava2];  
// here assign that array values  in to another value it shown as an array not values inside that 
dhar2.push('dharu');
console.log(dhar2);

const bhava3=['musi','dance'];
// so here we use 3. for converting that arrays into values  
const dhar3=[...bhava3];
dhar3.push('dharu');
console.log(dhar3);

// ----------spread operator in objects---------

const perso={name:'bhavabssm'};
const stude={...perso,age:24};
console.log(perso,stude);

// ------rest operator----------

const toArray=(arg1,arg2,arg3)=>
{
     return [arg1,arg2,arg3];
} 
console.log(toArray(1,2,3));

// here within the parameter brackets it is called rest operator 
const toArray1=(...args)=>
{
     return args;
} 
console.log(toArray1(1,2,3,4,5,6));