//Function for hamburger nav bar
const hamburger = document.getElementById("hamburger");
const navUL = document.getElementById("nav-ul");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
});

//Function to activate swiper
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

//Function to submit form and receive confirmation

const form = document.getElementById("my-form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.getElementById("my-form-status");
  const data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => {
      if (response.ok) {
        status.innerHTML = "Thanks for your submission!";
        form.reset();
      } else {
        response.json().then((data) => {
          if (Object.hasOwn(data, "errors")) {
            status.innerHTML = data["errors"]
              .map((error) => error["message"])
              .join(", ");
          } else {
            status.innerHTML = "Oops! There was a problem submitting your form";
          }
        });
      }
    })
    .catch((error) => {
      status.innerHTML = "Oops! There was a problem submitting your form";
    });
}
form.addEventListener("submit", handleSubmit);

//API call to quotes API
const quotesUrl1 = "https://quotes.rest/qod";

$.ajax({
  method: "get",
  url: quotesUrl1,
  // mode: "random"
})
  .then(function (response) {
    console.log("success");
    console.log(response);
    let quote = response.contents.quotes[0].quote;
    console.log(quote);
    let author = response.contents.quotes[0].author;
    console.log(author);
    $("#quote").text(`${quote}-${author}`);
  })

  .catch(function () {
    console.log("error");
    console.log(response);
  });

//API call to unsplash API for background image
const unsplashAccessKey = "sOwYNq8rFvM5SA3eGEcDDmDZ15R020fRZmDly0X4LiY";

$.ajax({
  method: "get",
  url:
    "https://api.unsplash.com/photos/_RuBiodu45k?client_id=" +
    unsplashAccessKey,
})
  .then((response) => {
    $("body").css("background-image", `url("${response.urls.full}")`);
    $("#photoCredit").attr("href", `${response.user.links.html}`);
    $("#photoCredit").html(`photo by ${response.user.name}`);
  })
  .catch(() => {
    console.log("error in unsplash pull request");
  });
