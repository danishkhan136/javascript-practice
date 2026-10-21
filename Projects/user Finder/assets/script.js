let users = [
    {
        name: "alina ali",
        pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
        bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
    },
    {
        name: "ashia khan",
        pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
        bio: "main character energy 🎬 | coffee > everything ☕✨",
    },
    {
        name: "zeynep",
        pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
        bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
    },
    {
        name: "basit",
        pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
        bio: "too glam to give a damn 💅 | filter free soul",
    },
    {
        name: "mina derimates",
        pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
        bio: "a little chaos, a lot of art 🎨✨ | just vibes",
    },
    {
        name: "ibad",
        pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
        bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
    },
    {
        name: "bakir",
        pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
        bio: "aesthetic overload 📸🕊️ | living in lowercase",
    },
];

function showUsers(arr) {
    arr.forEach(function (user) {
        //create outer card div
        const card = document.createElement("div");
        card.classList.add("card");

        //Create image
        const img = document.createElement("img");
        img.src = user.pic;
        img.classList.add("bg-img");

        //crate blurred-layer div
        const blurredLayer = document.createElement("div");
        blurredLayer.style.backgroundImage = `url(${user.pic})`;
        blurredLayer.classList.add("blurred-layer");

        //create content div
        const content = document.createElement("div");
        content.classList.add("content");

        //create h3 and paragraph
        const heading = document.createElement("h3");
        heading.textContent = user.name;

        const para = document.createElement("p");
        para.textContent = user.bio;

        //append heading and paragraph to content
        content.appendChild(heading);
        content.appendChild(para);

        //append all to card
        card.appendChild(img);
        card.appendChild(blurredLayer);
        card.appendChild(content);

        //Finally, append card to the body or any container
        document.querySelector(".cards").appendChild(card);

    })
}

showUsers(users);

let inp = document.querySelector(".inp");
inp.addEventListener("input", function () {
    let newUsers = users.filter((user) => {
        return user.name.startsWith(inp.value);
    })

    document.querySelector(".cards").innerHTML = "";
    if (newUsers.length) {
        showUsers(newUsers);
    }
    else {
        let msg = document.createElement("p");
        msg.textContent = "No User Found";
        document.querySelector(".cards").appendChild(msg);
    }
});



// OPTIMIZE CODE BY CTATGPT-6
//     |
//     |
//     |
//    \ /
//     |



// let users = [
//     {
//         name: "alina ali",
//         pic: "https://i.pinimg.com/736x/cd/9b/1c/cd9b1cf5b96e8300751f952488d6c002.jpg",
//         bio: "silent chaos in a loud world 🌑🖤 | not for everyone",
//     },
//     {
//         name: "ashia khan",
//         pic: "https://i.pinimg.com/736x/1f/2f/85/1f2f856bf3a020ed8ee9ecb3306ae074.jpg",
//         bio: "main character energy 🎬 | coffee > everything ☕✨",
//     },
//     {
//         name: "zeynep",
//         pic: "https://i.pinimg.com/736x/23/48/7e/23487ef1268cfe017047a0640318c0d0.jpg",
//         bio: "walking through dreams in doc martens 💭🖤 | late night thinker",
//     },
//     {
//         name: "basit",
//         pic: "https://i.pinimg.com/736x/01/be/94/01be94b0b5bf03a50b5d6c4bfec78063.jpg",
//         bio: "too glam to give a damn 💅 | filter free soul",
//     },
//     {
//         name: "mina derimates",
//         pic: "https://i.pinimg.com/736x/74/b0/67/74b067e6c5ece09d99f68c42c5f6754e.jpg",
//         bio: "a little chaos, a lot of art 🎨✨ | just vibes",
//     },
//     {
//         name: "ibad",
//         pic: "https://i.pinimg.com/736x/9b/78/b9/9b78b95425278ee37e88869b8c5fb2c6.jpg",
//         bio: "don’t text, just vibe 🪩 | soft heart, sharp mind",
//     },
//     {
//         name: "bakir",
//         pic: "https://i.pinimg.com/736x/22/8b/cf/228bcf5a0800f813cd1744d4ccbf01ea.jpg",
//         bio: "aesthetic overload 📸🕊️ | living in lowercase",
//     },
// ];

// const cards = document.querySelector(".cards");
// const inp = document.querySelector(".inp");

// function showUsers(arr) {
//     cards.innerHTML = arr.map(user => `
//         <div class="card">
//             <img src="${user.pic}" class="bg-img" alt="${user.name}">

//             <div class="blurred-layer"
//                  style="background-image: url('${user.pic}')">
//             </div>

//             <div class="content">
//                 <h3>${user.name}</h3>
//                 <p>${user.bio}</p>
//             </div>
//         </div>
//     `).join("");
// }

// // Display all users
// showUsers(users);

// // Search users by name
// inp.addEventListener("input", function () {
//     const searchValue = inp.value.trim().toLowerCase();

//     const filteredUsers = users.filter(user =>
//         user.name.toLowerCase().startsWith(searchValue)
//     );

//     showUsers(filteredUsers);
// });