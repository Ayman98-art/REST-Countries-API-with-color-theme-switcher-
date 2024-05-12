const pushCards = document.getElementById("pushCards");

async function getData() {
  const response = await fetch("https://restcountries.com/v3.1/all");
  const data = await response.json();
  const drawData = data;
  displayData(drawData);
}

getData();

function displayData(drawData) {
  let emptyCard = " ";

  for (let i = 0; i < drawData.length; i++) {
    emptyCard += 
    `
    
    <div
    class="px-3 mouse_icon wow animate__shakeX" 
    data-wow-duration="2s" 
    data-wow-delay="1s"
    >
    
    <div class="card my-3">

    <img
    src=${drawData[i].flags.png}
    alt=${drawData[i].flags.alt}
    >

    <div class="card-body">
    <h5 class="card-text searchByName">
    ${drawData[i].name.common}
    </h5>
    </div>

    <div class='pl-4 pt-1 pb-2 card-group' >
    <p class="card-text">
    Population : <span>${drawData[i].population}</span>
    </p>
    </div>

    <div class='pl-4 pb-2 card-group'>
    <p class="card-text RegionTitle">
    Region : <span>${drawData[i].region}</span>
    </p>
    </div>

    <div class='pl-4 pb-4 card-group'>
    <p class="card-text">
    Capital : <span>${drawData[i].capital}</span>
    </p>
    </div>

    </div>

    
    </div>

    `;
  }

  pushCards.innerHTML = emptyCard;

}

// For Change theme
function changeTheme() {
  const theme = document.getElementById("header");
  const theme2 = document.getElementById("body");

  theme.classList.toggle("darkMood");
  theme2.classList.toggle("darkMood");
}

// For Filter
const regionList = document.querySelectorAll(".region");
const selectRegion = document.getElementsByClassName("RegionTitle");

regionList.forEach((element) => {
  element.addEventListener("click", () => {
    Array.from(selectRegion).forEach((ele) => {
      if (
        ele.innerText.includes(element.innerText) ||
        element.innerText == "All"
      ) {
        ele.parentElement.parentElement.style.display = "grid";
      } else {
        ele.parentElement.parentElement.style.display = "none";
      }
    });
  });
});

// For Search
const search = document.getElementById("search");
const searchByName = document.getElementsByClassName("searchByName");

search.addEventListener("input", () => {
  Array.from(searchByName).forEach((ele) => {
    if (
      ele.innerText
        .toLowerCase()
        .trim()
        .includes(search.value.toLowerCase().trim())
    ) {
      ele.parentElement.parentElement.style.display = "grid";
    } else {
      ele.parentElement.parentElement.style.display = "none";
    }
  });
});

// Btn To Top
let btnTop =document.getElementById("btnTop")
let bottomHeader = document.getElementById("bottomHeader");

btnTop.addEventListener("click", function(){
    window.scroll({
        top:0,
        behavior:"smooth"
    })
})

window.onscroll = function(){
    if(scrollY >= 350){
        btnTop.classList.replace("hide","show")
        bottomHeader.classList.add("header__top")
    }
    else{
        btnTop.classList.replace("show","hide")
        bottomHeader.classList.remove("header__top")
    }
}
