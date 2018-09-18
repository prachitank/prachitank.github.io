  window.onscroll = function() {myFunction()};

  var header = document.getElementById("myHeader");
  var sticky = header.offsetTop;

  //To get the parent element of navigation
  var myList = document.getElementById("myList");

  //Creating a new list item
  let newListItem = document.createElement('li');
  newListItem.textContent = 'Prachi Tank';
  newListItem.classList.add("right-name");

  //Reference for the new list item
  //document.getElementById("myDIV").classList.add("mystyle");

  //To change color 
  //var full-stop = document.getElementById("color-change").style.color;

  function myFunction() {
    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
      //Adding 'Prachi Tank' before work and about
      //myList.insertBefore(newListItem, myList.childNodes[0]);

      //Adding 'Prachi Tank' on the far right in the ul
      myList.appendChild(newListItem); 

      //Adding 'Prachi Tank' on the far right using a new ul

    } else {
      header.classList.remove("sticky");
      myList.removeChild(newListItem)
    }
  }