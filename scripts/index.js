


// timeout for login
let logout = document.getElementById("logout")
let hello = document.getElementById("hello");

//getting input from search bar
let dataSearch = document.getElementById("dataSearch");
dataSearch.addEventListener("keydown",(event) => {
    if(event.code === "Enter"){
        let value = event.target.value;
        console.log(value)
        window.location.replace("showall.html?category="+value);
    }
    
})

hello.style.width = "150px";
let timeOut = () => {
    if(statusData.status == false){
       setTimeout(() => {alert("Please Sign in")},10000) 
    }
}
let statusData = JSON.parse(localStorage.getItem("status"))
if(statusData.status === null){
    statusData.status = false
}
console.log(statusData);
timeOut(status)

// login success
let loginSuccess = () => {
    if(statusData.status[statusData.length -1] == false){
        alert("Please Sign in before surfing")
    }else if(statusData.status[statusData.length -1] != false){
        hello.innerText = "Hello \n"+statusData.name;
    }
    document.getElementById("signin").style.display = "none"
    document.getElementById("signup").style.display = "none"
}
loginSuccess(statusData)

// logout

logout.addEventListener("click",() => {
    status = false;
    localStorage.setItem("status",JSON.stringify(status))
    logout.style.display = "none"
})
let trendindSection = document.getElementById("trending-item");

let trendingImg = ["https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner1-29Nov22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner2-29Nov22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner3-29Nov22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner4-29Nov22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner5-29Nov22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner6-29Nov22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner7-29Nov22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidge2-Desk-Banner8-29Nov22.jpg"];

let createTrendingImg = (trendingImg) => {
    trendingImg.forEach(element => {
        let tImg = document.createElement("img");
        tImg.setAttribute("src",element);
        tImg.addEventListener("click",() => {
            window.location.replace("./showall.html")
        })
        trendindSection.append(tImg)
    });
}

createTrendingImg(trendingImg);

let dealCard = document.getElementById("deal-card");
let womenBtn = document.getElementById("women");
let menBtn = document.getElementById("men");
let kidsBtn = document.getElementById("kids");



let womenImg = ["https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner1-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner2-02Dec22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner3-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Women-Banner4-05Dec22.jpg"
]

let menImg = ["https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner1-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner2-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner3-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Men-Banner4-29Nov22.jpg"];

let kidsImg = ["https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner3-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner1-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner2-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHp-Top-Deals-Desk-Kids-Banner4-29Nov22.jpg"];


let active = (womenImg) => {
    womenImg.forEach(element => {
        menBtn.style.backgroundColor = "white";
        menBtn.style.color = "black";
        menBtn.style.border = "2px solid black"
        kidsBtn.style.backgroundColor = "white";
        kidsBtn.style.color = "black";
        kidsBtn.style.border = "2px solid black"
        let image = document.createElement("img");
        image.setAttribute("src",element);
        womenBtn.style.backgroundColor = "#5C5F5C";
        womenBtn.style.color = "white";
        womenBtn.style.border = "none"
        image.addEventListener("click",() => {
            window.location.replace("./showall.html")
        })
        dealCard.append(image)
    })
}
active(womenImg)

womenBtn.addEventListener("click",() => {
    dealCard.innerText = null;
    womenImg.forEach(element => {
        menBtn.style.backgroundColor = "white";
        menBtn.style.color = "black";
        menBtn.style.border = "2px solid black"
        kidsBtn.style.backgroundColor = "white";
        kidsBtn.style.color = "black";
        kidsBtn.style.border = "2px solid black"
        let image = document.createElement("img");
        image.setAttribute("src",element);
        womenBtn.style.backgroundColor = "#5C5F5C";
        womenBtn.style.color = "white";
        womenBtn.style.border = "2px solid white"
        dealCard.append(image)
    })
})

menBtn.addEventListener("click",() => {
    dealCard.innerText = null;
    menImg.forEach(element => {
        womenBtn.style.backgroundColor = "white";
        womenBtn.style.color = "black";
        womenBtn.style.border = "2px solid black"
        kidsBtn.style.backgroundColor = "white";
        kidsBtn.style.color = "black";
        kidsBtn.style.border = "2px solid black"
        let image = document.createElement("img");
        image.setAttribute("src",element);
        menBtn.style.backgroundColor = "#5C5F5C";
        menBtn.style.color = "white";
        menBtn.style.border = "none"
        dealCard.append(image)
    })
})
kidsBtn.addEventListener("click",() => {
    dealCard.innerText = null;
    kidsImg.forEach(element => {
        menBtn.style.backgroundColor = "white";
        menBtn.style.color = "black";
        menBtn.style.border = "2px solid black"
        womenBtn.style.backgroundColor = "white";
        womenBtn.style.color = "black";
        womenBtn.style.border = "2px solid black"
        let image = document.createElement("img");
        image.setAttribute("src",element);
        kidsBtn.style.backgroundColor = "#5C5F5C";
        kidsBtn.style.color = "white";
        kidsBtn.style.border = "none"
        dealCard.append(image)
    })
})

let bigBrand = document.getElementById("bigBrand");

let brandImg = ["https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner1-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner2-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner3-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner4-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner5-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner6-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner7-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner8-02Dec22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner9-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner10-29Nov22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner11-02Dec22.jpg",
"https://lmsin.net/cdn-cgi/image/w=616,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Top-Brands-Desk-Banner12-29Nov22.jpg"]

let createBrandCard = (brandImg) => {
    brandImg.forEach(element => {
        let image = document.createElement("img");
        image.setAttribute("src",element);
        image.addEventListener("click",() => {
            window.location.replace("./showall.html")
        })
        bigBrand.append(image)
    })
}
createBrandCard(brandImg)

let hotter = document.getElementById("hotter");

let hotterImg = ["https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner2-28Oct22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner3-18Oct22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner4-18Oct22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LSUber-Desktop-Promowidget18-Banner1-18Oct22.jpg"]

let createHotterCard = (hotterImg) => {
    hotterImg.forEach(element => {
        let image = document.createElement("img");
        image.setAttribute("src",element);
        image.addEventListener("click",() => {
            window.location.replace("./showall.html")
        })
        hotter.append(image)
    })
}

createHotterCard(hotterImg)

let value = document.getElementById("value");

let valueImg = ["https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner1-03Dec22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner2-03Dec22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner3-03Dec22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner4-03Dec22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner5-03Dec22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner6-03Dec22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner7-03Dec22.jpg",
"https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/LS-UberHP-Promowidget21-Desk-Banner8-03Dec22.jpg"]

let createValueCard = (valueImg) => {
    valueImg.forEach(element => {
        let image = document.createElement("img");
        image.setAttribute("src",element);
        image.addEventListener("click",() => {
            window.location.replace("./showall.html")
        })
        value.append(image);
    })
}
createValueCard(valueImg)

// reset
// let reset = document.getElementById("reset")
// reset.addEventListener("click",() => {
//     createProductCard(fetchedData);
// })