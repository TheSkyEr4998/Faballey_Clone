

     var slide = document.getElementById("slider")
    var btn1 = document.getElementById("btn1")
    var btn2 = document.getElementById("btn2")
    var btn3 = document.getElementById("btn3")
    btn1.onclick = function(){
       slide.style.transform= "translateX(0vw)";
        btn1.classList.add("active");
        btn2.classList.remove("active")
        btn3.classList.remove("active")
    }
    btn2.onclick = function(){
        slide.style.transform= "translateX(-100%)";
        btn2.classList.add("active");
        btn1.classList.remove("active")
        btn3.classList.remove("active")

    }
    btn3.onclick = function(){
        slide.style.transform= "translateX(-200%)";
        btn3.classList.add("active");
        btn2.classList.remove("active")
        btn1.classList.remove("active")
    }
  
             
           var i =0 
            
             function slider()
             {
                 
                    if(i == 0 ){
                        slide.style.transform= "translateX(0vw)";
                  btn1.classList.add("active");
               btn2.classList.remove("active")
                btn3.classList.remove("active")
                    i++
                 setTimeout('slider()',5000);

                 }
                 else if(i==1){
                    slide.style.transform= "translateX(-100%)";
        btn2.classList.add("active");
        btn1.classList.remove("active")
        btn3.classList.remove("active")
                    i++
                 setTimeout('slider()',5000);
                 }
                 else if(i==2){
                    slide.style.transform= "translateX(-200%)";
        btn3.classList.add("active");
        btn2.classList.remove("active");
        btn1.classList.remove("active");
                    i=0
                    setTimeout('slider()',5000);
                    

                 }
                 
                
               
                
           }
           function left()
           {
            if(i == 1 ){
                        slide.style.transform= "translateX(-100%)";
                  btn1.classList.add("active");
               btn2.classList.remove("active")
                btn3.classList.remove("active")
                    i++
               

                 }
                 
                 else if(i==0){
                    slide.style.transform= "translateX(-200%)";
        btn3.classList.add("active");
        btn2.classList.remove("active");
        btn1.classList.remove("active");
                  
                   
                    

                 }
                 else if(i==2){
                    slide.style.transform= "translateX(0vw)";
        btn3.classList.add("active");
        btn2.classList.remove("active");
        btn1.classList.remove("active");
                    i=0
                
                    

                 }
           }
           function right()
           {
          
            if(i == 0 ){
                        slide.style.transform= "translateX(0vw)";
                  btn1.classList.add("active");
               btn2.classList.remove("active")
                btn3.classList.remove("active")
                    i++
               

                 }
                  else if(i==1){
                    slide.style.transform= "translateX(-100%)";
        btn2.classList.add("active");
        btn1.classList.remove("active")
        btn3.classList.remove("active")
                    i++
              
                 }
                 else if(i==2){
                    slide.style.transform= "translateX(-200%)";
        btn3.classList.add("active");
        btn2.classList.remove("active");
        btn1.classList.remove("active");
                    i=0
                    setTimeout('right()',4000);
                   
                    

                 }
           
           }

           const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-b')];
const preBtn = [...document.querySelectorAll('#pre-b')];
//let pre = document.getElementById("pre-b")
productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;
  let a= true
    nxtBtn[i].addEventListener('click', () => {
        a= false
        item.scrollLeft += containerWidth- (containerWidth)/2;
        //pre.setAttribute("class","pre1") 
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth - containerWidth/2;
       
    })

    if(a)
    {
     // pre.setAttribute("class","pre") 
    
    }
     
   
     
    

    


})


// var proimg = document.querySelectorAll(".product-thumb")
//           var protitle = document.querySelectorAll(".product-brand")
//            var proprice = document.querySelectorAll(".price")
//             if(localStorage.getItem("addToCart") == null)
//             {
//                 localStorage.setItem("addToCart",JSON.stringify([]))
//             }
//            console.log(proimg)
//            function addto(n)
//            {
//                console.log(proimg[n].src)
//                console.log(protitle[n].innerHTML)
//                console.log(proprice[n].innerHTML)
//                var tem = {
//                    image: proimg[n].src,
//                    title:protitle[n].innerHTML,
//                    price:proprice[n].innerHTML,
//                    hoverimg: proimg[n].src,
//                }
             
//              //  var prodInfo = []
//               // prodInfo = JSON.parse(localStorage.getItem("addToCart"))
//              // prodInfo.push(tem)
//              // console.log(tem)
//               localStorage.setItem("proinfo",JSON.stringify(tem))
//            }



           let productimg = document.getElementById("product-img")
           let productimg1 = document.getElementById("product-img1")
           let productimg2 = document.getElementById("product-img2")
           let productimg3 = document.getElementById("product-img3")
           let productimg4 = document.getElementById("product-img4")
           let productimg5 = document.getElementById("product-img5")
           let productimg6 = document.getElementById("product-img6")
           let productimg7 = document.getElementById("product-img7")
           let productimg8 = document.getElementById("product-img8")
           let productimgs = document.getElementById("product-imgs")
           
          let getlook = document.createElement('button')
          let getlooks = document.createElement('button')
          productimg.onmouseenter = () => {
          
         
            getlook.innerHTML = "GET THE LOOK"
            getlook.setAttribute("class","getthelook")
            productimg.append(getlook)
          }
        productimg.onmouseleave = () => {
           getlook.innerHTML = ""
         }
        



      //    window.addEventListener("scroll" , function(){
      //       var header = document.querySelector(".navbar")
      //       header.classList.toggle("sticky",window.scrollY > 0);
      //   })


      async function test2(){
         let res2=await fetch("http://localhost:3000/cart");
         let data2=await res2.json();
         let length=0;
         data2.forEach((ele)=>{
             length++;
         })
         console.log(length);
         document.querySelector(".count").innerText=`${length}`
     }
     test2();
     