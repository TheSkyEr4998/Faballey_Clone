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
        pushData.style='display: flex;width: auto;height: auto;overflow: hidden;border: 1px solid silver;margin-bottom: 20px;border-radius:7px;'

            var image = document.createElement('img');
            image.src= product.image_url[0];
            image.style='padding: 3%;width: 230px;height: 230px;object-fit: cover;'
            image.hover='transform: scale(1.04);'


            var box = document.createElement('div');
            box.class = 'product-info';
            box.style='padding: 20px;width: 100%;position: relative;'

                var line1 = document.createElement('div')
                line1.class='name_price'
                line1.style ="display:flex ; justify-content:space-between"
                

                    var r1 = document.createElement('h3');
                    r1.class = 'product-name';
                    r1.innerText = product.product_name;
                    r1.style='margin-bottom: 20px;'

                    var r2 = document.createElement('h4');
                    r2.class = 'product-price';
                    r2.innerText = ("₹ "+ parseInt(product.price));
                    r2.style='margin-bottom: 20px;'

                line1.append(r1,r2)

                var line2 = document.createElement('div')
                line2.class='size_qty_cncl'
                line2.style ="display:flex ; justify-content:space-between ;"

                    var r3 = document.createElement('p');
                    r3.class = 'product-size';
                    r3.innerText = 'Size: '+product.size;

                    var r4 = document.createElement('p');
                    r4.class = 'product-quantity';
                    r4.innerText = 'Qty:'+parseInt(1);

                    var r5 = document.createElement('p');
                    r5.class = 'product-actualPrice';
                    r5.innerText = 'Actual Price: '+("₹ "+ parseInt(product.striked_price));

                line2.append(r3,r4,r5)

                var line3 = document.createElement('div')
                line3.class='codeId'

                    var r6 = document.createElement('p');
                    r6.class = 'product-codeId';
                    r6.innerText = 'SKU CODE : '+ product.id;

                line3.append(r6)

                var line4 = document.createElement('hr')

                var line5 = document.createElement('div')
                line5.class='edit_del'
                line5.style ="display:flex ; justify-content:space-between ;margin-left:-20px;margin-top:10px;"
                

                    var div1 = document.createElement('div')
                    div1.class='edit_move'
                    div1.style="width:60%;display:flex ;margin-left:20px;justify-content:space-between ;margin-top:15px;"

                        var r7 = document.createElement('a');
                        r7.class = 'edit';
                        r7.innerText = 'Edit Item';
                        r7.href='#'

                        var r8 = document.createElement('a');
                        r8.class = 'moveWish';
                        r8.innerText = 'Move to Wishlist';
                        r8.href='#'

                    div1.append(r7,r8)
                    
                    var div2 = document.createElement('div')
                    div2.class='delete'
                    div2.style="margin-left:15px;"

                        var r9 = document.createElement('img');
                        r9.class = 'delete';
                        r9.style="width:30px"
                        r9.onclick = async function(){
                            let res = await fetch(`http://localhost:3000/cart/${product.id}`,{
                                method: "DELETE"
                            });
                        }
                        r9.src = 'data:image/png;base64,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';
                
                    div2.append(r9)

                    line5.append(div1,div2)
                    
                box.append(line1,line2,line3,line4,line5)

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
    document.querySelector(".count").innerText=`${length}`
    document.querySelector(".valuation").innerText="₹ "+`${sum}`
    document.querySelector("#valuation").innerText="₹ "+`${sum}`
}
test2();
