"use strict"

class User {

    static compteurPresence = 0;

    constructor(firstname, lastname, title, age, photo, email, city, country){
        this.firstname = firstname;
        this.lastname = lastname;
        this.title = title;
        this.age = age;
        this.photo = photo;
        this.email = email;
        this.city = city;
        this.country = country;
        this.presence = false;
        this.element = this.generateUser();
    }

    generateUser() {
        const userElement = document.createElement("div");
        userElement.className = "user";
        userElement.dataset.present = this.presence;

        userElement.innerHTML = `
		<img src="${this.photo}">
		<div class="user--info">
				<h1>${this.title} ${this.firstname} ${this.lastname}</h1>
				<p>${this.age} years old</p>
				<p>${this.city}, ${this.country}</p>
		</div>
		<a href="mailto:${this.email}">
				<span class="mail">✉️</span>
		</a>
        </div>
        `;

        userElement.addEventListener("click", () => {
            this.togglePresence();
        });

        //console.log(userElement)
        return userElement;
    }

    render(container){
        container.appendChild(this.element);
    }

    togglePresence(){
        if (this.presence == false) {
            this.presence = true;
            this.element.dataset.present = this.presence;
            User.compteurPresence++;
        }
        else {
            this.presence = false;
            User.compteurPresence--;
            this.element.dataset.present = this.presence;
        }
        const conteur = document.querySelector('.counter');
        conteur.textContent = `${User.compteurPresence}/20 people are here`;
    }

}

export default User;

