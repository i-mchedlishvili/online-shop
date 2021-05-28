
const container = document.querySelector('.search-cont');
const twoCols = document.querySelector('#twoColumn');
const threeCols = document.querySelector('#threeColumn');
const fourColumn = document.querySelector('#fourColumn');
const fullColsGenerate = document.querySelector('#sortFullCol');
const sortFourCols = document.querySelector('#sortFourCols');


function reloadPage() {
    const clearPage = document.querySelector('.search-cont');
    clearPage.innerHTML = '';
}

function getQuantity() { 
  reloadPage();
  let selValue = document.querySelector('#selection');
  let strUser = selValue.options[selValue.selectedIndex].value;
  apiURL = 'https://fakestoreapi.com/products?limit=';
  apiURL += strUser;
  fetch( apiURL, {method: 'GET'})
  .then(Response => Response.json())
  .then(json => { 
    let template = "";
    for(let i = 0; i < json.length; i++) {
        template += `
<div class="d-flex flex-column col-3 mb-5">
<div class="special-offer mb-3">
  <div class="w-75">
    <img
      src=${json[i].image}
      class="w-100"
    />
  </div>
</div>
<div class="d-flex mb-1">
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-muted"></i>
</div>
<p class="">${json[i].title}</p>
<p class="mb-2 fw-bold">$${json[i].price}</p>
<div class="d-flex">
  <i class="fas fa-circle text-info me-2 fs-5"></i>
  <i class="fas fa-circle text-secondary me-2 fs-5"></i>
  <i class="fas fa-circle text-dark fs-5"></i>
</div>
</div>
        `;
    }
    container.innerHTML += template;
  })
  };

  getQuantity();

function generate() {
  reloadPage();
  let selValue = document.querySelector('#selection');
  let strUser = selValue.options[selValue.selectedIndex].value;
  apiURL = 'https://fakestoreapi.com/products?limit=';
  apiURL += strUser;
  fetch( apiURL, {method: 'GET'})
    .then(res=>res.json())
    .then(json=> {
        console.log(json);
        let template = "";
        for(let i = 0; i < json.length; i++) {
          
            template += `
    <div class="d-flex flex-column col-3 mb-5">
    <div class="special-offer mb-3">
      <div class="w-75">
        <img
          src=${json[i].image}
          class="w-100"
        />
      </div>
    </div>
    <div class="d-flex mb-1">
      <i class="fas fa-star text-warning"></i>
      <i class="fas fa-star text-warning"></i>
      <i class="fas fa-star text-warning"></i>
      <i class="fas fa-star text-warning"></i>
      <i class="fas fa-star text-muted"></i>
    </div>
    <p class="">${json[i].title}</p>
    <p class="mb-2 fw-bold">$${json[i].price}</p>
    <div class="d-flex">
      <i class="fas fa-circle text-info me-2 fs-5"></i>
      <i class="fas fa-circle text-secondary me-2 fs-5"></i>
      <i class="fas fa-circle text-dark fs-5"></i>
    </div>
  </div>
            `;
        }
        container.innerHTML += template;
    })
}


function generateTwoCols() {
  reloadPage();
fetch('https://fakestoreapi.com/products?limit=20')
.then(res=>res.json())
.then(json=> {
    console.log(json);
    let template = "";
    for(let i = 0; i < json.length; i++) {
        console.log(json[i].image)
        template += `
<div class="d-flex flex-column col-6 mb-5">
<div class="special-offer mb-3">
  <div class="w-75">
    <img
      src=${json[i].image}
      class="w-100"
    />
  </div>
</div>
<div class="d-flex mb-1">
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-muted"></i>
</div>
<p class="">${json[i].title}</p>
<p class="mb-2 fw-bold">$${json[i].price}</p>
<div class="d-flex">
  <i class="fas fa-circle text-info me-2 fs-5"></i>
  <i class="fas fa-circle text-secondary me-2 fs-5"></i>
  <i class="fas fa-circle text-dark fs-5"></i>
</div>
</div>
        `;
    }
    container.innerHTML += template;
})
}

function generateThreeCols() {
  reloadPage();
  let selValue = document.querySelector('#selection');
  let strUser = selValue.options[selValue.selectedIndex].value;
  apiURL = 'https://fakestoreapi.com/products?limit=';
  apiURL += strUser;
  fetch( apiURL, {method: 'GET'})
.then(res=>res.json())
.then(json=> {
    console.log(json);
    let template = "";
    for(let i = 0; i < json.length; i++) {
        console.log(json[i].image)
        template += `
<div class="d-flex flex-column col-4 mb-5">
<div class="special-offer mb-3">
  <div class="w-75">
    <img
      src=${json[i].image}
      class="w-100"
    />
  </div>
</div>
<div class="d-flex mb-1">
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-muted"></i>
</div>
<p class="">${json[i].title}</p>
<p class="mb-2 fw-bold">$${json[i].price}</p>
<div class="d-flex">
  <i class="fas fa-circle text-info me-2 fs-5"></i>
  <i class="fas fa-circle text-secondary me-2 fs-5"></i>
  <i class="fas fa-circle text-dark fs-5"></i>
</div>
</div>
        `;
    }
    container.innerHTML += template;
})
}

function fullColls() {
reloadPage();
let selValue = document.querySelector('#selection');
  let strUser = selValue.options[selValue.selectedIndex].value;
  apiURL = 'https://fakestoreapi.com/products?limit=';
  apiURL += strUser;
  fetch( apiURL, {method: 'GET'})
.then(res=>res.json())
.then(json=> {
    console.log(json);
    let template = "";
    for(let i = 0; i < json.length; i++) {
        console.log(json[i].image)
        template += `
<div class="d-flex col-12 mb-5">
<div class="special-offer mb-3 w-25 me-3">
  <div class="w-100">
    <img
      src=${json[i].image}
      class="w-100"
    />
  </div>
</div>
<div class="d-flex flex-column justify-content-center">
<div class="d-flex mb-1">
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-muted"></i>
</div>
<p class="fw-bold text-muted">${json[i].title}</p>
<p class="text-muted">${json[i].description}</p>
<p class="mb-2 fw-bold">$${json[i].price}</p>
<div class="d-flex">
  <i class="fas fa-circle text-info me-2 fs-5"></i>
  <i class="fas fa-circle text-secondary me-2 fs-5"></i>
  <i class="fas fa-circle text-dark fs-5"></i>
</div>
</div>
</div>
        `;
    }
    container.innerHTML += template;
})
}


twoCols.addEventListener('click', generateTwoCols);

threeCols.addEventListener('click', generateThreeCols);

fourColumn.addEventListener('click', generate);

fullColsGenerate.addEventListener('click', fullColls);

sortFourCols.addEventListener('click', generate);





