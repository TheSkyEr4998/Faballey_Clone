
window.addEventListener("scroll" , function(){
    var header = document.querySelector(".navbar")
    header.classList.toggle("sticky",window.scrollY > 0);
})

async function fetchproductdata(){
    try {
        let id=JSON.parse(localStorage.getItem("product_id"));
        let response =await fetch(`http://localhost:3000/topsdata/${id}`)
        let res=await response.json();
        console.log(res);
        displaydata(res);
    } catch (error) {
        console.log(error)
    }
}
fetchproductdata();

function displaydata(res){
    let{id,product_name,image_url,price,striked_price,offer}=res;
    let leftbox=document.querySelector("#mdlleft");
    let rightbox1=document.querySelector("#mdlright1");
    leftbox.innerHTML="";
    let leftboxheading=document.createElement("p");
    leftboxheading.innerText=`HOME | TOPS | ${product_name}`;
    let card=document.createElement("div");
    image_url.forEach((image)=>{
      let image1=document.createElement("img");
      image1.src=image;
      card.append(image1);
    })
    leftbox.append(leftboxheading,card);
    let rightcard=document.createElement("div");
    let rightproduct_name=document.createElement("h1");
    rightproduct_name.style="font-size:20px;font-weight:600;text-transform:none;margin-bottom:8px;font-family:san-serif,arial"
    rightproduct_name.innerText=product_name;
    let r1=document.createElement("h4");
    r1.innerHTML='<i class="fa-solid fa-indian-rupee-sign"></i>'
    r1.style="font-style:22px;font-weight:700;display:inline;font-family:san-serif,arial"
    let striked=document.createElement("h4");
    striked.innerText=striked_price;
    striked.style="font-style:20px;font-weight:700;display:inline;text-decoration:line-through;color:#000;font-family:san-serif,arial"
    let r2=document.createElement("h4");
    r2.innerHTML='<i class="fa-solid fa-indian-rupee-sign"></i>'
    r2.style="font-style:22px;font-weight:700;color:#fc6486;margin-left:4px;display:inline;font-family:san-serif,arial";
    let price1=document.createElement("h4");
    price1.innerText=price;
    price1.style="font-style:22px;font-weight:700;color:#fc6486;display:inline;font-family:san-serif,arial";
    let discount=document.createElement("c");
    discount.innerText=`(${offer} OFF)`;
    discount.style="margin-left:20px;color:#000;font-size:11px;font-weight:700;"
    let taxinclusive=document.createElement("p");
    taxinclusive.innerText=`Inclusive of all taxes`;
    taxinclusive.style="display:block;font-size:14px;color:#03bb5c;margin-top:5px"
    let sku=document.createElement("p");
    sku.innerText=`SKU:${id}`;
    sku.style="font-size:12px;font-weight:700;margin-top:10px;color:#999;font-family:san-serif,arial"
    rightcard.append(rightproduct_name,r1,striked,r2,price1,discount,taxinclusive,sku);
    rightbox1.append(rightcard);
    
    
   //#fc6486; 
}


document.querySelector("#desc").addEventListener("click",()=>{
    document.querySelector("#tab-1").style="display:block";
    document.querySelector("#tab-2").style="display:none";
    document.querySelector("#tab-3").style="display:none";
})

document.querySelector("#details").addEventListener("click",()=>{
    document.querySelector("#tab-1").style="display:none";
    document.querySelector("#tab-2").style="display:block";
    document.querySelector("#tab-3").style="display:none";
})

document.querySelector("#shipping").addEventListener("click",()=>{
    document.querySelector("#tab-3").style="display:block";
    document.querySelector("#tab-1").style="display:none";
    document.querySelector("#tab-2").style="display:none";
    
})



// product size


document.querySelector("#xs").addEventListener("click",()=>{
    document.querySelector("#xs").style="background: #323232;color: #fff;"
    document.querySelector("#s").style="background: #fff;color: #323232;"
    document.querySelector("#m").style="background: #fff;color: #323232;"
    document.querySelector("#l").style="background: #fff;color: #323232;"
    document.querySelector("#xl").style="background: #fff;color: #323232;"
    if(localStorage.getItem("product_size")){
        localStorage.removeItem("product_size");
    }
    localStorage.setItem("product_size",JSON.stringify("xs"));

})

document.querySelector("#s").addEventListener("click",()=>{
    document.querySelector("#s").style="background: #323232;color: #fff;"
    document.querySelector("#xs").style="background: #fff;color: #323232;"
    document.querySelector("#m").style="background: #fff;color: #323232;"
    document.querySelector("#l").style="background: #fff;color: #323232;"
    document.querySelector("#xl").style="background: #fff;color: #323232;"
    if(localStorage.getItem("product_size")){
        localStorage.removeItem("product_size");
    }
    localStorage.setItem("product_size",JSON.stringify("s"));

})

document.querySelector("#m").addEventListener("click",()=>{
    document.querySelector("#m").style="background: #323232;color: #fff;"
    document.querySelector("#s").style="background: #fff;color: #323232;"
    document.querySelector("#xs").style="background: #fff;color: #323232;"
    document.querySelector("#l").style="background: #fff;color: #323232;"
    document.querySelector("#xl").style="background: #fff;color: #323232;"
    if(localStorage.getItem("product_size")){
        localStorage.removeItem("product_size");
    }
    localStorage.setItem("product_size",JSON.stringify("m"));

})

document.querySelector("#l").addEventListener("click",()=>{
    document.querySelector("#l").style="background: #323232;color: #fff;"
    document.querySelector("#s").style="background: #fff;color: #323232;"
    document.querySelector("#m").style="background: #fff;color: #323232;"
    document.querySelector("#xs").style="background: #fff;color: #323232;"
    document.querySelector("#xl").style="background: #fff;color: #323232;"
    if(localStorage.getItem("product_size")){
        localStorage.removeItem("product_size");
    }
    localStorage.setItem("product_size",JSON.stringify("l"));

})

document.querySelector("#xl").addEventListener("click",()=>{
    document.querySelector("#xl").style="background: #323232;color: #fff;"
    document.querySelector("#s").style="background: #fff;color: #323232;"
    document.querySelector("#m").style="background: #fff;color: #323232;"
    document.querySelector("#l").style="background: #fff;color: #323232;"
    document.querySelector("#xs").style="background: #fff;color: #323232;"
    if(localStorage.getItem("product_size")){
        localStorage.removeItem("product_size");
    }
    localStorage.setItem("product_size",JSON.stringify("xl"));

})


document.querySelector("#addtobag").addEventListener("click",async (e)=>{
     e.preventDefault();
     setTimeout(test,2000);
    let productid=JSON.parse(localStorage.getItem("product_id"));
    let productsize=JSON.parse(localStorage.getItem("product_size"));
    try {
        let response=await fetch(`http://localhost:3000/topsdata/${productid}`);
        let res=await response.json();
        let prodata={
            "id":res.id,
            "product_name":res.product_name,
            "image_url":res.image_url,
            "price":res.price,
            "striked_price":res.striked_price,
            "offer":res.offer,
            "category":res.category,
            "size":productsize
        }
        addtocart(prodata);
    } catch (error) {
        console.log(error);
    }
})


async function addtocart(prodata){
   try {
    let res1=await fetch("http://localhost:3000/cart",{
        method:"POST",
        body:JSON.stringify(prodata),
        headers:{
            "Content-Type":"application/json"
        }
    });
    let data=await res1.json();
    console.log(data)
    
   
  
   } catch (error) {
       console.log(error)
   }
}
async function test(){

    let res2=await fetch("http://localhost:3000/cart");
    let data2=await res2.json();
    console.log(data2)
    let length=0;
    data2.forEach((ele)=>{
        length++;
    })
    console.log(length);
    document.querySelector("#addtobag").style="background:green"
    document.querySelector(".count").innerText=`${length}`
    alert("Item added to cart successfully");
}


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



// scroller


      let  productContainers = [...document.querySelectorAll('.similarProductsSlider')];
      let nxtBtn = [...document.querySelectorAll('.nxt-btn')];
      let preBtn = [...document.querySelectorAll('.pre-btn')];
      
      productContainers.forEach((item, i) => {
          let containerDimensions = item.getBoundingClientRect();
          let containerWidth = containerDimensions.width;
      
          nxtBtn[i].addEventListener('click', () => {
              item.scrollLeft += containerWidth;
          })
      
          preBtn[i].addEventListener('click', () => {
              item.scrollLeft -= containerWidth;
          })
      })