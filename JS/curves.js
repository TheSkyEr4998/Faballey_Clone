
import navBar from "./components/navBar.js";
import footer from "./components/footer.js";
let navBarDiv=document.getElementById("navBar");
navBarDiv.innerHTML=navBar();
let footerDiv=document.getElementById("footer");
footerDiv.innerHTML=footer();
let url="http://localhost:3000/curvesData";
let data= await getData(url);
let container=document.getElementById("productContainer");
displayData(data,container); 
//function to fetch data from the server. 
async function getData(url)
{
    try 
    {
        let res=await fetch(url);
        let data=await res.json();
        return data;
    } 
    catch (error) 
    {
        console.log(error);
    }
}
//function to display the data to the container
function displayData(data,container)
{
    container.innerHTML="";
    data.forEach(element => {
        let productCard=document.createElement('div');
        let productImg=document.createElement('img');
        productImg.src=element.image_url[0];
        
        productImg.addEventListener('mouseenter',function()
        {
            productImg.src=element.image_url[1];
        })
        productImg.addEventListener('mouseleave',function()
        {
            productImg.src=element.image_url[0];
        })
        let discountDiv=document.createElement('div');
        discountDiv.textContent=element.discount+"% OFF";
        discountDiv.style.backgroundColor="rgb(80, 74, 74)";
        discountDiv.style.color="white";
        discountDiv.style.width="40px";
        discountDiv.style.height="40px";
        discountDiv.style.borderRadius="50%";
        discountDiv.style.textAlign="center";
        discountDiv.style.position="absolute";
        discountDiv.style.marginLeft="17%";
        discountDiv.style.marginTop="0.5%";
        discountDiv.style.fontSize="12px"
        let productName=document.createElement('h4');
        productName.textContent=element.product_name;
        let productPrice=document.createElement('p');
        productPrice.textContent="₹ " +element.price;
        productPrice.style.textDecoration="line-through";
        productPrice.style.display="inline";
        let discountPrice=document.createElement('p');
        discountPrice.textContent="₹ " +Math.ceil(element.price*(1-element.discount/100));
        discountPrice.style.fontWeight="500";
        discountPrice.style.display="inline";
        discountPrice.style.marginRight="10px";
        discountPrice.style.color="#ffa2b6";
        productCard.classList.add("products");
        productCard.append(discountDiv,productImg,productName,discountPrice,productPrice);
        container.append(productCard);
        productCard.style.cursor="pointer";
        productCard.addEventListener('click',function()
        {   localStorage.removeItem('checkoutId');
            if(localStorage.getItem('checkoutId')==null)
            {
                let checkoutId=[];
                checkoutId.push(element.id);
                localStorage.setItem('pageName',"curvesData");
                localStorage.setItem('checkoutId',JSON.stringify(checkoutId));
                window.location.href="../HTML/checkoutPage.html";
            }
        });
    });
}
// Double click to make the display none of options container
document.getElementById("rightContainer").addEventListener('dblclick',function()
{
    for(let j=0;j<document.querySelectorAll(".options").length;j++)
    {
        document.querySelectorAll(".optionsContent")[j].style.display="none";
    } 
});

let options=document.querySelectorAll(".options");
let optionsContent=document.querySelectorAll(".optionsContent");
for( let k=0;k<options.length;k++)
{
    options[k].addEventListener('click',function()
    {  
        if(optionsContent[k].style.display=="block")
        {
            optionsContent[k].style.display="none";
            document.querySelectorAll(".right_arrow")[k].style.transform="none";  
        }
        else
        {
        optionsContent[k].style.display="block";
        document.querySelectorAll(".right_arrow")[k].style.transform="rotate(90deg)";

        }
    });
}
// Implementing the filter functionality
let filterOptions=document.querySelectorAll(".filterOptions");
for(let i=0;i<filterOptions.length;i++)
{   
    if(i==0)
    {
        filterOptions[i].addEventListener('change',async function()
        {   
            let filterOptionsValue=filterOptions[i].value;
            console.log(filterOptionsValue);
            let url="http://localhost:3000/curvesData";
            let data=await getData(url);
            let curveData=data.filter((element)=>{
                return element.Size==filterOptionsValue;
            });
            let container=document.getElementById("productContainer");
            displayData(curveData,container);
            
        });
    }
    else if(i==1)
    {
        filterOptions[i].addEventListener('change',async function()
        {   
            let filterOptionsValue=filterOptions[i].value;
            console.log(filterOptionsValue);
            let url="http://localhost:3000/curvesData";
            let data=await getData(url);
            console.log(data)
            let curveData=data.filter((element)=>{
                return element.Color==filterOptionsValue;
            });
            console.log(curveData)
            let container=document.getElementById("productContainer");
            displayData(curveData,container);
            
        });
    }
    else if(i==2)
    {
        filterOptions[i].addEventListener('change',async function()
        {   
            let filterOptionsValue=filterOptions[i].value;
            console.log(filterOptionsValue);
            let url="http://localhost:3000/curvesData";
            let data=await getData(url);
            let curveData=data.filter((element)=>{
                return element.Occasion==filterOptionsValue;
            });
            let container=document.getElementById("productContainer");
            displayData(curveData,container);
            
        });
    }
    else if(i==3)
    {
        filterOptions[i].addEventListener('change',async function()
        {   
            let filterOptionsValue=filterOptions[i].value;
            console.log(filterOptionsValue);
            let url="http://localhost:3000/curvesData";
            let data=await getData(url);
            let curveData=data.filter((element)=>{
                return element.Material==filterOptionsValue;
            });
            let container=document.getElementById("productContainer");
            displayData(curveData,container);
            
        });
    }
    else if(i==4)
    {
        filterOptions[i].addEventListener('change',async function()
        {   
            let filterOptionsValue=filterOptions[i].value;
            console.log(filterOptionsValue);
            let url="http://localhost:3000/curvesData";
            let data=await getData(url);
            let curveData=data.filter((element)=>{
                return element.Pattern==filterOptionsValue;
            });
            let container=document.getElementById("productContainer");
            displayData(curveData,container);
            
        });
    }
    else if(i==5)
    {
        filterOptions[i].addEventListener('change',async function()
        {   
            let filterOptionsValue=filterOptions[i].value;
            console.log(filterOptionsValue);
            let url="http://localhost:3000/curvesData";
            let data=await getData(url);
            let curveData=data.filter((element)=>{
                return element.Trend==filterOptionsValue;
            });
            let container=document.getElementById("productContainer");
            displayData(curveData,container);
            
        });
    }
    else if(i==6)
    {
        filterOptions[i].addEventListener('change',async function()
        {   
            let filterOptionsValue=filterOptions[i].value;
            console.log(filterOptionsValue);
            let url="http://localhost:3000/curvesData";
            let data=await getData(url);
            let curveData=data.filter((element)=>{
                return element.discount>=filterOptionsValue;
            });
            let container=document.getElementById("productContainer");
            displayData(curveData,container);
            
        });
    }
    else if(i==7)
    {
        filterOptions[i].addEventListener('change',async function()
        {   
            let filterOptionsValue=filterOptions[i].value;
            console.log(filterOptionsValue);
            let url="http://localhost:3000/curvesData";
            let data=await getData(url);
            let curveData=data.filter((element)=>{
                return element.price>=filterOptionsValue;
            });
            let container=document.getElementById("productContainer");
            displayData(curveData,container);
            
        });
    }
}
//Implementing the sort functionality
let sortOptions=document.getElementById("sortOptions");
sortOptions.addEventListener('change', async function()
{
    let sortValue=sortOptions.value;
    if(sortValue=="hightolow")
    {
        let url="http://localhost:3000/curvesData";
        let data=await getData(url);
        let curveData=data.sort((a,b)=>{
            return Math.ceil(b.price*(1-b.discount/100))-Math.ceil(a.price*(1-a.discount/100));
        });
        let container=document.getElementById("productContainer");
        displayData(curveData,container);  
    }
    else if(sortValue=="lowtohigh")
    {
        let url="http://localhost:3000/curvesData";
        let data=await getData(url);
        let curveData=data.sort((a,b)=>{
            return Math.ceil(a.price*(1-a.discount/100))-Math.ceil(b.price*(1-b.discount/100));
        });
        let container=document.getElementById("productContainer");
        displayData(curveData,container); 
    }
});
url="http://localhost:3000/cart"; 
data=await getData(url);
let count=data.length;
console.log(count);
let cartCount=document.querySelector(".count");
cartCount.textContent=count;
