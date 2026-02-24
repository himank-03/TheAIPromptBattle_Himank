let cart = 0;
const cartCount = document.getElementById("cartCount");
const menuGrid = document.getElementById("menuGrid");

const menuItems = [
  {name:"Cheese Pizza",price:199,img:"https://images.unsplash.com/photo-1594007654729-407eedc4be65"},
  {name:"Veg Burger",price:99,img:"https://images.unsplash.com/photo-1550547660-d9450f859349"},
  {name:"Cold Coffee",price:79,img:"https://images.unsplash.com/photo-1509042239860-f550ce710b93"},
  {name:"Chocolate Cake",price:149,img:"https://images.unsplash.com/photo-1606313564200-e75d5e30476f"},
  {name:"French Fries",price:89,img:"https://images.unsplash.com/photo-1541592106381-b31e9677c0e5"},
  {name:"White Sauce Pasta",price:169,img:"https://images.unsplash.com/photo-1521389508051-d7ffb5dc8a0f"}
];

menuItems.forEach((item,index)=>{
  const card = document.createElement("div");
  card.classList.add("menu-card");

  card.innerHTML = `
    <img src="${item.img}">
    <div class="menu-content">
      <h4>${item.name}</h4>
      <p>₹${item.price}</p>
      <button class="add-btn" onclick="addToCart(${index}, this)">Add</button>
    </div>
  `;

  menuGrid.appendChild(card);
});

function addToCart(index,btn){
  cart++;
  cartCount.innerText = cart;

  btn.parentElement.innerHTML += `
    <div class="qty-control">
      <button onclick="changeQty(-1,this)">-</button>
      <span>1</span>
      <button onclick="changeQty(1,this)">+</button>
    </div>
  `;

  btn.remove();
}

function changeQty(change,el){
  const span = el.parentElement.querySelector("span");
  let qty = parseInt(span.innerText);
  qty += change;

  if(qty <= 0){
    el.parentElement.parentElement.innerHTML +=
      `<button class="add-btn" onclick="addToCart(0,this)">Add</button>`;
    el.parentElement.remove();
    cart--;
  } else {
    span.innerText = qty;
    cart += change;
  }

  cartCount.innerText = cart;
}

/* SCROLL HERO ANIMATION */
window.addEventListener("scroll",()=>{
  const hero = document.getElementById("heroSection");
  if(window.scrollY > 100){
    hero.classList.add("scrolled");
  } else {
    hero.classList.remove("scrolled");
  }
});