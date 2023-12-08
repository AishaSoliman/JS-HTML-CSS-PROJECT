//slider
var sliderCnt=1;
var mxSliderCnt=6;
var sliderDiv=document.getElementById("sliderimg");

var timerid=setInterval(function (){
    sliderCnt++;
    if(sliderCnt>mxSliderCnt)sliderCnt=1;
    var html='<img src="\\images\\slider\\'+sliderCnt+'.png" alt="" width="200px"/>';
    sliderDiv.innerHTML=html;
},3000)

function backSlideImg()
{
    sliderCnt--;
    if(sliderCnt<=0)sliderCnt=mxSliderCnt;
    var html='<img src="/images/slider/'+sliderCnt+'.png"/>';
    sliderDiv.innerHTML=html;
}
function nextSlideimg()
{
    sliderCnt++;
    if(sliderCnt>mxSliderCnt)sliderCnt=1;
    var html='<img src="/images/slider/'+sliderCnt+'.png"/>';
    sliderDiv.innerHTML=html;
}
//cards
var elctronics=[{
    h1:"Samsung Galaxy A24",
    p:"Dual Sim Silver 8GB RAM 128GB 4G",
    button:"Add to Cart",
},{
    h1:"ASUS TUF Gaming F15",
    p:"Laptop With 15.6 inch LED Core i7-12700 H 8 Gb Ram 1 T SSD",
    button:"Add to Cart",
},{
    h1:"Lenovo Ideapad Gaming 3",
    p:"15.6 Inch Full Hd Ryzen 7 5800H 16 GB Ram 512 GB SSD 6 GB Nvidia",
    button:"Add to Cart",
},{
    h1:"PlayStation 5",
    p:"Console (Disc Version) With Controller",
    button:"Add to Cart",
},{
    h1:"PlayStation 4",
    p:"Slim 500GB Console with Controller",
    button:"Add to Cart",
},{
    h1:"iPhone 15 Pro",
    p:"256GB Blue Titanium 5G With FaceTime - Middle East Version",
    button:"Add to Cart",
}];

var clothes=[{
    h1:"Adidas Al Ahly shirt",
    p:"Al Ahly Home Jersey Red",
    button:"Add to Cart",
},{
    h1:"Adidas Racer TR21",
    p:"Cloudfoam Lifestyle Running Shoes",
    button:"Add to Cart",
},{
    h1:"Adidas Own The Run",
    p:"Long-Sleeve Hoodie",
    button:"Add to Cart",
},{
    h1:"Adidas Big Badge",
    p:"Sport Training T-Shirt",
    button:"Add to Cart",
},{
    h1:"Adidas Teamsport Tracksuit",
    p:"53% cotton, 47% recycled polyester interlock",
    button:"Add to Cart",
},{
    h1:"Adidas Runfalcon",
    p:"3.0 Running Shoes",
    button:"Add to Cart",
}];

var home=[{
    h1:"Cluc lamp",
    p:"Cage fit table lamp Black",
    button:"Add to Cart",
},{
    h1:"Wood Studying Desk",
    p:"White 90x75x40cm",
    button:"Add to Cart",
},{
    h1:"Air Fryer Aerofry",
    p:"With Multifunction Air Convection technology 4 L 1500 W AF300-B5",
    button:"Add to Cart",
},{
    h1:"American Coffee Maker",
    p:"Uno 1 Cup 0.5 L 300 W CM31416A Black",
    button:"Add to Cart",
},{
    h1:"SHARP Microwave",
    p:"Stainless Steel Microwave Oven with Grill",
    button:"Add to Cart",
},{
    h1:"Office chair",
    p:"white frame and black mesh, with medical back support",
    button:"Add to Cart",
}];

var makeup=[{
    h1:"KIKO MILANO",
    p:"Unlimited Double Touch Liquid Gloss Lipstick 6ml Natural Rose 103",
    button:"Add to Cart",
},{
    h1:"CYBELE Lipstick",
    p:"Exotic Lipstick 14",
    button:"Add to Cart",
},{
    h1:"CYBELE Eyeshadow",
    p:"Mono Eyeshadow 111",
    button:"Add to Cart",
},{
    h1:"RIMMEL LONDON Mascara",
    p:"Wonder'Luxe Volume Mascara Black",
    button:"Add to Cart",
},{
    h1:"REAL TECHNIQUES Brush Set",
    p:"2-Piece Eye Shade Plus Blend Brush Set Purple/Black/Grey",
    button:"Add to Cart",
},{
    h1:"CYBELE Megalash Mascara",
    p:"Offers perfect coverage for imperfections and blemishes",
    button:"Add to Cart",
}];

var curCatogery=elctronics; //object
function changeCards(button)
{
    switch(button)
    {
        case "elctronics":
            curCatogery=elctronics;
            break;
        case "clothes":
            curCatogery=clothes;
            break;
        case "home":
            curCatogery=home;
            break;
        case "makeup":
            curCatogery=makeup;
            break;
    }
    var cards=document.getElementsByClassName("card");
    for(var i=1;i<=6;i++)
    {
        cards[i-1].getElementsByTagName("img")[0].src="/images/"+button+"/"+i+".png";
        cards[i-1].getElementsByTagName("h2")[0].innerText=curCatogery[i-1].h1;
        cards[i-1].getElementsByTagName("p")[0].innerText=curCatogery[i-1].p;
        cards[i-1].getElementsByTagName("button")[0].innerText=curCatogery[i-1].button;
    }
}
function elec()
{
    curCatogery=elctronics;
    changeCards("elctronics");
}
function clo()
{
    curCatogery=clothes;
    changeCards("clothes");
}
function ho()
{
    curCatogery=home;
    changeCards("home");
}
function mak()
{
    curCatogery=makeup;
    changeCards("makeup");
}

//Cart
var CartCNT=0;
function addToCart(id)// id here reprsents our index in each array
{
    var cur; //0 elctronics, 1 clothes, 2 home, 3 makeup
    switch(curCatogery)
    {
        case elctronics:
            cur=0;
            break;
        case clothes:
            cur=1;
            break;
        case home:
            cur=2;
            break;
        case makeup:
            cur=3;
            break;
    }
    if(curCatogery[id].button=="Add to Cart")
    {
        CartCNT++;
        document.getElementById(id).innerText="Remove from Cart";
        curCatogery[id].button="Remove from Cart";
    }
    else
    {
        CartCNT--;
        document.getElementById(id).innerText="Add to Cart";
        curCatogery[id].button="Add to Cart";
    }
    switch(cur)
    {
        case 0:
            elctronics[id].button=curCatogery[id].button;
            break;
        case 1:
            clothes[id].button=curCatogery[id].button;
            break;
        case 2:
            home[id].button=curCatogery[id].button;
            break;
        case 3:
            makeup[id].button=curCatogery[id].button;
            break;
    }
    displayCartCounter();
}
function displayCartCounter()
{
    var ele=document.getElementById("cart-counter");
    if(CartCNT>0)
    {
        ele.innerText=CartCNT;
        ele.style.visibility="visible";
    }
    else
    ele.style.visibility="hidden";
}

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}