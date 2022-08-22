/*
Save the user to local storage with key "user", in following format:- 
{
name: "",
image: "",
email: "",
country: "" (store country code "in", "ch", "nz", "us", "uk")
}
*/

function clickme(){
    let user_data={
      image:document.getElementById('image').value,
      name:document.getElementById('name').value,
      email:document.getElementById('email').value,
      country:document.getElementById('country').value
    }
    
        let user_details= localStorage.setItem('user',JSON.stringify(user_data));
    
}


// https://masai-mock-api-2.herokuapp.com/news/top-headlines?country=

// import {importing} from './news-app/scripts/new.js';


