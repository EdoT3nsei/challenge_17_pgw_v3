"use strict"

import User from "./User.js";

const main = document.querySelector("main");
const sortname = document.querySelector('#sort--name');
const sortage = document.querySelector('#sort--age');
const counter = document.querySelector('.counter');

const userContainer = [];

async function fetchData(){
    try {
        const response = await fetch("https://randomuser.me/api/?results=20");
        const data = await response.json();
        console.log(data);
        createUser(data);
    }
    catch(error){
        console.error();
    }
}

function createUser(data){
    data.results.forEach(element => {
        const lastname = element.name.last;
        const age = element.dob.age;
        const user = new User(
            element.name.first,
            element.name.last,
            element.name.title,
            element.dob.age,
            element.picture.large,
            element.email,
            element.location.city,
            element.location.country
        );
        userContainer.push(user);
        
        userContainer.sort((a, b) => {
            return a.lastname.localeCompare(b.lastname)});

        userContainer.forEach(user => {
            user.render(main);
        });
    });
}

sortage.addEventListener("click", function (e){
    if (!e.target.classList.contains("selected")) {
        e.target.classList.add("selected");
        sortname.classList.remove("selected");

        userContainer.sort((a, b) => {
            return a.age - b.age});

        userContainer.forEach(user => {
            user.render(main);
        });
    }
})

sortname.addEventListener("click", function (e){
    if (!e.target.classList.contains("selected")) {
        e.target.classList.add("selected");
        sortage.classList.remove("selected");
    }

    userContainer.sort((a, b) => {
        return a.lastname.localeCompare(b.lastname)});

    userContainer.forEach(user => {
        user.render(main);
    });
})

fetchData();