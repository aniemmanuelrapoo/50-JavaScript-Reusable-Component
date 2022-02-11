const header = document.getElementById('header')

const myFuntion = (p1, p2) => {
    let dot = p1 + p2
    return dot
}

const person = { 
    firstName: "Rapoo",
    lastName: 'Man', 
    age: 20, 
    eyeColor: 'Blue',
    fullName: function fullName (){
        return `${this.firstName} ${this.lastName}`
    },

}

// header.innerHTML = `this is okay ${person.fullName()}`

const btnClick = document.getElementById('btnClick')

let text = [48, 65, 87, 92]

let text1 = 'the boy is here and the boy is gone'
let textnew = text1.replace(/boy is/g, 'girl was')

btnClick.addEventListener('click', () => {
    header.innerHTML = textnew
})


