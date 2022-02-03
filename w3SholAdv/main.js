const header = document.getElementById('header')

const myFuntion = (p1, p2) => {
    let dot = p1 + p2
    return dot
}

const person = { 
    firstName: "Rapoo",
    lastName: 'Man', 
    age: 20, 
    eyeColor: 'Blue' 
}

header.innerHTML = `this is okay ${person['firstName']}`