
function openNav1() {
      document.getElementById("mySidenav1").style.width = "80%";
      // document.getElementById("mySidenav1").style.border-right = "5px dashed";
    }

    function closeNav1() {
      document.getElementById("mySidenav1").style.width = "0";
      // document.getElementById("mySidenav1").style.border-right = "0";
    }

    function openNav2() {
      document.getElementById("mySidenav2").style.width = "100%";
    }

    function closeNav2() {
      document.getElementById("mySidenav2").style.width = "0";
    }


    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;                                                        
    var yDown = null;

    function getTouches(evt) {
      return evt.touches ||             // browser API
             evt.originalEvent.touches; // jQuery
    }                                                     

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* left swipe */
                closeNav1() 
            } else {
                /* right swipe */
                closeNav2()
            }                       
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */ 
            } else { 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };