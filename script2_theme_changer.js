// localstorage -> apka browser ka andader jo data store karna jo ki browser band hpna per bhi delete nahi hoga

// sessionstorage -> apka data temporarily store kar karta hai matlab ki tab band hua aur data gaya

// cookies -> ye bhi data store karta hai aur aapka data browser ka cookies naamki property ma save hota hai aur ye cookie concept kam data ya light data ke liye hota hai

// 08/07/2026

// localStorage

// localStorage.setItem("name", "Danish");

// let val = localStorage.getItem("name");
// console.log(val);

// localStorage.removeItem("name");

// for upate we also use setitem is overdie the value of alerady give value

// there is another option localStorage.clear(); for clear the data


// localStorage.setItem("friends", JSON.stringify(["danish", "wajahat", "mazz"])); // JSON.stringify() to add array and objects to store them

// JSON.parse(); use to take out it in arry or object fprm from localStorage();

// let fr = JSON.parse(localStorage.getItem("friends"));


// sessionStorage

// it is apply same as local storage start with sessionStorage.______();



//cookies

//  cookies ma joo bhi data store karo gaa wo page reload hona per automtically server pa gai gaa

// document.cookie = "email=danish@test.com";


function setDarkorLight() {
    if (window.matchMedia("(prefers-color-scheme: light)").matches) {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
    }
    else {
        document.body.classList.add("dark");
        document.body.classList.remove("light");    
    }
}

setDarkorLight();

if(localStorage.getItem("theme")){
    document.body.classList.add(localStorage.getItem("theme"))
}
else{
    setDarkorLight();
}

window.matchMedia('(prefers-color-scheme: light)').addEventListener("change", function () {
    if(!localStorage.getItem("theme")){setDarkorLight();}
})  



let btn = document.querySelector("button");

btn.addEventListener("click", function () {
    if (document.body.classList.contains("dark")) {
        (document.body.classList.remove("dark"))
        (document.body.classList.add("light"))

        localStorage.setItem("theme","light")
    }
    else{
        (document.body.classList.remove("light"))
        (document.body.classList.add("dark"))

        localStorage.setItem("theme","dark")
    }
}
)