'use strict';

const getRandom = function(min, max){
    min = Math.ceil(0);
    max = Math.floor(wordlist.length);
    // console.log(wordlist.length)
    return Math.floor(Math.random() * (max - min ) + min);
};

//get English Div
// console.log(document)
let eng = document.querySelector("#eng")
let engEl = document.createElement("div")
engEl.className = "engword"

//get Japanese Div
let jpn = document.querySelector("#jpn")
let jpnEl = document.createElement("div")
// jpn.append(jpnEl)z
jpnEl.className = "jpnword"

//mousemove
jpn.addEventListener("mouseover",()=>{
    // console.log(e.pageX)//473.721
    // console.log(e.pageY)//243.339
    jpnEl.style.color = "blue"
    // console.log("in")
})
jpn.addEventListener("mouseleave",()=>{
    // console.log("out")
    jpnEl.style.color = "white"
})

//get button
let button = document.getElementById("next")
// console.log(button)

button.addEventListener("click", ()=>{
    const getword = wordlist[getRandom()]

    const getkey = Object.keys(getword)[0]
    engEl.innerText = getkey
    eng.append(engEl)
    

    const getvalue = Object.values(getword)[0]
    jpnEl.innerText = getvalue
    jpn.append(jpnEl)

});



