let sp= document.getElementById("products")
function asp(name ,brand, size, color, price)
{
    sp.insertAdjacentHTML("beforeend",
    `
    <div class = item>
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
sp.innerHTML="";
for (let i=0; i<products.length;i++)
{
    asp(products[i].name, products[i].brand, products[i].size, products[i].color, products[i].price)

}
let itemNike = document.getElementsByClassName  ("nike")
itemNike.addEventListener("onclick",() =>
{
    for (let i=0; i<products.length;i++)
{
        if(products[i].brand=="Nike")
        {
            itemNike.innerHTML=`
            <div class = item>
            <div class = itemName>
                <b>${products[i].name}</b>
            </div>
            <div>
                <b>${products[i].brand}</b>
            </div>
            <div>${products[i].size}</div>
            <div>${products[i].color}</div>
            <div>${products[i].price}</div>        
        </div> 
            `
        }

}

}
)