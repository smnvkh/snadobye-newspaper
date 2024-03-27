document.addEventListener('DOMContentLoaded', () => {

    // перемещение цветов и грибов 

    let draggables = document.querySelectorAll(".draggable");

    // Loop over the collection
    draggables.forEach(function(el){
    dragElement(el);
    });

    function dragElement(elmnt) {
      var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
      if (document.getElementById(elmnt.id)) {
        // if present, the header is where you move the DIV from:
        document.getElementById(elmnt.id).onmousedown = dragMouseDown;
      } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
      }
    
      function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
      }
    
      function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
      }
    
      function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
      }
    }

    // искры из котла
    
    const pot = document.querySelector('.pot');
    const pot_img = document.querySelector('.pot_img');

    pot.addEventListener('click', () => {
      const stars = document.createElement ('div')
      stars.classList.add('greenstars')
      stars.innerHTML = '<img src="images/stars.svg">'

      pot_img.appendChild(stars)
      setTimeout (() => {
        stars.remove()
      }, 600)
    })

    // модальное окно для левой бутылки 

    var modal = document.getElementById("first_modal");
    var btn = document.getElementById("left_potion");
    var span = document.getElementsByClassName("close")[0];

    btn.onclick = function() {
      modal.style.display = "block";

      btn.onclick = function() {
        modal.style.display = "block";
      }

      span.onclick = function() {
        modal.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal) {
          modal.style.display = "none";
        }
      }
    }

    // модальное окно для центральной бутылки 

    var modal2 = document.getElementById("second_modal");
    var btn2 = document.getElementById("mid_potion");
    var span2 = document.getElementsByClassName("close_second")[0];

    btn2.onclick = function() {
      modal2.style.display = "block";

      btn2.onclick = function() {
        modal2.style.display = "block";
      }

      span2.onclick = function() {
        modal2.style.display = "none";
      }

      window.onclick = function(event) {
        if (event.target == modal2) {
          modal2.style.display = "none";
        }
      }
    }

        // модальное окно для центральной бутылки 

        var modal3 = document.getElementById("third_modal");
        var btn3 = document.getElementById("right_potion");
        var span3 = document.getElementsByClassName("close_third")[0];
    
        btn3.onclick = function() {
          modal3.style.display = "block";
    
          btn3.onclick = function() {
            modal3.style.display = "block";
          }
    
          span3.onclick = function() {
            modal3.style.display = "none";
          }
    
          window.onclick = function(event) {
            if (event.target == modal3) {
              modal3.style.display = "none";
            }
          }
        }
})

    // рука поднимает рюмку 

    function animation() {
      let hand = document.querySelector('.stars_hand');
      hand.addEventListener('click', animationStart);
    }
    
    function animationStart() {
      let hand = document.querySelector('.hand');
      hand.classList.remove('hand');
      setTimeout(() => {
        hand.classList.add('handAnimation');
      }, 0);
    }

    function animationStart() {
      let hand = document.querySelector('.glass');
      hand.classList.remove('glass');
      setTimeout(() => {
        hand.classList.add('glassAnimation');
      }, 0);
    }
    
    document.addEventListener('DOMContentLoaded', () => {
      animation();
    });

