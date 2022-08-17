     var i = 0;
     var images = [];
     var time = 3500 ;
     images[0] = 'https://img.faballey.com/images/fastore/1.jpg'
     images[1] = 'https://img.faballey.com/images/fastore/2.jpg'
     images[2] = 'https://img.faballey.com/images/fastore/3.jpg'
     images[3] = 'https://img.faballey.com/images/fastore/4.jpg'
     images[4] = 'https://img.faballey.com/images/fastore/5.jpg'
     images[5] = 'https://img.faballey.com/images/fastore/6.jpg'
     images[6] = 'https://img.faballey.com/images/fastore/7.jpg'
     images[7] = 'https://img.faballey.com/images/fastore/8.jpg'
     
     function changeImage(){
         document.slide.src = images[i]
         if ( i< images.length-1){
            i++
         }
         else{
             i = 0
         }
         setTimeout("changeImage()", time);
     }
     window.onload = changeImage;
