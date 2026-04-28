const products = [
  {name:"Potato Chips", price:20, category:"snacks", img:"https://images.unsplash.com/photo-1585238342024-78d387f4a707"},
  {name:"Nachos", price:50, category:"snacks", img:"https://images.unsplash.com/photo-1604908176997-125f25cc6f3d"},
  {name:"Almonds", price:120, category:"nuts", img:"https://images.unsplash.com/photo-1615485925600-97237c4fc1ec"},
  {name:"Cashews", price:140, category:"nuts", img:"https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2"},
  {name:"Marie Biscuits", price:30, category:"biscuits", img:"https://images.unsplash.com/photo-1589987607627-8a6e92cba6f6"},
  {name:"Cookies", price:60, category:"biscuits", img:"https://images.unsplash.com/photo-1599785209707-28bfa0d5dbf4"},
  {name:"Cold Drink", price:40, category:"drinks", img:"https://images.unsplash.com/photo-1581636625402-29b2a704ef13"},
  {name:"Juice", price:35, category:"drinks", img:"https://images.unsplash.com/photo-1577805947697-89e18249d767"},
  {name:"Rice 1kg", price:60, category:"ration", img:"https://images.unsplash.com/photo-1586201375761-83865001e31c"},
  {name:"Wheat Flour", price:50, category:"ration", img:"https://images.unsplash.com/photo-1604908177522-42945d86b88f"}
];

let cart = [];

function displayProducts(list){
  const container = document.getElementById("productList");
  container.innerHTML = "";
  list.forEach((p,i)=>{
    container.innerHTML += `
      <div class="product">
        <img src="${p.img}">
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
        <button onclick="addToCart(${i})">Add</button>
      </div>
    `;
  });
}

displayProducts(products);

// SEARCH
document.getElementById("searchInput").addEventListener("keyup", function(){
  let val = this.value.toLowerCase();
  let filtered = products.filter(p => p.name.toLowerCase().includes(val));
  displayProducts(filtered);
});

// FILTER
function filterProducts(cat){
  if(cat === "all") displayProducts(products);
  else displayProducts(products.filter(p => p.category === cat));
}

// CART
function addToCart(index){
  cart.push(products[index]);
  updateCart();
}

function updateCart(){
  let list = document.getElementById("cartItems");
  let total = 0;
  list.innerHTML = "";
  cart.forEach(item=>{
    total += item.price;
    list.innerHTML += `<li>${item.name} - ₹${item.price}</li>`;
  });
  document.getElementById("total").innerText = total;
}

// WHATSAPP ORDER
function orderWhatsApp(){
  let phone = "919876543210"; // replace
  let msg = "Order:%0A";
  cart.forEach(i=>{
    msg += `${i.name} - ₹${i.price}%0A`;
  });
  msg += `Total: ₹${document.getElementById("total").innerText}`;
  window.open(`https://wa.me/${phone}?text=${msg}`);
}
