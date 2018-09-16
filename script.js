  window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  //To get the parent element of navigation
  var myList = document.getElementById("myList");

  //Creating a new list item
  let newListItem = document.createElement('li');
  newListItem.textContent = 'Prachi Tank';

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      myList.insertBefore(newListItem, myList.childNodes[0]);
    } else {
      header.classList.remove("sticky");
      myList.removeChild(newListItem)
    }
  }