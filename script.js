document.addEventListener("DOMContentLoaded", () => {
  // document gets loaded and this callback function get called

  // It selects all items with class name ".cart_item" in carts variable
  const carts = document.querySelectorAll(".cart_item");

  // initially "active" class from all of cart's array's item will removed
  carts.forEach(cart => {
    cart.classList.remove('active');
  })

  function setActiveClass() {

    // "active" class from all of cart's array's item will removed
    carts.forEach(cart => cart.classList.remove("active"));
    console.log(Number(this.getAttribute("data-index")));

    // index_scroll variable will have value of data-index, the one which was triggered in Number data-type
    let index_scroll = Number(this.getAttribute("data-index"));

    // This function will make "active" class item visible in center of screen
    function viewInCenterOfScreen() {
      const activeItem = document.querySelector(".cart_item.active");
      if (activeItem) {
        activeItem.scrollIntoView({
          behavior: 'smooth', // Smooth scrolling
          block: 'center',    // Align it vertically in the center
          inline: 'center',   // Align it horizontally if needed
        });
      }
    }

    if (index_scroll === carts.length - 1) {
      // when "mousedown" event triggers in last item of array, then "active" class will be index 0's item.
      carts[0].classList.add("active");
      // calling of function
      viewInCenterOfScreen();
    } else {
      index_scroll = Number(this.getAttribute("data-index"));
      // when "mousedown" event get triggered then next of it's item will get added "active" class
      console.log(carts[index_scroll + 1]);
      carts[index_scroll + 1].classList.add("active");
      viewInCenterOfScreen();
    }
  }

// setActiveClass function is as it is in memory, then below code executes

// Everytime we trigger event "mousedown" to any of carts array item then setActiveClass function will get called.
  carts.forEach(cart => {
    cart.addEventListener("mousedown", setActiveClass);
  });

});

