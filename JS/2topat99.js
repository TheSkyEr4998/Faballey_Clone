
let data;
async function getdata ()
{
    try
    {
       let res = await fetch(`http://localhost:3000/arrays`)
        data = await res.json()
       console.log(data[0].hoverimg)
       tem = []
       data.reverse()

       for(let i = data.length/2-1 ;i < data.length;i++)
       {
           tem.push(data[i])
       }
       for(let i = 5 ;i < 13;i++)
       {
           tem.push(data[i])
       }



       localStorage.setItem("listhalfdata",JSON.stringify(tem))
       displaydata (tem)
       
      

    }
    catch(err)
    {
        console.log(err)
    }
}
getdata ()

let sort = document.getElementById("sorting")
let filter = JSON.parse(localStorage.getItem("listhalfdata"))
console.log(filter)
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