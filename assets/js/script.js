(function () {
   'use strict';

   $(".slider-carousel").owlCarousel({
      autoplay: false,
      autoplayHoverPause: true,
      items: 1,
      margin: 100,
      stagePadding: 0,
      nav: true,
      dots: false,
      loop: true,
   });

   $(".featured-carousel").owlCarousel({
      autoplay: false,
      autoplayHoverPause: true,
      items: 5,
      margin: 30,
      stagePadding: 0,
      nav: true,
      dots: false,
      loop: true,
      responsive: {
         0: {
            items: 1
          },
          576: {
            items: 2
          },
          768: {
            items: 3
          },
          992: {
            items: 4
          },
          1200: {
             items: 5
          }
      }
   });

   $(".children-carousel").owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      autoplaySpeed:1000,
      items: 1,
      margin: 30,
      stagePadding: 0,
      nav: true,
      dots: false,
      loop: true,
   });

   $(".coming-carousel").owlCarousel({
      autoplay: false,
      autoplayHoverPause: true,
      items: 3,
      stagePadding: 0,
      loop: true,
      responsive: {
         0: {
            items: 2,
            margin: 5
          },
          576: {
            items: 3,
            margin: 15
          },
          768: {
            items: 3,
            margin: 5
          },
          992: {
            items: 3,
            margin: 30
          },

      }
   });

   $(".team-carousel").owlCarousel({
      autoplay: false,
      autoplayHoverPause: true,
      items: 5,
      stagePadding: 0,
      margin: 15,
      loop: true,
      dots: true,
      responsive: {
         0: {
            items: 2
          },
          576: {
            items: 3
          },
          768: {
            items: 4
          },
          992: {
            items: 4
          },
          1200: {
             items: 5
          }
      }
   });

   $(".shop-single-carousel").owlCarousel({
      singleItem:true,
      navigation : true, // Show next and prev buttons
      slideSpeed : 300,
      paginationSpeed : 400,
   })

   $("#blogSingle").owlCarousel({
      autoplay: true,
      autoplayHoverPause: true,
      autoplaySpeed:1000,
      autoplayTimeout:3000 ,
      smartSpeed:1000,
      // slideSpeed : 10,
      paginationSpeed : 400,
      margin: 30,
      responsive: {
         0: {
            items: 1
          },
          576: {
            items: 2
          },
          768: {
            items: 2,
            margin: 15
          },
          992: {
            items: 3
          },
      }
   })

   $(".shop-single-img").owlCarousel({
      autoplay: false,
      autoplayHoverPause: true,
      autoplaySpeed:1000,
      autoplayTimeout:5000 ,
      items: 1,
      stagePadding: 0,
      nav: false,
      dots: true,
      loop: true,
   });

   // ADD CLASS TO BODY WHEN CLICK THE MENU BUTTON ON MOBILE 
   $('.navbar-toggler').click(function() {
      $('body').toggleClass('js-side-menu-open');
   });

 /** AVOID DROPDOWN MENU CLOSING THE INSIDE ON CLICK  */

   $('.dropdown-submenu').on('click', function(event){
      var events = $._data(document, 'events') || {};
      events = events.click || [];
      for(var i = 0; i < events.length; i++) {
          if(events[i].selector) {
  
              //Check if the clicked element matches the event selector
              if($(event.target).is(events[i].selector)) {
                  events[i].handler.call(event.target, event);
              }
  
              // Check if any of the clicked element parents matches the 
              // delegated event selector (Emulating propagation)
              $(event.target).parents(events[i].selector).each(function(){
                  events[i].handler.call(this, event);
              });
          }
      }
      event.stopPropagation(); //Always stop propagation
  });
})();

/** CHANGE TAB CONTENT WHEN CLICK THE TAB */

const tabs = document.querySelectorAll(".js-tab");
const tabContent = document.querySelectorAll(".js-tab-content");
const releasesTabs = document.querySelectorAll('.js-releases-tab');
const releasesTabContent = document.querySelectorAll('.js-releases-tab-content')

tabs.forEach((tab, i) => {
  tab.addEventListener("click", () => {
    tabContent.forEach(content => content.classList.remove("has-show"));
    tabContent[i].classList.add("has-show");
    tabs.forEach(tab => tab.classList.remove("tab-bottom-arrow"));
    tab.classList.add("tab-bottom-arrow");
  });
});

releasesTabs.forEach((tab, i) => {
   tab.addEventListener('click', () => {
      releasesTabContent.forEach(content => content.classList.remove('has-show'));
      releasesTabContent[i].classList.add('has-show');
      releasesTabs.forEach(tab => tab.classList.remove('is-active'));
      tab.classList.add('is-active')
   })
});

/* SIDEBAR SHOW MORE BUTTON */

// d-none and d-block are bootstrap classes
const moreBtnText = document.querySelectorAll(".toggle-more > span"); // <span>Show more</span>
const moreBtnIcon = document.querySelectorAll(".toggle-more > i"); // <i class="fas fa-plus"></i>

//without if statement console give Cannot read property 'addEventListener' of null at pages which cannot find the id
for(let i=0; i<moreBtnText.length; i++) {
   if(moreBtnText) {
      moreBtnText[i].addEventListener("click", ()=> {
         let content = moreBtnText[i].textContent; //Show more
         let hiddenContent = document.querySelectorAll('#hidden-elements')
            if( content === "Show more" ) {
               moreBtnText[i].textContent = "Show less";
               moreBtnIcon[i].classList.value = "fas fa-minus" //change plus icon to minus
               hiddenContent[i].classList.remove('d-none'); 
               hiddenContent[i].classList.add('d-block');
               // }
            } else {
               moreBtnText[i].textContent = "Show more";
               moreBtnIcon[i].classList.value = "fas fa-plus" //change minus icon to plus
               hiddenContent[i].classList.remove('d-block'); 
               hiddenContent[i].classList.add('d-none');
            }
      })
   }
}

/** PASSWORD CONFIRMATION - account detail */
const newPassword = document.getElementById("newPassword")
const confirmPassword = document.getElementById("confirmPassword");

function validatePassword() {
   confirmPassword.setCustomValidity(newPassword.value != confirmPassword.value ? "Password doesn't match" : '')
}

if(newPassword && confirmPassword) {
   newPassword.addEventListener('change',  validatePassword);
   confirmPassword.addEventListener("keyup", validatePassword);
}
 
