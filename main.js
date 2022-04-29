function myFunction() {
    let i = document.getElementById("myNavList");
    if (i.className === "navlist") {
      i.className += " responsive";
    } else {
      i.className = "navlist";
    }
  }


  const form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      const status = document.getElementById("my-form-status");
      const data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          status.innerHTML = "Thanks for your submission!";
          form.reset()
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
            } else {
              status.innerHTML = "Oops! There was a problem submitting your form"
            }
          })
        }
      }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form"
      });
    }
    form.addEventListener("submit", handleSubmit)


const quotesUrl1 = "https://quotes.rest/qod";

$.ajax({
    method: "get",
    url: quotesUrl1,
    // mode: "random"
})
.then(function(response) {
    console.log('success')
    console.log(response)
    let quote = response.contents.quotes[0].quote;
    console.log(quote);
    let author = response.contents.quotes[0].author;
    console.log(author);
    $('#quote').text(`${quote}-${author}`);
})

.catch(function() {
    console.log('error')
    console.log(response)
   })