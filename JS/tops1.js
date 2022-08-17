
window.addEventListener("scroll" , function(){
    var header = document.querySelector(".navbar")
    header.classList.toggle("sticky",window.scrollY > 0);
})

// fetching and displaying products
async function fetchanddisplay(){
    try {
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        console.log(res);
        displaydata(res);
    } catch (error) {
        console.log(error);
    }
}
fetchanddisplay();
function displaydata(res){
   let productsdisplay=document.querySelector("#productsdisplay");
   productsdisplay.innerHTML="";
   res.forEach((product)=>{
    let {id,product_name,image_url,price,striked_price,offer}=product;
    let card=document.createElement("div");
    let image1=document.createElement("img");
    image1.src=image_url[0];
    // image1.style="position:relative";
    image1.onmouseenter=()=>{
        image1.src=image_url[1];
    }
    image1.onmouseleave=()=>{
        image1.src=image_url[0];
    }
    image1.addEventListener("click",()=>{
        localStorage.removeItem("product_id");
        console.log(id);
        localStorage.setItem("product_id",JSON.stringify(id));
        window.open('./pdescpage.html', '_blank');
    })
    
    let pname=document.createElement("p");
    pname.innerText=product_name;
    pname.style="font-size:14px;font-weight:500"
    
    let price1=document.createElement("c");
    price1.innerText=price;
    price1.style="color:#fc6486;font-size:15px;font-weight:600";
    let p=document.createElement("c");
    p.style="color:#fc6486;font-size:15px;font-weight:600"
    p.innerHTML='<i class="fa-solid fa-indian-rupee-sign"></i>';
    let striked=document.createElement("c");
    striked.innerText=striked_price;
    striked.style="font-size:15px;font-weight:600;text-decoration: line-through;";
    let p1=document.createElement("c");
    p1.style="color:#323232;margin-left:5px;font-size:15px;font-weight:600"
    p1.innerHTML='<i class="fa-solid fa-indian-rupee-sign"></i>';
    card.append(image1,pname,p,price1,p1,striked);
    productsdisplay.append(card);
   })
}

                           // drop down functionality
// tops category dropdown

document.querySelector("#topcatdisplayangle1").addEventListener("click",()=>{
    let res=document.querySelector("#topcatdisplay1").style.display;
    if(res==="block"){
        document.querySelector("#topcatdisplayangle1").setAttribute("class","fa-solid fa-angle-right")
        document.querySelector("#topcatdisplay1").style="display:none"
    }
   else{
    document.querySelector("#topcatdisplayangle1").setAttribute("class","fa-solid fa-angle-down")
    document.querySelector("#topcatdisplay1").style="display:block"
   }
})

        //lounge wear drop down
document.querySelector("#loungewearangle").addEventListener("click",()=>{
    let res=document.querySelector("#loungeweardisplay").style.display;
    if(res==="block"){
        document.querySelector("#loungewearangle").setAttribute("class","fa-solid fa-angle-right")
        document.querySelector("#loungeweardisplay").style="display:none"
    }
   else{
    document.querySelector("#loungewearangle").setAttribute("class","fa-solid fa-angle-down")
    document.querySelector("#loungeweardisplay").style="display:block"
   }
})

         //dresses drop down
document.querySelector("#dressesangle").addEventListener("click",()=>{
    let res=document.querySelector("#dressesdisplay").style.display;
    if(res==="block"){
        document.querySelector("#dressesangle").setAttribute("class","fa-solid fa-angle-right")
        document.querySelector("#dressesdisplay").style="display:none"
    }
   else{
    document.querySelector("#dressesangle").setAttribute("class","fa-solid fa-angle-down")
    document.querySelector("#dressesdisplay").style="display:block"
   }
})

        //skirts dropdown
document.querySelector("#skirtsangle").addEventListener("click",()=>{
    let res=document.querySelector("#skirtsdisplay").style.display;
    if(res==="block"){
        document.querySelector("#skirtsangle").setAttribute("class","fa-solid fa-angle-right")
        document.querySelector("#skirtsdisplay").style="display:none"
    }
   else{
    document.querySelector("#skirtsangle").setAttribute("class","fa-solid fa-angle-down")
    document.querySelector("#skirtsdisplay").style="display:block"
   }
})

     //bottoms dropdown
document.querySelector("#bottomangle").addEventListener("click",()=>{
    let res=document.querySelector("#bottomdisplay").style.display;
    if(res==="block"){
        document.querySelector("#bottomangle").setAttribute("class","fa-solid fa-angle-right")
        document.querySelector("#bottomdisplay").style="display:none"
    }
   else{
    document.querySelector("#bottomangle").setAttribute("class","fa-solid fa-angle-down")
    document.querySelector("#bottomdisplay").style="display:block"
   }
})

  //winter dropdown
document.querySelector("#winterangle").addEventListener("click",()=>{
    let res=document.querySelector("#winterdisplay").style.display;
    if(res==="block"){
        document.querySelector("#winterangle").setAttribute("class","fa-solid fa-angle-right")
        document.querySelector("#winterdisplay").style="display:none"
    }
   else{
    document.querySelector("#winterangle").setAttribute("class","fa-solid fa-angle-down")
    document.querySelector("#winterdisplay").style="display:block"
   }
})

   // size filter dropdown list
document.querySelector("#sizecaret").addEventListener("click",()=>{
    let res=document.querySelector("#sizebox").style.display;
    if(res==="block"){
        document.querySelector("#sizebox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:block"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   
   }
})

    //color filter drop down
document.querySelector("#colorcaret").addEventListener("click",()=>{
    let res=document.querySelector("#colorbox").style.display;
    if(res==="block"){
        document.querySelector("#colorbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:block"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})
    // occasion filter drop down
document.querySelector("#occasioncaret").addEventListener("click",()=>{
    let res=document.querySelector("#occasionbox").style.display;
    if(res==="block"){
        document.querySelector("#occasionbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:block"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})

  //fabric filter drop down
  document.querySelector("#fabriccaret").addEventListener("click",()=>{
    let res=document.querySelector("#fabricbox").style.display;
    if(res==="block"){
        document.querySelector("#fabricbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:block"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})

// pattern filter drop down
document.querySelector("#patterncaret").addEventListener("click",()=>{
    let res=document.querySelector("#patternbox").style.display;
    if(res==="block"){
        document.querySelector("#patternbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:block"
   }
})

//trend filter drop down
document.querySelector("#trendcaret").addEventListener("click",()=>{
    let res=document.querySelector("#trendbox").style.display;
    if(res==="block"){
        document.querySelector("#trendbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:block"
    document.querySelector("#patternbox").style="display:none"
   }
})

//discount filter drop down
document.querySelector("#discountcaret").addEventListener("click",()=>{
    let res=document.querySelector("#discountbox").style.display;
    if(res==="block"){
        document.querySelector("#discountbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:block"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})

//sleeves filter drop down
document.querySelector("#sleevescaret").addEventListener("click",()=>{
    let res=document.querySelector("#sleevesbox").style.display;
    if(res==="block"){
        document.querySelector("#sleevesbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:block"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})

//length filter drop down
document.querySelector("#lengthcaret").addEventListener("click",()=>{
    let res=document.querySelector("#lengthbox").style.display;
    if(res==="block"){
        document.querySelector("#lengthbox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:none"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:block"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})
//price filter drop down
document.querySelector("#pricecaret").addEventListener("click",()=>{
    let res=document.querySelector("#pricebox").style.display;
    if(res==="block"){
        document.querySelector("#pricebox").style="display:none"
    }
   else{
    document.querySelector("#pricebox").style="display:block"
    document.querySelector("#fabricbox").style="display:none"
    document.querySelector("#occasionbox").style="display:none"
    document.querySelector("#colorbox").style="display:none"
    document.querySelector("#sizebox").style="display:none"
    document.querySelector("#lengthbox").style="display:none"
    document.querySelector("#sleevesbox").style="display:none"
    document.querySelector("#discountbox").style="display:none"
    document.querySelector("#trendbox").style="display:none"
    document.querySelector("#patternbox").style="display:none"
   }
})



                           //size filters functionality

//2xl size products
document.querySelector("#size2xl").addEventListener("change",async ()=>{
    console.log("hi");
    if(document.querySelector("#size2xl").checked){
        let response=await fetch("http://localhost:3000/2xl");
        let res=await response.json();
        //console.log(res);
        displaydata(res);
    }
})
//3xl size products
document.querySelector("#size3xl").addEventListener("change",async ()=>{
    console.log("hi");
    if(document.querySelector("#size3xl").checked){
        let response=await fetch("http://localhost:3000/3xl");
        let res=await response.json();
        //console.log(res);
        displaydata(res);
    }
});   
//4xl size products
document.querySelector("#size4xl").addEventListener("change",async ()=>{
    if(document.querySelector("#size4xl").checked){
        let response=await fetch("http://localhost:3000/4xl");
        let res=await response.json();
        displaydata(res);
    }   
})
//l size products
document.querySelector("#sizel").addEventListener("change",async ()=>{
    if(document.querySelector("#sizel").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=l");
        let res=await response.json();
        displaydata(res);
    }   
})
//m size products
document.querySelector("#sizem").addEventListener("change",async ()=>{
    if(document.querySelector("#sizem").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=m");
        let res=await response.json();
        displaydata(res);
    }   
})
//s size products
document.querySelector("#sizes").addEventListener("change",async ()=>{
    if(document.querySelector("#sizes").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=s");
        let res=await response.json();
        displaydata(res);
    }   
})
//xl size products
document.querySelector("#sizexl").addEventListener("change",async ()=>{
    if(document.querySelector("#sizexl").checked){
        let response=await fetch("http://localhost:3000/2xl");
        let res=await response.json();
        //console.log(res);
        displaydata(res);
    }
})

                          // colors filters functionality
//blue color filter
document.querySelector("#bluecolor").addEventListener("change",async ()=>{
    if(document.querySelector("#bluecolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=blue");
        let res=await response.json();
        displaydata(res);
    }   
})
//pink color filter
document.querySelector("#pinkcolor").addEventListener("change",async ()=>{
    if(document.querySelector("#pinkcolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=pink");
        let res=await response.json();
        displaydata(res);
    }   
})
//green color filter
document.querySelector("#greencolor").addEventListener("change",async ()=>{
    if(document.querySelector("#greencolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=green");
        let res=await response.json();
        displaydata(res);
    }   
})
//black color filter
document.querySelector("#blackcolor").addEventListener("change",async ()=>{
    if(document.querySelector("#blackcolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=black");
        let res=await response.json();
        displaydata(res);
    }   
})
//white color filter
document.querySelector("#whitecolor").addEventListener("change",async ()=>{
    if(document.querySelector("#whitecolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=white");
        let res=await response.json();
        displaydata(res);
    }   
})
//maroon color filter
document.querySelector("#marooncolor").addEventListener("change",async ()=>{
    if(document.querySelector("#marooncolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=maroon");
        let res=await response.json();
        displaydata(res);
    }   
})
//yellow color filter
document.querySelector("#yellowcolor").addEventListener("change",async ()=>{
    if(document.querySelector("#yellowcolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=yellow");
        let res=await response.json();
        displaydata(res);
    }   
})
//grey color filter
document.querySelector("#greycolor").addEventListener("change",async ()=>{
    if(document.querySelector("#greycolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=grey");
        let res=await response.json();
        displaydata(res);
    }   
})
//brown color filter
document.querySelector("#browncolor").addEventListener("change",async ()=>{
    if(document.querySelector("#browncolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=brown");
        let res=await response.json();
        displaydata(res);
    }   
})
//beige color filter
document.querySelector("#beigecolor").addEventListener("change",async ()=>{
    if(document.querySelector("#beigecolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=beige");
        let res=await response.json();
        displaydata(res);
    }   
})
//orange color filter
document.querySelector("#orangecolor").addEventListener("change",async ()=>{
    if(document.querySelector("#orangecolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=orange");
        let res=await response.json();
        displaydata(res);
    }   
})
//red color filter
document.querySelector("#redcolor").addEventListener("change",async ()=>{
    if(document.querySelector("#redcolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=red");
        let res=await response.json();
        displaydata(res);
    }   
})
//olive color filter
document.querySelector("#olivecolor").addEventListener("change",async ()=>{
    if(document.querySelector("#olivecolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=olive");
        let res=await response.json();
        displaydata(res);
    }   
})
//peach color filter
document.querySelector("#peachcolor").addEventListener("change",async ()=>{
    if(document.querySelector("#peachcolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=peach");
        let res=await response.json();
        displaydata(res);
    }   
})
//silver color filter
document.querySelector("#silvercolor").addEventListener("change",async ()=>{
    if(document.querySelector("#silvercolor").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=silver");
        let res=await response.json();
        displaydata(res);
    }   
})


                          //occasion filter
//casual wear filter
document.querySelector("#casualwearcheck").addEventListener("change",async ()=>{
    if(document.querySelector("#casualwearcheck").checked){
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        displaydata(res);
    }   
})
//party wear filter
document.querySelector("#partywearcheck").addEventListener("change",async ()=>{
    if(document.querySelector("#partywearcheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?category=party wear");
        let res=await response.json();
        displaydata(res);
    }   
})
//work wear filter
document.querySelector("#workwearcheck").addEventListener("change",async ()=>{
    if(document.querySelector("#workwearcheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?category=work from home");
        let res=await response.json();
        displaydata(res);
    }   
})


                         //fabric filter functionality
//jersey filter
document.querySelector("#jerseycheck").addEventListener("change",async ()=>{
    if(document.querySelector("#jerseycheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=jersey");
        let res=await response.json();
        displaydata(res);
    }   
})
//lace filter
document.querySelector("#lacecheck").addEventListener("change",async ()=>{
    if(document.querySelector("#lacecheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=lace");
        let res=await response.json();
        displaydata(res);
    }   
})
//satin filter
document.querySelector("#satincheck").addEventListener("change",async ()=>{
    if(document.querySelector("#satincheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=satin");
        let res=await response.json();
        displaydata(res);
    }   
})


// pattern filter functionality

//solid filter
document.querySelector("#solidcheck").addEventListener("change",async ()=>{
    if(document.querySelector("#solidcheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=solid");
        let res=await response.json();
        displaydata(res);
    }   
})
//floral filter
document.querySelector("#floralcheck").addEventListener("change",async ()=>{
    if(document.querySelector("#floralcheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=floral");
        let res=await response.json();
        displaydata(res);
    }   
})
//striped filter
document.querySelector("#stripedcheck").addEventListener("change",async ()=>{
    if(document.querySelector("#stripedcheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=striped");
        let res=await response.json();
        displaydata(res);
    }   
})
//embellished filter
document.querySelector("#embellishedcheck").addEventListener("change",async ()=>{
    if(document.querySelector("#embellishedcheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=embellished");
        let res=await response.json();
        displaydata(res);
    }   
})
//polka dots filter
document.querySelector("#polkacheck").addEventListener("change",async ()=>{
    if(document.querySelector("#polkacheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=polka");
        let res=await response.json();
        displaydata(res);
    }   
})
//checked filter
document.querySelector("#checkedcheck").addEventListener("change",async ()=>{
    if(document.querySelector("#checkedcheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=checked");
        let res=await response.json();
        displaydata(res);
    }   
})
//geometric filter
document.querySelector("#geometriccheck").addEventListener("change",async ()=>{
    if(document.querySelector("#geometriccheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=geometric");
        let res=await response.json();
        displaydata(res);
    }   
})
//printed filter
document.querySelector("#printedcheck").addEventListener("change",async ()=>{
    if(document.querySelector("#printedcheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=printed");
        let res=await response.json();
        displaydata(res);
    }   
})



                           // Trend filter
  
   // bell sleeves
   document.querySelector("#bellcheck").addEventListener("change",async ()=>{
    if(document.querySelector("#bellcheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?category=bell sleeves tops");
        let res=await response.json();
        //console.log(res);
       displaydata(res);
    }
  })

  // off shoulder
  document.querySelector("#offshouldercheck").addEventListener("change",async ()=>{
    if(document.querySelector("#offshouldercheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?category=off shoulder tops");
        let res=await response.json();
        //console.log(res);
        displaydata(res);
    }
  })

  //cold shoulder
  document.querySelector("#coldshouldercheck").addEventListener("change",async ()=>{
    if(document.querySelector("#coldshouldercheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?category=tank top");
        let res=await response.json();
        //console.log(res);
        displaydata(res);
    }
  })

  //ruffles
  document.querySelector("#rufflescheck").addEventListener("change",async ()=>{
    if(document.querySelector("#rufflescheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?category=blouses");
        let res=await response.json();
        //console.log(res);
        displaydata(res);
    }
  })




                           // discount filters

// 10 % and more 
document.querySelector("#offermorethan10").addEventListener("change",async ()=>{
    if(document.querySelector("#offermorethan10").checked){
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        //console.log(res);
        let data2=[];
        res.forEach((ele)=>{
           let str=ele.offer;
           let arr=str.trim().split("");
           let str2=arr[0]+arr[1];
           let discount=Number(str2);
           if(discount>=10){
              data2.push(ele);
           }
        })
        displaydata(data2);
    }
})

// 20 % and more 
document.querySelector("#offermorethan20").addEventListener("change",async ()=>{
    if(document.querySelector("#offermorethan20").checked){
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        //console.log(res);
        let data2=[];
        res.forEach((ele)=>{
           let str=ele.offer;
           let arr=str.trim().split("");
           let str2=arr[0]+arr[1];
           let discount=Number(str2);
           if(discount>=20){
              data2.push(ele);
           }
        })
        displaydata(data2);
    }
})

// 30 % and more 
document.querySelector("#offermorethan30").addEventListener("change",async ()=>{
    if(document.querySelector("#offermorethan30").checked){
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        //console.log(res);
        let data2=[];
        res.forEach((ele)=>{
           let str=ele.offer;
           let arr=str.trim().split("");
           let str2=arr[0]+arr[1];
           let discount=Number(str2);
           if(discount>=30){
              data2.push(ele);
           }
        })
        displaydata(data2);
    }
})

// 40 % and more 
document.querySelector("#offermorethan40").addEventListener("change",async ()=>{
    if(document.querySelector("#offermorethan40").checked){
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        //console.log(res);
        let data2=[];
        res.forEach((ele)=>{
           let str=ele.offer;
           let arr=str.trim().split("");
           let str2=arr[0]+arr[1];
           let discount=Number(str2);
           if(discount>=40){
              data2.push(ele);
           }
        })
        displaydata(data2);
    }
})

// 50 % and more 
document.querySelector("#offermorethan50").addEventListener("change",async ()=>{
    if(document.querySelector("#offermorethan50").checked){
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        //console.log(res);
        let data2=[];
        res.forEach((ele)=>{
           let str=ele.offer;
           let arr=str.trim().split("");
           let str2=arr[0]+arr[1];
           let discount=Number(str2);
           if(discount>=50){
              data2.push(ele);
           }
        })
        displaydata(data2);
    }
})

// 60 % and more 
document.querySelector("#offermorethan60").addEventListener("change",async ()=>{
    if(document.querySelector("#offermorethan60").checked){
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        //console.log(res);
        let data2=[];
        res.forEach((ele)=>{
           let str=ele.offer;
           let arr=str.trim().split("");
           let str2=arr[0]+arr[1];
           let discount=Number(str2);
           if(discount>=60){
              data2.push(ele);
           }
        })
        displaydata(data2);
    }
})

// 70 % and more 
document.querySelector("#offermorethan70").addEventListener("change",async ()=>{
    if(document.querySelector("#offermorethan70").checked){
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        //console.log(res);
        let data2=[];
        res.forEach((ele)=>{
           let str=ele.offer;
           let arr=str.trim().split("");
           let str2=arr[0]+arr[1];
           let discount=Number(str2);
           if(discount>=70){
              data2.push(ele);
           }
        })
        displaydata(data2);
    }
})



                               //    sleeves filter

 //short sleeves
 document.querySelector("#shortcheck").addEventListener("change",async ()=>{
    if(document.querySelector("#shortcheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=short");
        let res=await response.json();
        //console.log(res);
        displaydata(res);
    }
  })

  // sleeves
 document.querySelector("#sleevescheck").addEventListener("change",async ()=>{
    if(document.querySelector("#sleevescheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=sleeves");
        let res=await response.json();
        //console.log(res);
        displaydata(res);
    }
  })




                                   // length filter
  // cropcheck
 document.querySelector("#cropcheck").addEventListener("change",async ()=>{
    if(document.querySelector("#cropcheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=crop");
        let res=await response.json();
        //console.log(res);
        displaydata(res);
    }
  })


  // longcheck
 document.querySelector("#longcheck").addEventListener("change",async ()=>{
    if(document.querySelector("#longcheck").checked){
        let response=await fetch("http://localhost:3000/topsdata/?q=long");
        let res=await response.json();
        //console.log(res);
        displaydata(res);
    }
  })


                                     //price filter

 // less than 500 
 document.querySelector("#lessthan500").addEventListener("change",async ()=>{
    if(document.querySelector("#lessthan500").checked){
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        //console.log(res);
        let data=[];
        res.forEach((ele)=>{
            if(ele.price<=500){
                data.push(ele)
            }
        })
        displaydata(data);
    }
  }) 
  
  //range between 501 to 1000
  document.querySelector("#between501to1000").addEventListener("change",async ()=>{
    if(document.querySelector("#between501to1000").checked){
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        //console.log(res);
        let data=[];
        res.forEach((ele)=>{
            if(ele.price>500 && ele.price<=1000){
                data.push(ele)
            }
        })
        displaydata(data);
    }
  }) 

  // range between 1001 to 1500
  document.querySelector("#between1001to1500").addEventListener("change",async ()=>{
    if(document.querySelector("#between1001to1500").checked){
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        //console.log(res);
        let data=[];
        res.forEach((ele)=>{
            if(ele.price>1000 && ele.price<=1500){
                data.push(ele)
            }
        })
        displaydata(data);
    }
  }) 

  //range between 1501 to 2000
  document.querySelector("#between1501to2000").addEventListener("change",async ()=>{
    if(document.querySelector("#between1501to2000").checked){
        let response=await fetch("http://localhost:3000/topsdata");
        let res=await response.json();
        //console.log(res);
        let data=[];
        res.forEach((ele)=>{
            if(ele.price>1500 && ele.price<=2000){
                data.push(ele)
            }
        })
        displaydata(data);
    }
  }) 




                                      //sorting of products

document.querySelector("#sort-by").addEventListener("change",async ()=>{
    let result=document.querySelector("#sort-by").value;
    if(result==="Relevance"){
        try {
            let response=await fetch("http://localhost:3000/topsdata");
            let res=await response.json();
            console.log(res);
            displaydata(res);
        } catch (error) {
            console.log(error);
        }
    }else if(result==="Price:High to Low"){
        try {
            let response=await fetch("http://localhost:3000/topsdata?_sort=price&_order=desc");
            let res=await response.json();
            console.log(res);
            displaydata(res);
        } catch (error) {
            console.log(error);
        }
    }else if(result==="Price:Low to High"){
        try {
            let response=await fetch("http://localhost:3000/topsdata?_sort=price&_order=asc");
            let res=await response.json();
            console.log(res);
            displaydata(res);
        } catch (error) {
            console.log(error);
        }
    }else if(result==="Latest Arrivals"){
        try {
            let response=await fetch("http://localhost:3000/topsdata/?sort-by=new");
            let res=await response.json();
            console.log(res);
            displaydata(res);
        } catch (error) {
            console.log(error);
        }
    }else if(result==="Bestseller"){
        try {
            let response=await fetch("http://localhost:3000/topsdata/?sort-by=bestseller");
            let res=await response.json();
            console.log(res);
            displaydata(res);
        } catch (error) {
            console.log(error);
        }
    }
})


                                       // categories

// tops data
document.querySelector("#tops").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black;"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:#fc6486;"
    let response=await fetch("http://localhost:3000/topsdata");
    let res=await response.json();
    console.log(res);
    displaydata(res);
})


// croptops data
document.querySelector("#croptop").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:#fc6486;"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=crop top");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

// tank tops data
document.querySelector("#tanktop").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:#fc6486;"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=tank top");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})
// T-shirts data
document.querySelector("#tshirt").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:#fc6486;"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=T-shirts");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

// shirts data
document.querySelector("#shirts").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:#fc6486;"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=shirts");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

// blouses data
document.querySelector("#blouses").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:#fc6486;"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=blouses");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

// maxi tops data
document.querySelector("#maxitops").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:#fc6486;"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=maxi tops");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})


//peplum tops data
document.querySelector("#peplumtops").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:#fc6486;"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=peplum top");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})


// cape tops data
document.querySelector("#capetop").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:#fc6486;"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=cape tops");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

// wrap tops data
document.querySelector("#wraptop").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:#fc6486;"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=wrap top");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

// Halter tops data
document.querySelector("#haltertop").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:#fc6486;"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=Halter top");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

// Lace tops data
document.querySelector("#lacetop").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:#fc6486;"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=lace top");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

// cold shoulder tops data
document.querySelector("#coldshoulder").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:#fc6486;"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=tank top");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

// off shoulder data
document.querySelector("#offshoulder").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:#fc6486;"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=off shoulder tops");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

// bell sleeves data
document.querySelector("#bellsleeves").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:#fc6486;"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=bell sleeves tops");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

// Jumpsuits data
document.querySelector("#jumpsuits").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:#fc6486;"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=jumpsuits");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

// work from home collection data
document.querySelector("#workfromhome").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:#fc6486;"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=work from home");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

//party wear data
document.querySelector("#partywear").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:#fc6486;"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=party wear");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

//nab now data
document.querySelector("#nabnow").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:#fc6486;"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=nab now pieces");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

//shorts data
document.querySelector("#shorts").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:#fc6486;"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=shorts");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

//shrugs data
document.querySelector("#shrugs").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:#fc6486;"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata/?category=shrugs");
    let res=await response.json();
    //console.log(res);
    displaydata(res);
})

//under 699 data
document.querySelector("#under699").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:#fc6486;"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata");
    let res=await response.json();
    let data=[];
    res.forEach((ele)=>{
       if(ele.price<=699){
           data.push(ele);
       }
    })
    console.log(data)
    //console.log(res);
     displaydata(data);
})

//under 799 data
document.querySelector("#under799").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:black"
    document.querySelector("#under799").style="color:#fc6486;"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata");
    let res=await response.json();
    let data=[];
    res.forEach((ele)=>{
       if(ele.price<=799){
           data.push(ele);
       }
    })
    console.log(data)
    //console.log(res);
     displaydata(data);
})

//under 999 data
document.querySelector("#under999").addEventListener("click",async ()=>{
    document.querySelector("#under999").style="color:#fc6486;"
    document.querySelector("#under799").style="color:black"
    document.querySelector("#under699").style="color:black"
    document.querySelector("#shrugs").style="color:black"
    document.querySelector("#shorts").style="color:black"
    document.querySelector("#nabnow").style="color:black"
    document.querySelector("#partywear").style="color:black"
    document.querySelector("#workfromhome").style="color:black"
    document.querySelector("#jumpsuits").style="color:black"
    document.querySelector("#bellsleeves").style="color:black"
    document.querySelector("#offshoulder").style="color:black"
    document.querySelector("#coldshoulder").style="color:black"
    document.querySelector("#lacetop").style="color:black"
    document.querySelector("#haltertop").style="color:black"
    document.querySelector("#wraptop").style="color:black"
    document.querySelector("#capetop").style="color:black"
    document.querySelector("#peplumtops").style="color:black"
    document.querySelector("#maxitops").style="color:black"
    document.querySelector("#blouses").style="color:black"
    document.querySelector("#shirts").style="color:black"
    document.querySelector("#tshirt").style="color:black"
    document.querySelector("#tanktop").style="color:black"
    document.querySelector("#croptop").style="color:black"
    document.querySelector("#tops").style="color:black"
    let response=await fetch("http://localhost:3000/topsdata");
    let res=await response.json();
    let data=[];
    let data2=[];
    res.forEach((ele)=>{
       if(ele.price<=999){
           data.push(ele);
       }
    })
     displaydata(data);
})
