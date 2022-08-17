window.addEventListener("scroll" , function(){
    var header = document.querySelector(".navbar")
    header.classList.toggle("sticky",window.scrollY > 0);
})
let data;
async function getdata ()
{
    try
    {
       let res = await fetch(`http://localhost:3000/data`)
       let item = await res.json()
    //    console.log(item[0].hoverimg)
    //    item = item.reverse()
       localStorage.setItem("listreversedata",JSON.stringify(item))
       displaydata (item);

    }
    catch(err)
    {
        console.log(err)
    }
}
getdata ()


let container = document.getElementById("container");

//prodcontainer.setAttribute("class","prod-con")

function displaydata (data){
  data.forEach(e => {
      let div = document.createElement("div")
      div.setAttribute("class","inside-container")
      let imagebox = document.createElement('div')
      let img = document.createElement('img')
      img.setAttribute("class","imges")
      img.src = e.actualImg;
      imagebox.setAttribute("class","image-container")
      imagebox.append(img)
      let titles = document.createElement("p")
      titles.innerText= e.heading;
      titles.setAttribute("class","heading")
      let flex = document.createElement('div')
      flex.setAttribute("class","flex-box")
      let price = document.createElement('p')
      price.innerText = "₹" + e.normalPrice; 
      price.setAttribute("class","discount-price")
      let actualprice = document.createElement('p')
      actualprice.innerText = "₹" +  e.originalPrice;
      actualprice.setAttribute("class","actual-price")
      flex.append(price,actualprice)
      div.append(imagebox,titles,flex)
      let divs = document.createElement("div")
      let p = document.createElement('p')
      let discount = document.createElement('div')
      discount.setAttribute("class","discount-container")
      let tag = document.createElement('p')
      tag.setAttribute('class','discount-tag')
      tag.innerHTML = "30% OFF"
      discount.append(tag)

     imagebox.append(discount)

      imagebox.onmouseenter = function()
      {
        
        divs.setAttribute('class','size')
       
        p.innerHTML = "Sizes XS S L XL"
        divs.append(p)
        p.setAttribute('class','sizep')
          img.src= e.hoveringImg
          imagebox.append(divs)
      }
      imagebox.onmouseleave = function()
      {
          img.src= e.actualImg;
          divs.removeChild(p)
          imagebox.removeChild(divs)

      }
      let a =  document.createElement('a')
      a.href = "../HTML/productinfo.html"
      a.append(div)
       div.onclick = function()
       {
           localStorage.setItem("proinfo",JSON.stringify(e))
       }

      container.append(a)
  });
}
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
