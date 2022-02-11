// const btn = document.getElementById('btn')

// btn.addEventListener('click', () => {
//     document.getElementById('header').innerHTML = "looking good"
//     document.querySelector('.para1').innerHTML = "wonderful"
// })
const para1 = document.querySelector('.para1')
const header = document.getElementById('header')
const trans = document.getElementById('trans')
const ul = document.getElementById('ul')

const changeImg1 = document.getElementById('changeImg1')
const changeImg2 = document.getElementById('changeImg2')
const imges = document.getElementById('imges')
const stylechange = document.getElementById('stylechange')
const pp1 = document.getElementById('pp1')
const pp2 = document.getElementById('pp2')
const pp3 = document.getElementById('pp3')
const arit = document.getElementById('arit')

let z, y = 10, x = 5

const interTime = () => {
    setTimeout(() => {
        imges.src="../images/Dock.jpg"
    }, 5000);
}
changeImg1.addEventListener('click', () => {
    imges.src="../images/Fire-Wallpaper.jpg"
    interTime()
})

changeImg2.addEventListener('click', () => {
    imges.src="../images/flowers-wallpaper-13.jpg"
    interTime()
})

const press = () => {
    para1.innerHTML = "this is working"
}

stylechange.addEventListener('click', () => {
    header.style.fontSize = "45px"
    header.style.border = "5px solid red"
    header.style.padding = "11px"
    if(header.style.padding === '10px'){
        header.style.display = "none"
        setTimeout(() => {
            header.style.display = "block"
        }, 2000);
    }else{
        header.style.background = 'black'
        header.style.color = '#fff'

        setTimeout(() => {
            header.style.height = '300px'
            header.style.width = '90%'
            header.style.transform = "rotate(360deg)"
            window.print()
        }, 3000)
    }
})

const car =  true

const repation = (Time) => {
    if(!car){
        alert('omo car no dey')
    }else{
        setTimeout(() => {
            trans.style.transform = "rotateZ(360deg)"
            // trans.style.transform = "scaleY(0.5)"
            // trans.style.transform = "skew(20deg, 10deg)"
            // trans.style.transform = "matrix(1.2, -0.3, 0.5, 1, 1.3, 1.3)"
        }, Time)
    }
}


const transbtn1 = () => {
    // trans.style.transform = 'translate(100px, 50px)'
    const numTime = 2000
    repation(numTime)
    z = (x + y) * x
    para1.innerHTML = z + r
}

var r = 2

// array
const foods = ['rice', 'beans', 'yam', 'noodles', 'soup']
const people = {person1 :'rice', person2: 'beans', person3: 'yam', person4: 'noodles', person5: 'soup'}


const addFood = () => {
    foods[0] = 'banana'
    foods.push('badGrape')
    people.person1 = "rapoo"
    people.person6 = "working"
    
    setTimeout(() => {
        pp1.innerHTML = people.person1
        pp2.innerHTML = people.person2
        pp3.innerHTML = people.person6
        foods.map(food => (
            ul.innerHTML += `<li>${food}</li>`
        ))
    }, 2000)
}

const arima = () => {
    let x = 15, y = '15'
    x--
    let z = x
    // x **= y
    arit.innerHTML = typeof z
    // x == y || x === y ? alert('welcome papa') : alert('get out papa')
}
