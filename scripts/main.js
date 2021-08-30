// let items = document.querySelectorAll(".carousel .carousel-item");

// items.forEach((el) => {
//   const minPerSlide = 3;
//   let next = el.nextElementSibling;
//   for (var i = 1; i < minPerSlide; i++) {
//     if (!next) {
//       // wrap carousel by using first child

//       next = items[0];
//     }
//     let cloneChild = next.cloneNode(true);
//     el.appendChild(cloneChild.children[0]);
//     next = next.nextElementSibling;
//   }
// });

$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    rtl: true,
    margin: 24,
    loop: true,
    autoplay: false,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  });
});
