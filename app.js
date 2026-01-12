const modeBtn = document.getElementById("modeBtn");
const body= document.body;


const mode_btn  = ()=>{
    if(localStorage.getItem("mode") === "dark"){
        document.body.classList.remove("light");
        document.body.classList.add("dark");
        modeBtn.innerText = "☀️";
    }else {
        document.body.classList.add("light");
        document.body.classList.remove("dark");
        modeBtn.innerText = "🌙";
    }
}
mode_btn();

modeBtn.onclick = () => {
    if(localStorage.getItem("mode") === "dark"){
        localStorage.setItem("mode", "light");
    }else {
        localStorage.setItem("mode", "dark");
    }
    mode_btn();
}

// ------------------------------------ikinci btn ------------------------------------------------------//

const moreBtn = document.getElementById("moreBtn");
const endpoint = "https://dummyjson.com/products";

 moreBtn .addEventListener("click", () => {
    if (posts.innerHTML.trim() !== "") return;
     axios.get(endpoint).then((response)=>{
        if(response.status === 200){
            response.data.products.slice(0,10).forEach((product)=>{
                const posts = document.getElementById("posts");
                posts.innerHTML+=`
                <div class="post">
                    <h2>${product.title}</h2>
                    <img src="${product.images[0]}" alt="${product.title}">
                    <p class="category">Kategoriya: ${product.category}</p>
                    <p class="price">Qiymət: ${product.price} ₼</p>
                </div>
                `
            })
        }
     })
    
 })
 moreBtn.addEventListener("click", () => {
    posts.innerHTML = "";
});


// ------------------------------------ucuncu btn ------------------------------------------------------//


 const commentsBtn = document.getElementById("commentsBtn");
 const endpoints = "https://dummyjson.com/comments";

 commentsBtn.addEventListener("click", ()=>{
    commentsBtn.style.display = "none";
    if(commentler.innerHTML.trim() !== "") return;
    axios.get(endpoints).then((response)=>{
        if(response.status === 200){
            response.data.comments.slice(0,12).forEach((comment)=>{
                const commentler= document.getElementById("commentler");
                commentler.innerHTML += `
                <div class="comment">
                    <p class="id">${comment.id}</p>
                    <h2>${comment.user.username} ${comment.user.fullName} </h2>
                    <p>${comment.body}</p>
                    <p class ="like">❤️ ${comment.likes}</p>
                </div>
                `
            })
        }
    })
})

commentler.addEventListener("click", () => {
   commentler.innerHTML = "";
   commentsBtn.style.display = "block";
})
//  ------------------------------------dorduncu btn--------------------------------------//

const quotes = document.getElementById("quotes");
const gameBtn = document.getElementById("gameBtn");
const endpointss = "https://dummyjson.com/quotes";

let quotesArr = [];
let isOpen = false;

axios.get(endpointss).then((response)=>{
    if(response.status === 200){
        quotesArr = response.data.quotes;
    }
})
gameBtn.addEventListener("click", () => {
    if (!isOpen) {
        const randomIndex = Math.floor(Math.random() * quotesArr.length);
        const randomQuote = quotesArr[randomIndex];

        quotes.innerHTML = `
            <div class="quote">
                <p>${randomQuote.quote}</p>
                <p class="author">${randomQuote.author}</p>
            </div>
        `;

        quotes.classList.add("active");
        isOpen = true;
    } else {
        quotes.innerHTML = "";
        quotes.classList.remove("active");
        isOpen = false;
    }
});







