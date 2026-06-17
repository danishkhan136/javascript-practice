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