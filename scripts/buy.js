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

// billing section
let billing = (data) => {
    let buyitem = data
    // let buyitem = JSON.parse(localStorage.getItem("buylist"));
    let clthBill = document.getElementById("clthBill") 
    let taxBill = document.getElementById("taxBill")
    let conviBill = document.getElementById("conviBill")
    let totalBill = document.getElementById("totalBill")
    if(buyitem == null){
        buyitem = [];
        clthBill.innerText = "\u20B9"+0;
        taxBill.innerText = "\u20B9"+0;
        conviBill.innerText = "\u20B9"+0;
        return
    }
    let clothingAmt = 0;
    buyitem.forEach(ele => {
        clothingAmt += ele.Price;
    })
    clthBill.innerText = "\u20B9"+clothingAmt.toFixed(2);
    let gst = clothingAmt * 0.12;
    taxBill.innerText = "\u20B9"+gst.toFixed(2);
    let convi = clothingAmt*0.05;
    conviBill.innerText = "\u20B9"+convi.toFixed(2)
    let total = clothingAmt + gst + convi;
    totalBill.innerText = "\u20B9"+total.toFixed(2);
}

let buyNow = document.getElementById("buyNow");
buyNow.addEventListener("click",() => {
    window.location.replace("./complete.html");
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

// container part
let container = document.getElementById("container")

// creating the product card
let createProductCard = (data) =>{
    container.innerHTML = null;
    data.forEach((element,index) => {
        let card = document.createElement("div")
        card.setAttribute("class","card")
        let textArea = document.createElement("div")
        textArea.setAttribute("class","textArea")
        let image = document.createElement("img")
        image.setAttribute("src",element.Image);
        image.setAttribute("class","image")
        let price = document.createElement("h6")
        price.innerText = "\u20B9"+element.Price;
        price.setAttribute("class","price")
        let name = document.createElement("p")
        name.innerText = element.Name;
        name.setAttribute("class","name")
        let brand = document.createElement("p")
        brand.innerText = element.Brand;
        brand.setAttribute("class","brand")
        // let favBtn = document.createElement("button")
        // favBtn.innerText = "❤"
        // favBtn.setAttribute("class","favbtn")
        let cartBtn = document.createElement("button")
        cartBtn.setAttribute("class","cartBtn")
        cartBtn.innerText = "Cancel Item"

        // favBtn.addEventListener("click",(event) =>{
        //     addToFav(element,index)
        // })

        cartBtn.addEventListener("click",() => {
            addToCart(element,index)
        })

        container.append(card);
        textArea.append(price,name,brand)
        card.append(image,textArea,cartBtn)
    });
    let status = JSON.parse(localStorage.getItem("status"))
    if(status == "false"){
        alert("Please Sign in")
    }else{
        billing(data)
    }
    
}


// // fetch data
// let fetchData = () => {
//     let promise = fetch("../db.json")
//     promise.then((objectVal) => {
//         return objectVal.json();
//     })
//     .then((actualData) => {
//         fetchedData = actualData.women;
//         getData(fetchedData)
//         createProductCard(fetchedData)
//     })
//     .catch((err) => {
//         console.log(err);
//     })
// }
// fetchData()
// let fetchedData = []
// let getData = (data) => {
//     fetchedData = data;
// }
let fetchedData = JSON.parse(localStorage.getItem("buylist"))
if(fetchedData == null){
    fetchedData = []
}else{
    createProductCard(fetchedData)
}
console.log(fetchedData);


// add to fav
// let addToFav = (element,index) => {
//     let favData = JSON.parse(localStorage.getItem("favlist"))
//     if(favData == null){
//         favData = []
//     }
//     let targetElement = favData.find(item => item.id === element.id)
//     if(targetElement){
//         alert("This item is already in your favourite list")
//         return
//     }
//     fetchedData.forEach((ele,ind) => {
//         if(ind == index){
//             favData.push(ele)
//         }
//     })
//     localStorage.setItem("favlist",JSON.stringify(favData))
// }




// cancel the item
let addToCart = (element,index) => {
    let cartData = JSON.parse(localStorage.getItem("buylist"))
    if(cartData == null){
        cartData = []
    }
    // let targetElement = cartData.find(item => item.id === element.id)
    // if(targetElement){
    //     alert("This item is already in your cart")
    //     return
    // }
    cartData.forEach((ele,ind) => {
        if(ele.Name === element.Name){
            cartData.splice(ind,1)
            alert("Item removed")
            createProductCard(cartData)
        }
    })
    localStorage.setItem("buylist",JSON.stringify(cartData))
}

// filter
// let filterCat = document.getElementById("filterCat");

// filterCat.addEventListener("change",(event) => {
//     let choice = event.target.value;
//     let filteredData = fetchedData.filter(element => {
//         return choice === element.Category;
//       })
//     if(choice == "showAll"){
//         filteredData = fetchedData;
//     }
//     createProductCard(filteredData)
// })

// //filter brand
// let filterBrand = document.getElementById("filterBrand")

// filterBrand.addEventListener("change",(event) => {
//     let choice = event.target.value;
//     console.log(choice);
//     let filteredData = fetchedData.filter(element => {
//         return choice === element.Brand;
//       })
//     if(choice == "showAll"){
//         filteredData = fetchedData;
//     }
//     createProductCard(filteredData)
// })

// //sort
// let sortBy = document.getElementById("sortBy")

// sortBy.addEventListener("change",(event) => {
//     console.log(event.target.value);
//     let choice = event.target.value;
//     let sortData = fetchedData;
//     if(choice == "l2h"){
//         sortData.sort(function(x,y) {
//             return +(x.Price) - +(y.Price)
//         })
        
//     }else if(choice == "h2l"){
//         sortData.sort((x,y) => {return +y.Price - +x.Price});
        
//     }else if(choice == "showAll"){
//         sortData = fetchedData;
        
//     }
//     createProductCard(sortData)
// })

// // reset
// let reset = document.getElementById("reset")
// reset.addEventListener("click",() => {
//     createProductCard(fetchedData);
// })