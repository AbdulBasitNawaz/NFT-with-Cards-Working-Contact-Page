/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/* Menu show */
if(navToggle){
   navToggle.addEventListener('click', () =>{
      navMenu.classList.add('show-menu')
   })
}

/* Menu hidden */
if(navClose){
   navClose.addEventListener('click', () =>{
      navMenu.classList.remove('show-menu')
   })
}

let throttleTimeout;
document.addEventListener('mousemove', (event) => {
  clearTimeout(throttleTimeout);

  throttleTimeout = setTimeout(() => {
    const { clientX, clientY } = event;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Calculate colors based on cursor position
    const color1 = `rgba(${(clientX / windowWidth) * 255}, 0, 255, 0.1)`;
    const color2 = `rgba(255, ${(clientY / windowHeight) * 255}, 0, 0.2)`;

    // Update overlay background
    document.querySelector('.overlay').style.background = `
      linear-gradient(145deg, ${color1}, transparent),
      linear-gradient(45deg, ${color2}, transparent)
    `;
  }, 50); // Delay by 50ms (adjust as needed)
});

var typed = new Typed(".auto-typer", {
   strings: ["NFT MARKET", "EXPLORE IT", "TRADE IT", "DRAW IT", " DIGITALIZE IT",],
   typeSpeed: 200,  
   backSpeed: 200, 
   loop: true
});


document.querySelectorAll(".accordion").forEach((accordion) => {
   accordion.addEventListener("click", function () {
     const faq = this.parentElement;
     faq.classList.toggle("active");
 
     const panel = faq.querySelector(".pannel");

     // Avoid recalculating if already expanded/collapsed
     if (faq.classList.contains("active")) {
       panel.style.height = panel.scrollHeight + "px"; // Expand
     } else {
       panel.style.height = 0; // Collapse
     }
   }); // Correct closing of addEventListener
}); // Correct closing of


// Function to validate the contact form before submission
// function validateForm() {
//     // Get values from input fields
//     var name = document.getElementById('name').value;
//     var phone = document.getElementById('phone').value;
//     var email = document.getElementById('email').value;
//     var message = document.getElementById('message').value;

//     // Check if name is empty
//     if (name.trim() == '') {
//         alert('Please enter your name');
//         return false;
//     }

//     // Check if phone number is empty
//     if (phone.trim() == '') {
//         alert('Please enter your phone number');
//         return false;
//     }

//     // Check if email is empty
//     if (email.trim() == '') {
//         alert('Please enter your email');
//         return false;
//     }

//     // Check if message is empty
//     if (message.trim() == '') {
//         alert('Please enter your message');
//         return false;
//     }

//     // All fields are filled, return true for form submission
//     return true;
// }

// Initialize emailjs with your public key
// emailjs.init("NVp4ISpaIIpf6LFLP");

function sendMail(event) {
  event.preventDefault();  // Prevent default form submission

  var templateParams = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("message").value,
  };

  emailjs.send('service_khmmhh9', 'template_cecf2zm', templateParams).then(
    (response) => {
      console.log('SUCCESS!', response.status, response.text);
    },
    (error) => {
      console.log('FAILED...', error);
    }
  );
}

