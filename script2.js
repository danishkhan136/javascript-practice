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