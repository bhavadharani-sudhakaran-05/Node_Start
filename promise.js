let myPromise=new Promise((myResolve,myReject)=>
{
   myReject();
})
// above is producing code whether true or false
myPromise.then(()=>
{
    console.log('success');
}).catch(()=>
{
    console.log('failed');
})

// settimeout func
let myPromise1=new Promise((myResolve,myReject)=>
{
   setTimeout(()=>
      {
         myResolve();
      },2000)
})
myPromise1.then(()=>
{
    console.log('success');
}).catch(()=>
{
    console.log('failed');
})
// we can also send data to the solve,reject value
let myPromise2=new Promise((myResolve,myReject)=>
{
   setTimeout(()=>
      {
         myResolve('bhava');
      },2000)
})
myPromise2.then((name)=>
{
    console.log('success '+name);
}).catch(()=>
{
    console.log('failed');
})
// return name value using then
let myPromise3=new Promise((myResolve,myReject)=>
{
   setTimeout(()=>
      {
         myResolve('bhavadharani');
      },2000)
})
myPromise3.then((name)=>
{
    return 'NAME:'+name;
}).then((name)=>
{
   console.log(name);
}).catch(()=>
{
    console.log('failed');
})