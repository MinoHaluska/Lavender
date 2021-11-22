
// prideli nam class sticky na header, vyzdy ked trochu zoskrolujeme
// a ked videme nahor na 0 tak ho odobere
window.addEventListener('scroll', function(){
    const header = this.document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
})

// Vyskakovacie menu
function toggleMenu(){
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation')
    menuToggle.classList.toggle('active');
    navigation.classList.toggle('active');

}


const home = document.getElementById('navHome');
home.addEventListener('click', function(){
    let scroll0 = document.getElementById('banner').offsetTop;
    window.scrollTo({
        top: scroll0
    })
})

const about = document.getElementById('navAbout');
about.addEventListener('click', function(){
    let scroll1 = document.getElementById('about').offsetTop;
    window.scrollTo({
        top: scroll1
    })
})


const menu = document.getElementById('navMenu');
menu.addEventListener('click', function(){
    let scroll2 = document.getElementById('menu').offsetTop;
    window.scrollTo({
        top: scroll2
    })
})

const expert = document.getElementById('navExpert');
expert.addEventListener('click', ()=>{
    let scroll3 = document.getElementById('expert').offsetTop;
    window.scrollTo({
        top: scroll3
    })
})

const testimonials = document.getElementById('navTestimonials');
testimonials.addEventListener('click', ()=>{
    let scroll4 = document.getElementById('testimonials').offsetTop;
    window.scrollTo({
        top: scroll4
    })
})

const contact = document.getElementById('nacContact');
contact.addEventListener('click', ()=>{
    let scroll5 = document.getElementById('contact').offsetTop;
    window.scrollTo({
        top: scroll5
    })
})

const jumpMenu = document.getElementById('jumpMenu');
jumpMenu.addEventListener('click', ()=>{
    let scroll6 = document.getElementById('menu').offsetTop;
    window.scrollTo({
        top: scroll6
    })
})
