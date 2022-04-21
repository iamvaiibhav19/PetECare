/*==================== SHOW NAVBAR ====================*/
const showMenu = (headerToggle, navbarId) =>{
    const toggleBtn = document.getElementById(headerToggle),
    nav = document.getElementById(navbarId)
    
    // Validate that variables exist
    if(headerToggle && navbarId){
        toggleBtn.addEventListener('click', ()=>{
            // We add the show-menu class to the div tag with the nav__menu class
            nav.classList.toggle('show-menu')
            // change icon
            toggleBtn.classList.toggle('bx-x')
        })
    }
}
showMenu('header-toggle','navbar')

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))


//counter up function
$(document).ready(function(){
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

const dashboardPage = document.getElementById('dashboard');
const AppointmentPage = document.getElementById('Appointment');
const servicesPage = document.getElementById('services');
const petDetailsPage = document.getElementById('pet-details');

const redirectHome = document.getElementById('home');
const appointmentButton = document.getElementById('appoinments');
const petDetailsRedirect = document.getElementById('petDetailsRedirect');
const servicesRedirect = document.getElementById('servicesRedirect');



appointmentButton.addEventListener('click', ()=>{
   console.log('clicked')
    AppointmentPage.style.display = 'block';
    dashboardPage.style.display = 'none';
})


redirectHome.addEventListener('click', ()=>{
    console.log('clicked')
    AppointmentPage.style.display = 'none';
    dashboardPage.style.display = 'block';
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });
});

petDetailsRedirect.addEventListener('click', ()=>{
    console.log('clicked')
    AppointmentPage.style.display = 'none';
    dashboardPage.style.display = 'none';
    petDetailsPage.style.display = 'block';
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000
    // });
});

servicesRedirect.addEventListener('click', ()=>{
    console.log('clicked')
    AppointmentPage.style.display = 'none';
    dashboardPage.style.display = 'none';
    petDetailsPage.style.display = 'none';
    servicesPage.style.display = 'block';
    // $('.counter').counterUp({
    //     delay: 10,
    //     time: 1000
    // });
});

const logout = document.getElementById('logout');
logout.addEventListener('click', ()=>{
    localStorage.removeItem('token');
    
    if(!localStorage.getItem('token')){
        window.location.href = 'http://localhost:5500/loginSignup/index.html';
    }
});