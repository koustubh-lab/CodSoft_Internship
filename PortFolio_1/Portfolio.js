let innercircle = document.querySelector('.inner-circle')
let outercircle = document.querySelector('.outer-circle')

window.onmousemove = (e) => {
    let x = e.clientX;
    let y = e.clientY;

    innercircle.style.top = `${y - 7.5}px`;
    innercircle.style.left = `${x - 7.5}px`;

    outercircle.style.top = `${y - 25}px`;
    outercircle.style.left = `${x - 25}px`;

    // let element = document.elementFromPoint(x, y)
    // let elementType = element.tagName.toLowerCase();

    // let elements = ['button', 'a', 'li', 'h1', 'h2', 'img']

    // if (elements.includes(elementType)) {
    //     outercircle.style.width = '50px'
    //     outercircle.style.height = '50px'
    //     outercircle.style.top = `${y - 25}px`;
    //     outercircle.style.left = `${x - 25}px`;
    // } else {
    //     outercircle.style.width = '40px'
    //     outercircle.style.height = '40px'
    //     outercircle.style.top = `${y - 20}px`;
    //     outercircle.style.left = `${x - 20}px`;
    // }
}

window.onscroll = () => {
    if (checkScroll()) {
        upButton.style.display = 'inline-block'
    } else {
        upButton.style.display = 'none'
    }
}
window.onload = () => {
    if (checkScroll()) {
        upButton.style.display = 'inline-block'
    } else {
        upButton.style.display = 'none'
    }
}

let resumebutton = document.querySelector('.buttons button:first-of-type')
resumebutton.addEventListener('mouseover', () => {
    outercircle.style.borderWidth = '3px'
    outercircle.style.display = 'none'
    outercircle.style.borderColor = 'rgb(35, 35, 35)'
    innercircle.style.borderColor = 'rgb(35, 35, 35)'
    innercircle.style.backgroundColor = 'rgb(35, 35, 35)'
})
resumebutton.addEventListener('mouseout', () => {
    outercircle.style.display = 'block'
    outercircle.style.borderWidth = '2px'
    outercircle.style.borderColor = 'white'
    innercircle.style.borderColor = 'white'
    innercircle.style.backgroundColor = 'white'
})

function checkScroll() {
    if (window.scrollY > 10) {
        return true;
    }
    return false;
}

let upButton = document.querySelector('.go-up')
upButton.addEventListener('click', () => {
    window.scrollTo(0,0)
})

let openmenu = document.querySelector('.menu-openbutton')
let closemenu = document.querySelector('.menu-closebutton')
let unlist = document.querySelector('.Navbar ul')
openmenu.addEventListener('click', () => {
    unlist.style.height = '100vh'
    unlist.style.padding = '50px'
})
closemenu.addEventListener('click', () => {
    unlist.style.height = '0'
    unlist.style.padding = '0px'
})