// const btn = document.getElementById('btn')

// btn.addEventListener('click', () => {
//     document.getElementById('header').innerHTML = "looking good"
//     document.querySelector('.para1').innerHTML = "wonderful"
// })

const header = document.getElementById('header')

const changeImg1 = document.getElementById('changeImg1')
const changeImg2 = document.getElementById('changeImg2')
const imges = document.getElementById('imges')
const stylechange = document.getElementById('stylechange')

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
            header.style.transform = "rotate(180deg)"
        }, 3000)
    }
})

