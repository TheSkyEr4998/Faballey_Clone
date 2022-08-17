
let data;
let button = document.createElement("button")
async function getdata ()
{
    try
    {
       let res = await fetch(`http://localhost:3000/arrays`)
        data = await res.json()
       console.log(data[0].hoverimg)
       localStorage.setItem("listdata",JSON.stringify(data))
       displaydata (data)
       
      

    }
    catch(err)
    {
        console.log(err)
    }
}
getdata ()



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




     







let sort = document.getElementById("sorting")
let filter = JSON.parse(localStorage.getItem("listdata"))
console.log(filter)



button.onclick = function()
     {
         
        let filter = JSON.parse(localStorage.getItem("listdata"))
        console.log(filter)

        let searchtext = JSON.parse(localStorage.getItem("search"))
        console.log(searchtext)
        
            let dat = filter.filter((ele)=>{
                let title  = ele.title.split(" ")
                title = title[title.length-1]
                console.log(title)
                return  title == searchtext
               
           })
           prodcontainer.innerHTML = ""
           displaydata(dat)
      
        
     }


function filterdata()
{
    if(sort.value == "low")
    {
       let dat =  filter.sort(function(a,b){return a.price - b.price});
       prodcontainer.innerHTML = ""
       displaydata(dat)
    }
    else if (sort.value = "high")
    {
        let dat =  filter.sort(function(a,b){return b.price - a.price});
        prodcontainer.innerHTML = ""
        displaydata(dat)
    }
    else
    {
        prodcontainer.innerHTML = ""
        displaydata(filter)
    }


}

let pricing = document.getElementById("Price")

function filterrupee()
{
    if(pricing.value == "400")
    {
       let dat =  filter.filter(function(ele){return ele.price < 500 });
       prodcontainer.innerHTML = ""
       displaydata(dat)
    }
    else if (pricing.value == "1000")
    {
        let dat =  filter.filter(function(ele){return ele.price > 500 && ele.price <= 1000});
        prodcontainer.innerHTML = ""
        displaydata(dat)
    }
    else if(pricing.value == "1500")
    {
        let dat = filter.filter(function(ele)
        {
            return(ele.price >= 1000)
        })
        prodcontainer.innerHTML = ""
        displaydata(dat)
    }
    else
    {
        prodcontainer.innerHTML = ""
        displaydata(filter)
    }


}





let prodcontainer = document.getElementById("prod-container")
//prodcontainer.setAttribute("class","prod-con")

function displaydata (array)
{
  array.forEach(ele => {
      let div = document.createElement("div")
      div.setAttribute("class","div")
      let imagebox = document.createElement('div')
      let img = document.createElement('img')
      img.setAttribute("class","imges")
      img.src = ele.image
      imagebox.setAttribute("class","conimage")
      imagebox.append(img)
      let titles = document.createElement("p")
      titles.innerText= ele.title
      titles.setAttribute("class","title")
      let flex = document.createElement('div')
      flex.setAttribute("class","flex12")
      let price = document.createElement('p')
      price.innerText = "₹" + ele.price 
      price.setAttribute("class","price")
      let actualprice = document.createElement('p')
      actualprice.innerText = "₹" +  ele.actualprice
      actualprice.setAttribute("class","actualprice")
      flex.append(price,actualprice)
      div.append(imagebox,titles,flex)
      let divs = document.createElement("div")
      let p = document.createElement('p')
      let discount = document.createElement('div')
      discount.setAttribute("class","discount")
      let tag = document.createElement('p')
      tag.setAttribute('class','tag')
      tag.innerHTML = "30% OFF"
      discount.append(tag)

     imagebox.append(discount)

      imagebox.onmouseenter = function()
      {
        
        divs.setAttribute('class','size')
       
        p.innerHTML = "Sizes XS S L XL"
        divs.append(p)
        p.setAttribute('class','sizep')
          img.src= ele.hoverimg
          imagebox.append(divs)
      }
      imagebox.onmouseleave = function()
      {
          img.src= ele.image
          divs.removeChild(p)
          imagebox.removeChild(divs)

      }
      let a =  document.createElement('a')
      a.href = "../HTML/productinfo.html"
      a.append(div)
       div.onclick = function()
       {
           localStorage.setItem("proinfo",JSON.stringify(ele))
       }

      prodcontainer.append(a)
  });
}

let searchicon = document.getElementById("searchicon")
searchicon.onclick = function()
{
    console.log("text")
    let prevent = document.createElement('form')
    let inputs = document.createElement('INPUT')
    inputs.setAttribute("type","text")
   inputs.setAttribute("value","search")
   inputs.setAttribute("event","preventDefault")
   inputs.setAttribute("class","inputs")
    searchicon.innerHTML = " "
    prevent.append(inputs)
    searchicon.append(prevent)

  
    button.innerHTML = "search"
    button.setAttribute("class","buttones")
    prevent.onsubmit = function(event)
    {
        event.preventDefault()

       
    }
    console.log(inputs.value)
    searchicon.append(prevent,button)
    inputs.onchange = function(event)
    {
        console.log(inputs.value)
       
           // let z = document.createElement('a')
          //  z.href = "../HTML/sale_page.html" 
          //  z.appendChild(button)
            searchicon.appendChild(button)
            localStorage.setItem("search",JSON.stringify(inputs.value))
           
        
    }
}

//console.log(filter)

