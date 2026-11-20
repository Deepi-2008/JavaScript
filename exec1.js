var purchase=15000
var discount
if(purchase<5000)
    {discount=0;
    console.log("no dicount")}
else if(purchase>5000)
    {dicount=10;
console.log("10%discount")}
else if(purchase>10000)
{discount=15;
console.log("15%discount")}
else if(purchase>25000)
    {discount=20;
console.log("20%discount")}
else if(purchase>50000)
    {discount=30;
console.log("30%discount")}
 else
    console.log("none")
var discountamount=purchase*dicount/100;
var finalamount =purchase-discountamount;
console.log("discount=",discountamount);
console.log("finalamount=",finalamount)



