function myFunction() {
    var x = document.getElementById("myNavList");
    if (x.className === "navlist") {
      x.className += " responsive";
    } else {
      x.className = "navlist";
    }
  }