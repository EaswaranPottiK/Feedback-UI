
var emojis = document.querySelectorAll(".rating")
var btn = document.getElementById('btn')
const container = document.getElementById('container');
let selectedRating =""

// console.log("script.js is working fine")
emojis.forEach((emoji)=>{
    emoji.addEventListener('click', (event)=>{
        removeActive();
        selectedRating =
        event.target.innerText || event.target.parentNode.innerText;
        console.log(selectedRating)
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");

    });
});

btn.addEventListener('click',()=>{
    if (selectedRating !== ""){
        container.innerHTML =
        `
        <strong>Thank you! </strong>
        <br><br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>
        `;
    }
})


function removeActive(){
    emojis.forEach((emoji)=>{
        emoji.classList.remove("active")
        emoji.parentElement.classList.remove("active")
    })
}
