async function itemsDisplay(){
    let res=await fetch("http://localhost:3000/cart");
    let data=await res.json();
    console.log(data)
    data.forEach(product => {
        var row = document.createElement('tr');

        var content = document.createElement('td');

        var pushData = document.createElement('div');
        pushData.class= 'product';
        pushData.style.hover='border: none;box-shadow: 2px 2px 4px rgba(0,0,0,0.2);transform: scale(1.01);'
        pushData.style='display: flex;width: 350px;height: auto;overflow: hidden;border: 1px solid silver;margin-bottom: 5px;border-radius:7px;'

            var image = document.createElement('img');
            image.src= product.image_url[0];
            image.style='padding: 3%;width: 70px;height: 70px;object-fit: cover; '
            image.hover='transform: scale(1.04);'


            var box = document.createElement('div');
            box.class = 'product-info';
            box.style='width: auto;position: relative;line-height:5px;'

                var r1 = document.createElement('p');
                r1.class = 'product-name';
                r1.innerText = product.product_name;
                
                var r2 = document.createElement('p');
                r2.class = 'product-codeId';
                r2.innerText = 'SKU CODE : '+ product.id;

                var r3 = document.createElement('p');
                r3.class = 'product-quantity';
                r3.innerText = 'Qty:'+parseInt(1) + "  "+ 'Price: '+("₹ "+ parseInt(product.price));

            box.append(r1,r2,r3)

        pushData.append(image,box);

        content.append(pushData)

        row.append(content);

        document.querySelector('.productsTable').append(row);
    })
    
}
itemsDisplay();

async function test2(){
    let res2=await fetch("http://localhost:3000/cart");
    let data2=await res2.json();
    let length=0;
    let sum=0
    data2.forEach((ele)=>{
        length++;
        sum += ele.price
    })
    document.querySelector(".valuation").innerText="₹ "+`${sum}`
    document.querySelector("#valuation").innerText="₹ "+`${sum}`
}
test2();