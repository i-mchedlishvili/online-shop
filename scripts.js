
const container = document.querySelector('#search-cont');
const twoCols = document.querySelector('#twoColumn');
const threeCols = document.querySelector('#threeColumn');
const fourColumn = document.querySelector('#fourColumn');
const fullColsGenerate = document.querySelector('#sortFullCol');
const sortFourCols = document.querySelector('#sortFourCols');


function reloadPage() {
  const clearPage = document.querySelector('#search-cont');
  clearPage.innerHTML = '';
}

function generateColls() {
  reloadPage();
let selValue = document.querySelector('#selection');
  let strUser = selValue.options[selValue.selectedIndex].value;
  apiURL = 'https://fakestoreapi.com/products?limit=';
  apiURL += strUser;
  fetch( apiURL, {method: 'GET'})
.then(res=>res.json())
.then(json=> {
    let template = "";
    for(let i = 0; i < json.length; i++) {
        template += `
<div class="d-flex flex-column col mb-5">
<div class="special-offer mb-2">
  <div class="w-100">
    <img
      src=${json[i].image}
      class="w-100"
    />
  </div>
</div>
<div class="d-flex ms-2 flex-column justify-content-center">
<div class="d-flex mb-1">
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-star text-warning"></i>
  <i class="fas fa-s
  tar text-muted"></i>
</div>
<p class="fw-bold text-muted">${json[i].title}</p>

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

generateColls();

twoCols.addEventListener('click', () => container.className = "row row-cols-lg-2 row-cols-md-2 row-cols-sm-2");

threeCols.addEventListener('click', () => container.className = "row row-cols-lg-3 row-cols-md-2 row-cols-sm-2");

fourColumn.addEventListener('click', () => container.className = "row row-cols-lg-4 row-cols-md-2 row-cols-sm-2");

fullColsGenerate.addEventListener('click', generateColls);

sortFourCols.addEventListener('click', () => container.className = "row row-cols-lg-4 row-cols-md-2 row-cols-sm-2");
