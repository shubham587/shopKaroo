// timeout for login
let logout = document.getElementById("logout")
let hello = document.getElementById("hello")
hello.style.width = "150px";
let timeOut = () => {
    if(statusData.status == false){
       setTimeout(() => {alert("Please Sign in")},10000) 
    }
}
let statusData = JSON.parse(localStorage.getItem("status"))
// console.log(statusData.name);
if(statusData.status === null){
    statusData.status = false
}
console.log(statusData);
timeOut(status)

// login success
let loginSuccess = () => {
    if(statusData.status[statusData.length -1] != false){
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

//getting input from search bar
let dataSearch = document.getElementById("dataSearch");
dataSearch.addEventListener("keydown",(event) => {
    if(event.code === "Enter"){
        let value = event.target.value;
        console.log(value)
        window.location.replace("showall.html?category="+value);
    }
    
})

// URL params
let getParameter = (ParaName) => {
    let parameter = new URLSearchParams(window.location.search);
    return parameter.get(ParaName)
}
// //getting the data from home page
// let filterCategory = (data,fetchedData) => {
//     let choice = data;
//     let filteredData = fetchedData.filter(element => {
//         return choice == element.Category;
//       })
      
//     createProductCard(filteredData,"ftcat");
//     console.log(filteredData,"ft");
// }
// getting data from db.json
let fetchedData = []
let fetchData = () => {
    fetchedData = dataJson.women;
    createProductCard(fetchedData)
    let paraData = getParameter("category");
    if(paraData != null){
        filterCategory(paraData,fetchedData)
    }
}
fetchData()
console.log(fetchedData,"get");














let deal = document.getElementById("dealCorner");

let dealImg = ["https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-3-Women-Desktop-24Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-1-Women-Desktop-23Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-2-Women-Desktop-23Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-4-Women-Desktop-06Dec2022.jpg",
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-5-Women-Desktop-07Dec2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel8-6-Women-Desktop-23Nov2022.jpg"];

let createCard = (data,div) => {
    data.forEach(element => {
        let image = document.createElement("img");
        image.setAttribute("src",element)
        image.addEventListener("click",() => {
            window.location.replace("./womenProduct.html")
        })
        div.append(image);
    });
}
createCard(dealImg,deal)

let winter = document.getElementById("winterCard");

let winterImg = ["https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-1-Women-Desktop-03Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-4-Women-Desktop-03Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-3-Women-Desktop-03Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-2-Women-Desktop-03Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-5-Women-Desktop-03Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-E-6-Women-Desktop-03Nov2022.jpg"];
createCard(winterImg,winter)

let topTrending = document.getElementById("topTrending");

let topTrendingImg = ["https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Desktop-Women-24Nov2022.jpg",
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-2-Desktop-Women-24Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-3-Desktop-Women-24Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-4-Desktop-Women-24Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-5-Desktop-Women-23Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-6-Desktop-Women-24Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-7-Desktop-Women-23Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-8-Desktop-Women-23Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-9-Desktop-Women-23Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-10-Desktop-Women-24Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-11-Desktop-Women-23Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-12-Desktop-Women-23Nov2022.jpg"]
createCard(topTrendingImg,topTrending)

let trendyBottom = document.getElementById("trendyBottom")

let trendyImg = ["https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-1-Women-Desktop-07Oct2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-4-Women-Desktop-07Oct2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-3-Women-Desktop-07Oct2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-2-Women-Desktop-07Oct2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-5-Women-Desktop-14Oct2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-F-6-Women-Desktop-14Oct2022.jpg"]
createCard(trendyImg,trendyBottom)

let trendingEthnic =document.getElementById("trendingEthnic");

let ethnicImg = ["https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-1-Women-Desktop-08Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-2-Women-Desktop-08Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-3-Women-Desktop-08Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-4-Women-Desktop-08Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-5-Women-Desktop-03Nov2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-Carousel7-6-Women-Desktop-03Nov2022.jpg"];
createCard(ethnicImg,trendingEthnic)

let trendingBrands = document.getElementById("trendingBrands")

let brandsImg = ["https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-1-Women-Desktop-23Nov2022A.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-2-Women-Desktop-23Nov2022A.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-3-Women-Desktop-14Dec2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-4-Women-Desktop-23Nov2022A.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-5-Women-Desktop-14Dec2022.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-D-6-Women-Desktop-23Nov2022.jpg"]
createCard(brandsImg,trendingBrands)

let trendingAddons = document.getElementById("trendingAddons")

let addImg = ["https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-1-Women-Desktop-2AUG22.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-2-Women-Desktop-2AUG22.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-3-Women-Desktop-2AUG22.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-4-Women-Desktop-2AUG22.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-5-Women-Desktop-2AUG22.jpg",  
"https://lmsin.net/cdn-cgi/image/w=288,q=60,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/PC-B-6-Women-Desktop-2AUG22.jpg"]
createCard(addImg,trendingAddons)

let lovedWinter = document.getElementById("lovedWinter")

let lovedImg = ["https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-A-Women-09Dec2022.jpg",
"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-B-Women-09Dec2022.jpg",
"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-6modblk-oneBythree-C-Women-12Dec2022.jpg"];
createCard(lovedImg,lovedWinter)

let occassionWear  = document.getElementById("occassionWear")

let occassionImg = ["https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-A-Women-14Dec2022.jpg",
"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-B-Women-14Dec2022.jpg",
"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-15modularblock-oneBythree-C-Women-14Dec2022.jpg"]
createCard(occassionImg,occassionWear)

let shopByDept = document.getElementById("shopByDept");

let deptImg = ["https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-A-Women-04March2022A.jpg",
"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-B-Women-12April2022.jpg",
"https://lmsin.net/cdn-cgi/image/w=500,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/desktop-dept-11modblock-oneBythree-C-Women-04March2022A.jpg"];
createCard(deptImg,shopByDept)

let exclusiveOnline = document.getElementById("exclusiveOnline");
let onlineImg = ["https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011768002-Red-Wine-1000011768002_01-2100.jpg",            
"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011940633-Black-Black-1000011940633_01-2100.jpg",            
"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011931608-Purple-Purple-1000011931608_01-2100.jpg",  
"https://lmsin.net/cdn-cgi/image/h=600,w=444,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/lifestyle/1000011768013-Green-Emerald-1000011768013_01-2100.jpg"];

let createExclusiveCard = (data,div) => {
    data.forEach(element => {
        let image = document.createElement("img");
        image.setAttribute("src",element);
        let price = document.createElement("p");
        price.innerText = "\u20A8"+Math.floor(Math.random() * 9999) 
        div.append(image)
    })
}
createExclusiveCard(onlineImg,exclusiveOnline)