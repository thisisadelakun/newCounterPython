
// const hasClass = document.querySelector('h2')
// hasClass.style.color = 'red'

// let btn = document.querySelector('.btn-group')
// let para = document.querySelector(`h2`)
// para.innerText = 'Adelakun'

// function changePara(){
//     let hasClass = para.classList.contains(para.innerText = 'Counter')
//     if(hasClass){
//         para.classList.remove(para.innerText = 'Adelakun')
//     }else{
//         para.classList.add(para.innerText = 'Adelakun')
//     }
// }
// btn.addEventListener('click', changePara)


// let btn = document.querySelector('.inc')

// function colored (){
//     let body = document.body
//     body.style.backgroundColor  = 'brown'
// }

// btn.addEventListener('click',colored)

let heading = document.querySelector('h1')
let inc = document.querySelector('.inc') 
let res = document.querySelector('.res') 
let dec = document.querySelector('.dec') 

function DECREASE (){
    heading.innerText--
}
dec.addEventListener('click', DECREASE)

function INCREASE (){
    heading.innerText++
}
inc.addEventListener('click',INCREASE)

function RESET (){
    heading.innerText = 0
}
res.addEventListener('click',RESET)