// let select= document.querySelector("select");
// let device = document.querySelector("#heading")
// device.style.color="red";
// select.addEventListener("change",function(evt){
//  device.textContent=`${evt.target.value} device selected`;
//  device.style.color="green";
// });

// let h1 = document.querySelector("h1");

// window.addEventListener("keydown", function (evt) {
//        console.log(evt);
//        if (evt.key === " ") {
//               h1.textContent = "SPACE";
//        }
//        else {
//               h1.textContent = evt.key;
//        }
// });

// let fileinput = document.querySelector("#fileinput")
// let btn = document.querySelector("#btn");

// btn.addEventListener("click",function(){
//        fileinput.click();
// });

// fileinput.addEventListener("change",function(evt){
//        const file = evt.target.files[0];
//        if(file){
//        btn.textContent=file.name;
//        }
// });








// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");
// let main = document.querySelector("#main");
// form.addEventListener("submit", function (evt) {
//     evt.preventDefault();
//     let card = document.createElement("div");
//     card.classList.add("card")
//     let profile = document.createElement("div");
//     profile.classList.add("profile")
//     let img = document.createElement("img");
//     img.setAttribute("src", inputs[0].value);
//     let h3 = document.createElement("h3");
//     h3.textContent = inputs[1].value;
//     let h5 = document.createElement("h5");
//     h5.textContent = inputs[2].value;
//     let p = document.createElement("p");
//     p.innerHTML = inputs[3].value



//     profile.appendChild(img);
//     card.appendChild(profile);
//     card.appendChild(h3);
//     card.appendChild(h5);
//     card.appendChild(p);




//     // console.log(card);
//     // document.body.appendChild(card);
//     main.appendChild(card);

//     inputs.forEach(function(inp){
//         if(inp.type !== "submit"){
//         inp.value= "";
//         }
//     }
//     )
// });



// let abcd = document.querySelector("#abcd");

// abcd.addEventListener("mouseover",function(){
//     abcd.style.backgroundColor="yellow";
// });

// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor="red";
// });
// abcd.addEventListener("mouseleave",function(){
//     abcd.style.backgroundColor="";
// });

// window.addEventListener("mousemove",function(evt){
//     console.log(evt);
// });

// let abcd = document.querySelector("#abcd");
// window.addEventListener("mousemove", function (evt) {
//     // abcd.style.top=evt.clientY+"px";
//     // abcd.style.left=evt.clientX+"px";
//     abcd.style.top = (evt.clientY - abcd.offsetHeight / 2) + "px";
//     abcd.style.left = (evt.clientX - abcd.offsetWidth / 2) + "px";
// });

// New Practice


// let abcd = document.querySelector("h1");
// abcd.style.color = "red";

// let h1 =document.querySelector("h1");
// console.log(h1);

// let a = document.querySelector("a");
// console.log(a);
// a.href="https://www.google.com";

// let img = document.querySelector("img");
// img.setAttribute("src","");

// let a = document.querySelector("a");
// console.log(a.getAttribute("href"));

// let h1=document.createElement("h1");
// h1.textContent="hamza";
// document.body.append(h1);
// document.querySelector("body").prepend(h1);

// let h1 = document.createElement("h1");
// h1.textContent="CCNA";
// document.querySelector("div").appendChild(h1);



// let h1 = document.querySelector("h1");
// h1.classList.add("hulu");

// let lis = document.querySelectorAll("li");
// lis.forEach(function(val){
//     console.log(val.textContent)
// });


// let lis = document.querySelectorAll("li");
// for(let i = 0 ; i <lis.length;i++){
//     console.log(lis[i].textContent);
// }

// let li =document.querySelectorAll("ul li:nth-child(2n)");
// console.log(li);

// li.forEach(function(elem){
//     elem.classList.add("highlight");
// })

// let p=document.querySelectorAll("p");

// p.forEach(function(elem){
//     elem.style.fontSize="18px";
// })

// let h1 = document.querySelector("h1");

// h1.addEventListener("click",function(){
//     h1.classList.add("highlight");
//     // h1.classList.toggle("highlight");
// });
// h1.addEventListener("contextmenu",function(e){
//     // e.preventDefault();
//     //  h1.style.color = "black";
//     h1.classList.remove("highlight");
// });

// h1.removeEventListener("contextmenu",function(){
//     console.log("rightclick event removed");
// })

// let input = document.querySelector("input");
// input.addEventListener("input", function (evt) {
//     if (evt.data !== null) {
//         if (evt.data !== " ") {
//             console.log(evt.data);
//         }
//     }
// });

// let sel = document.querySelector("select");
// let device =document.querySelector("#device");
// sel.addEventListener("change", function (dets) {
//     device.textContent=`${dets.target.value} device selected`
// });



// let h1 = document.querySelector('h1')
// window.addEventListener("keydown",function(dets){
//     // console.log(dets)
//     // h1.textContent=dets.key;
//     h1.textContent = dets.key === " " ? "space" : dets.key;
// });


// let btn = document.querySelector("#btn");
// let fileinput = document.querySelector("#fileinput");


// btn.addEventListener("click",function(dets){
//     fileinput.click();
// })

// fileinput.addEventListener("change",function(dets){
//    const file = dets.target.file[0];
//    if(file){
//     btn.textContent= file.name;
//    } 
// })

// let main = document.querySelector("#main");
// let form = document.querySelector("form");
// let inputs = document.querySelectorAll("input");


// form.addEventListener("submit",function(e){
//     e.preventDefault();

//     let card= document.createElement("div");
//     card.classList.add("card");

//      let profile= document.createElement("div");
//     profile.classList.add("profile");

//     let img= document.createElement("img");
//     img.setAttribute("src",inputs[0].value)

//     let h3= document.createElement("h3");
//     h3.textContent=`${inputs[1].value}`;

//     let h5= document.createElement("h5");
//     h5.textContent=`${inputs[2].value}`;

//     let p= document.createElement("p");
//     p.textContent=`${inputs[3].value}`;

//     profile.appendChild(img)

//     card.append(profile,h3,h5,p);
//     console.log(card);

//     main.appendChild(card);

//     inputs.forEach(function(inp){
//         if(inp.type !== "submit"){
//         inp.value="";
//         }
//     })
// })

// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("mouseover",function(){
//     abcd.style.backgroundColor="yellow";
// })
// abcd.addEventListener("mouseout",function(){
//     abcd.style.backgroundColor="black";
// })

// window.addEventListener("mousemove", function(dets){
//     console.log(dets);
// });


// let abcd = document.querySelector("#abcd");

// window.addEventListener("mousemove", function(dets){
//     abcd.style.top= dets.clientY + "px";
//     abcd.style.left= dets.clientX + "px";
// })


// let abcd = document.querySelector("#abcd");
// abcd.addEventListener("click",function(dets){
//     console.log(dets.target)
// })

// document.querySelector("#nav").addEventListener("click",function(){
//     alert("clicked");
// });

// document.querySelector("ul").addEventListener("click",function(dets){
//     dets.target.style.textDecoration = "line-through"
// });

// document.querySelector("ul").addEventListener("click",function(dets){
//     dets.target.classList.toggle("lt");
// });


// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     console.log("button clicked");
// });

// c.addEventListener("click",function(){
//     console.log("C clicked");
// });

// b.addEventListener("click",function(){
//     console.log("B clicked");
// });

// a.addEventListener("click",function(){
//     console.log("A clicked");
// });

// JAB BHI APPCLICK KARTE HOO YA KOI EVENT RAISE KARTA HOO TO APKA JOO EVENT HOTA HAI WO 2 PHASE MA CHLATA HAI
// PHASE 1: EVENT TOP LEVEL ELEMENT SA NEECHA KI TARAF AYII GAA
// PHASE 2: EVENT RAISED ELEMENT SA PARENT KI PARENT KI TARF GAI GAA

// AUR PEHLA PHASE 1 HOTI HAI

// HAMESHA PHASE 1 HII PLHKAA HOTI HAI PAR YA BY DEFEAULTOFF RETHI HAI

// AGAR ON KAR DAIN PHIR PHIR PHASE 1 HII PEHLA CHALA GAA YA AUS KA ANSWER MILA GAA


// hota ya ka pela capture phase phir bubbling 
// par by defeault cature off hota hai
// is lia direct bubbling chalgata hai
// lakin hum capture phase on kar sakta hain


// let a = document.querySelector(".a");
// let b = document.querySelector(".b");
// let c = document.querySelector(".c");
// let btn = document.querySelector("button");

// btn.addEventListener("click",function(){
//     console.log("button clicked");
// });

// c.addEventListener("click",function(){
//     console.log("C clicked");
// });

// b.addEventListener("click",function(){
//     console.log("B clicked");
// });

// a.addEventListener("click",function(){
//     console.log("A clicked");
// }, true);

// jis pa ture hai sab sa pehla aus ka capture phase chala gaa aur agar koi capture nahi to direct bubbling chala gaa
// capture>bubbling

// let inp = document.querySelector("input");
// let span = document.querySelector("span");
// let characterLeft = document.querySelector("#characterleft")

// inp.addEventListener("input", function () {
//     span.textContent = inp.value.length;
//    let left = 20 -inp.value.length;
//     span.textContent= left;
//    if(left <0){
//     span.style.color = "red";
//    }
//    else
//    {
//     span.style.color = "black";
//    }
// });



// inp.addEventListener("input", function () {
//     span.textContent = inp.value.length;
//     characterLeft.textContent = 20 - inp.value.length;
//     if (inp.value.length >= 20) {
//         alert("Only 20 characters allowed!");

//         // extra characters remove
//         inp.value = inp.value.slice(0, 20);
//     }
// });

// 29/06/2026
// gettet and setter problems 

// problem 1 of getter / problem 1

// const student = {
//     name: "danish",
//     age: 22,

//     get studentName() {
//         return this.name;
//     }
// };


// console.log(student.studentName);


// problem 1 of setter / problem 2

//Question

// Create an object called car.

// Property:
// speed = 60

// Create a setter called carSpeed.

// Rules:
// - If the value is greater than or equal to 0,
//   update speed.
// - Otherwise print:
//   "Invalid Speed"

// Test it like this:

// car.carSpeed = 100;

// console.log(car.speed);


//setter problem 1 answer


//version 1

// const car = {
//     speed: 60,

//     set carspeed(value) {
//         if (value >= 0) {
//             this.speed = value;
//         } else {
//             console.log("Invalid Speed");
//         }
//     }
// };

// car.carspeed = 25;

// console.log(car.speed);


//version 2

// const car = {
//     speed: 60,

//     set carspeed(value) {
//         if (value >= 0) {
//             this.speed = value;
//         } else {
//             alert("Invalid Speed! Speed! reset to 0");
//             console.log("Invalid Speed! Speed has been reset to 0.");
//             this.speed = 0;
//         }
//     }
// };

// car.carspeed = -50;

// console.log(car.speed);


// version 3

// const car = {
//     _speed: 60,

//     get carspeed() {
//         return this._speed;
//     },

//     set carspeed(value) {
//         if (value >= 0) {
//             this._speed = value;
//         } else {
//             console.log("Invalid Speed");
//         }
//     }
// };


// version 4

// const car = {
//     _speed: 60,

//     // Getter
//     get carspeed() {
//         console.log("Getter Called!");
//         return this._speed;
//     },

//     // Setter
//     set carspeed(value) {
//         console.log("Setter Called!");

//         if (value >= 0) {
//             this._speed = value;
//         } else {
//             console.log("Invalid Speed! Speed has been reset to 0.");
//             this._speed = 0;
//         }
//     }
// };

// // Valid speed
// car.carspeed = 120;          // Calls Setter
// console.log(car.carspeed);   // Calls Getter

// // Invalid speed
// car.carspeed = -50;          // Calls Setter
// console.log(car.carspeed);   // Calls Getter



// Output
// Setter Called!
// Getter Called!
// 120

// Setter Called!
// Invalid Speed! Speed has been reset to 0.
// Getter Called!
// 0

// problem 1 of getter and setter / problem 3

// Create an object named person.

// Property:

// name: "Ali"

// Getter:

// fullName

// should return the name.

// Setter:

// fullName

// should update the name.

// Example

// person.fullName = "Danish";

// console.log(person.fullName);

// Output

// Danish

// problem 1 of getter and setter Answer

// const person = {
//     _name: "Danish",

//     get fullName() {
//         return this._name;
//     },

//     set fullName(value) {
//         this._name = value;
//     }
// };

// console.log(person.fullName); // Danish

// person.fullName = "Ali";

// console.log(person.fullName); // Ali


// problem 2 of setter / problem 4

// (Setter with Validation)

// Create an object

// const account = {
//     balance: 5000
// }

// Create a setter called

// newBalance

// Rules

// Balance cannot be negative.
// If valid → update it.
// Otherwise print
// Balance cannot be negative

// Example

// account.newBalance = -100;

// Output

// Balance cannot be negative

// Balance should still be

// 5000


// problem 2 of setter Answer


// version 1

// const account = {
//     balance: 5000,

//     set newBalance(value) {
//         if (value > 0) {
//             this.balance += value;
//         } else {
//             console.log("Invalid Value");
//         }
//     }
// };

// account.newBalance = 2000;

// console.log(account.balance);


// version 2

// ⭐ Professional Version (Getter + Setter)

// const account = {
//     _balance: 5000,

//     get balance() {
//         return this._balance;
//     },

//     set deposit(amount) {
//         if (amount > 0) {
//             this._balance += amount;
//         } else {
//             console.log("Invalid Amount");
//         }
//     }
// };

// console.log(account.balance); // 5000

// account.deposit = 2000;

// console.log(account.balance); // 7000


// problem 2 of getter / problem 5

// Object

// const movie = {
//     title: "Interstellar"
// }

// Getter

// movieTitle

// Instead of returning

// Interstellar

// Return

// Movie: Interstellar

// Output

// console.log(movie.movieTitle);
// Movie: Interstellar

// Notice that the original property is still just "Interstellar", but the getter formats it before returning it.


// problem 2 of getter Answer / Problem 5

// const movie = {

//     title: "Interstellar",

//     get movieTitle(){
//         return "Movie: "+this.title;
//     }

// }

// console.log(movie.movieTitle);


// problem 2 of getter and setter Answer /problem 6


// const mobile = {

//     _brand : "Samsung",
//     price : 80000,

//     get details(){
//         return this._brand+" - Rs."+this.price;
//     },

//     set newPrice(value){
//         if (value>0){
//             this.price= value
//         }
//         else{
//             console.log("Invalid price");
//         }
//     }

// }

// console.log(mobile.details);

// mobile.newPrice=55555;

// console.log(mobile.details);


// BANK ACCOUT USING GETTER AND SETTER (1)

// const account = {
//     _balance: 5000,

//     get balance() {
//         return this._balance;
//     },

//     set deposit(amount) {
//         if (amount > 0 ) {
//             this._balance += amount;
//         } else {
//             console.log("Invalid Amount");
//         }
//     },

//     set withdraw(amount) {
//         if (amount > 0 && amount <= this._balance) {
//             this._balance -= amount;
//         } else {
//             console.log("Invalid Amount");
//         }
//     }
// };


// console.log(account.balance); // 5000

// account.deposit = 4000;

// console.log(account.balance); // 9000

// account.withdraw = 2000;

// console.log(account.balance); // 7000




// BANK ACCOUT USING GETTER AND SETTER (2)


// const account = {
//     _balance: 5000,

//     // Getter
//     get balance() {
//         return `Your current balance is Rs.${this._balance}`;
//     },

//     // Deposit Setter
//     set deposit(amount) {
//         if (amount > 0) {
//             this._balance += amount;
//         } else {
//             console.log("Deposit amount must be greater than 0.");
//         }
//     },

//     // Withdraw Setter
//     set withdraw(amount) {
//         if (amount <= 0) {
//             console.log("Withdrawal amount must be greater than 0.");
//         } else if (amount > this._balance) {
//             console.log("Insufficient Balance.");
//         } else {
//             this._balance -= amount;
//         }
//     }
// };

// // Initial Balance
// console.log(account.balance);//5000

// // Deposit
// account.deposit = 4000;
// console.log(account.balance);//9000

// // Withdraw
// account.withdraw = 2000;
// console.log(account.balance);//7000





// FORM AND FORM VALIDATION

// let form = document.querySelector("form");
// let name = document.querySelector("#name");

// form.addEventListener("submit", function (dets) {
//     dets.preventDefault();

//     if (name.value.length <= 2) {
//         document.querySelector("#hide").style.display = "initial";
//     }
//     else {
//         document.querySelector("#hide").style.display = "none";
//     }

//     const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;
//     let ans = regex.test("danish2@gmail.com");
//     console.log(ans);
// });

// 30/06/2026

//EMAIL and PASSWORD VALIDATOR


// let form = document.querySelector("form");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");

// form.addEventListener("submit", function (e) {
//     e.preventDefault();

//     document.querySelector("#email-error").textContent = "";
//     document.querySelector("#password-error").textContent = "";


//     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

//     const passwordRegex =
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=\[\]{};':"\\|,.<>\/~`])[A-Za-z\d@$!%*?&^#()_+\-=\[\]{};':"\\|,.<>\/~`]{8,}$/;

//     let emailans = emailRegex.test(email.value);
//     let passwordans = passwordRegex.test(password.value);


//     isValid = true;

//     if (!emailans) {
//         document.querySelector("#email-error").textContent = "Email is Incorrect";
//         document.querySelector("#email-error").style.display = "initial";
//         isValid = false;
//     }

//     if (!passwordans) {
//         document.querySelector("#password-error").textContent = "password is Incorrect";
//         document.querySelector("#password-error").style.display = "initial";
//         isValid = false;
//     }

//     if (isValid) {
//         document.querySelector("#resultMessage").textContent = "Everyting is correct";
//         document.querySelector("#resultMessage").style.color = "green";
//     }
// });

// let form = document.querySelector("#form");
// let email = document.querySelector("#email");
// let password = document.querySelector("#password");

// form.addEventListener("submit",function(e){
//     e.preventDefault()

//     document.querySelector("#email-error").textContent = "";
//     document.querySelector("#password-error").textContent = "";



//      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[A-Za-z]{2,}$/;

//     const passwordRegex =
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&^#()_+\-=\[\]{};':"\\|,.<>\/~`])[A-Za-z\d@$!%*?&^#()_+\-=\[\]{};':"\\|,.<>\/~`]{8,}$/;

//     let emailans = emailRegex.test(email.value);
//     let passwordans= passwordRegex.test(password.value);

//     isValid=true;

//     if(!emailans){
//         document.querySelector("#email-error").textContent= "email is incorrect";
//         document.querySelector("#email-error").style.display = "initial";
//         isValid=false;
//     }

//      if(!passwordans){
//         document.querySelector("#password-error").textContent= "password is incorrect";
//         document.querySelector("#password-error").style.display = "initial";
//         isValid=false;
//     }

//     if (isValid) {
//         document.querySelector("#resultMessage").textContent = "Everyting is correct";
//         document.querySelector("#resultMessage").style.color = "green";
//     }

// });


// 02/07/2026

// SET TIMEOUT AND SET INTERVAL

//setTimeout

// setTimeout(function(){
//     console.log("hello");
// },
// 5000);

//setInterval

// setInterval(function(){
//     console.log("hello");
// },
// 5000);


// CLEARTIMEOUT AND CLEARINTERVAL

//clearTimeout

// let cto = setTimeout(function(){
//     console.log("hello");
// },
// 5000);

// clearTimeout(cto);

//clearInterval

// let cin = setInterval(function(){
//     console.log("hello");
// },
// 5000);

// clearInterval(cin);

// let count=10

// example

// setInterval(function(){
//     if(count>=1){
//     count--;
//     console.log(count);
//     }
// },1000);


let interval = setInterval(function(){
    if(count>=1){
    count--;
    console.log(count);
    }
    else{
        clearInterval(interval);
    }
},1000);