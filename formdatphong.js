let navbar = document.querySelector('.header .navbar');

document.querySelector('#menu-btn').onclick = () => {
   navbar.classList.toggle('active');
}

window.onscroll = () => {
   navbar.classList.remove('active');
}

document.querySelectorAll('.contact .row .faq .box h3').forEach(faqBox => {
   faqBox.onclick = () => {
      faqBox.parentElement.classList.toggle('active');
   }
});

// phần hình ảnh di chuyển có 2 button prev và next
var swiper = new Swiper(".home-slider", {
   loop: true,
   effect: "coverflow",
   spaceBetween: 30,
   grabCursor: true,
   coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: false,
   },
   navigation: {
     nextEl: ".swiper-button-next",
     prevEl: ".swiper-button-prev",
   },
});

// phần hình ảnh di chuyển ở mục gallery
var swiper = new Swiper(".gallery-slider", {
   loop: true,
   effect: "coverflow",
   slidesPerView: "auto",
   centeredSlides: true,
   grabCursor: true,
   coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
   },
   pagination: {     //phân trang 
      el: ".swiper-pagination",
   },
});

var swiper = new Swiper(".reviews-slider", {
   loop: true,
   slidesPerView: "auto",
   grabCursor: true,
   spaceBetween: 30,
   pagination: {
      el: ".swiper-pagination",
   },
   breakpoints: {
      768: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 2,
      },
   },
});

function sendMail(){

   var params = {
      name: document.getElementById("cus_name").value,
      email_id: document.getElementById("email_id").value,
      phone_number: document.getElementById("phone_number").value,
      checkin_date: document.getElementById("checkin_date").value,
      checkout_date: document.getElementById("checkout_date").value,
      amount_1: document.getElementById("amount_1").value,
      amount_2: document.getElementById("amount_2").value,
      rooms: document.getElementById("rooms").value,
      type: document.getElementById("type").value
   }

   const serviceID = "service_uxz0f16";
   const templateID = "template_5rsl2hj";

   emailjs.send(serviceID, templateID, params).then(function(res) {
   alert("Success! Thank you for your reservation "+ res.status);
   })
}
