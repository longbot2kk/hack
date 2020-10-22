let sp= document.getElementById("products")

function asp(img,name ,brand, size, color, price)
{
    sp.insertAdjacentHTML("beforeend",
    `
    <div class = item>
        <div class="productImg"><img src="${img}" alt="a"></div>
        <div class = itemName>
            <b>${name}</b>
        </div>
        <div>
            <b>${brand}</b>
        </div>
        <div>${size}</div>
        <div>${color}</div>
        <div>${price}</div>      
    </div>
    `
    )
}
// sp.innerHTML="";
for (let i=0; i<products.length;i++)
{
    asp(products[i].img ,products[i].name, products[i].brand, products[i].size, products[i].color, products[i].price)

} t5
let itemNike = document.getElementById("nike")

itemNike.addEventListener("click",() =>
{   
    sp.innerHTML = "";
    for (let i=0; i<products.length;i++)
{
        if(products[i].brand == "Nike")
        {
            
            asp(products[i].name, products[i].brand, products[i].size, products[i].color, products[i].price)
        }

}

}
)