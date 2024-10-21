/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = ()=>{
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () =>{
    const header  = document.getElementById('header')
    this.scrollY >= 50? header.classList.add('bg-header')
                       :header.classList.remove('bg-header')
}
window.addEventListener('scroll',scrollHeader)

/*========= SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SHOW SCROLL UP ===============*/ 


/*=============== SCROLL REVEAL ANIMATION ===============*/


/*=============== CALCULATE JS ===============*/
const calculateFrom= document.getElementById('calculate-form'),
      calculateCm= document.getElementById('calculate-cm'),
      calculateKgs= document.getElementById('calculate-kgs'),
      calculateMessage= document.getElementById('calculate-message')

const calculateBmi= (e) =>{
    e.preventDefault()

    if(calculateCm.value === '' || calculateKgs.value === ''){
        calculateMessage.classList.remove('color-green')
        calculateMessage.classList.add('color-red')

        calculateMessage.textContent= 'Fill in the height and weight !!'

        setTimeout(() =>{
            calculateMessage.textContent=''
        }, 3000)
    } else{
        const cm= calculateCm.value /100,
              kgs= calculateKgs.value,
              bmi=math.round(kgs/(cm*cm)) 

        if(bmi<18.5){
            calculateMessage.classList.add('colour-green')
            calculateMessage.textContent='Your BMI is ${bmi} and your are skinny'
        }
    }
}
calculateFrom.addEventListener('submit', calculateBmi)

/*=============== EMAIL JS ===============*/