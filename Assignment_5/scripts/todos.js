console.log('Async Await');
async function fetchapi(){
    const response=await fetch('https://jsonplaceholder.typicode.com/todos');
    const data= await response;
    console.log(data);
}
fetchapi();

console.log("Fetch Api");
fetch("https://jsonplaceholder.typicode.com/todos/1").then(response=>response.json()).then(data=>console.log(data));

console.log("Promises");
fetch('https://jsonplaceholder.typicode.com/todos').then(response=>response.text().then(data=>{
    console.log(data);
}));