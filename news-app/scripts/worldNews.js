
let enter =async()=>{
    let query=document.getElementById('search').value;
    let res=await fetch(`https://masai-mock-api-2.herokuapp.com/news?q=${query}`)
       
    let data=await res.json();
    console.log(data);
}

