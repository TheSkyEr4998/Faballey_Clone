let data = JSON.parse(localStorage.getItem("proinfo"))

console.log(data)


function displaydata(data)
{
    return(
        ` <div class="firstimage"></div>
        <div class="firstimage"></div>
        <div class="producttext">
            <p class="name">
             White Puff Sleeve Zipped Crop Top
            </p>
          <div style="display: flex;" class="flex21">
             <p class="actualprices">₹ 1200</p>
             <p class="prices">₹ 600</p>
          </div>
          <div class="tax">
              <p>Inclusive of all taxes</p>
          </div>
 
          <div class="size">SIZE :</div>
          <div style="display: flex;" class="flex22">
             <div class="xs">
                 <p>XS</p>
             </div> 
             <div style="margin-left:1vw" class="xs">
                 <p>S</p>
             </div>
             <div style="margin-left:1vw"  class="xs">
                 <p>L</p>
             </div> 
             <div style="margin-left:1vw"  class="xs">
                 <p>XL</p>
             </div>    
             <div style="margin-left:1vw"  class="xs">
                 <p>M</p>
             </div>  
         </div>
         <button class="addtocart">
             ADD TO BAG
         </button>
         <button class="addtowish">
             ADD TO WISHLIST
         </button>
        </div>
    `
    )
   
}
console.log(displaydata(data))

let firstimg = document.getElementById("firstimg")
let secondimg = document.getElementById("secondimg")
let price= document.getElementById("price")
price.innerHTML = "₹ " +  data.price
let actulprice= document.getElementById("actulprice")
actulprice.innerHTML = "₹ "+ data.actualprice

firstimg.src = data.image
secondimg.src = data.hoverimg

let names = document.getElementById("name")
names.innerHTML = data.title

async function addto(){
    try {
     let res1=await fetch("http://localhost:3000/cartes",{
         method:"POST",
         body:JSON.stringify(data),
         headers:{
             "Content-Type":"application/json"
         }
     });
     let dataes=await res1.json();
     console.log(dataes)
     
    
   
    } catch (error) {
        console.log(error)
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
