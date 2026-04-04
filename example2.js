const person={name:'bhava'};
const name=person.name;
console.log(name);

// destructoring
const person1={name1:'bhava',age:21};
const {name1,age}=person1;
console.log(name1,age);

// array can be destructored into variables for separate  value
const hobbies=['Sports','Cooking'];
const[hobby1,hobby2]=hobbies;
console.log(hobby1,hobby2);

// asynchronous code 
setTimeout(()=> {
    console.log('timer is done');
},2000);
console.log('hihello');

// async with callback func

const fetchData = (callback)=>
{
callback('func executed');
}
setTimeout(()=> {
    fetchData((result)=>{
        console.log(result);
    })
},2000);
console.log('hi i am bhava');

// async with call back function nowset some time to execute 

const fetchData1 = (callback)=>
{
    setTimeout(()=>{
     callback('func executed');
   },1500)
}
setTimeout(()=> {
    fetchData1((result)=>{
        console.log(result);
    })
},2000);
// here first settimeout execute by 2sec then go tou fetchdata it also need 1.5sec after it execute

