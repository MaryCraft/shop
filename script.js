const sweaters = [
    {
      image: "images/001.jpg",
      description: "Теплый свитер из шерсти",
      price: 2500
    },
    {
      image: "images/002.jpg",
      description: "Стильный свитер с узором",
      price: 3000
    },
    {
      image: "images/003.jpg",
      description: "Мягкий свитер из кашемира",
      price: 4000
    },
    {
      image: "images/004.jpg",
      description: "Классический свитер с воротником",
      price: 2800
    },
    {
      image: "images/005.jpg",
      description: "Уютный свитер с капюшоном",
      price: 3500
    },
    {
      image: "images/006.jpg",
      description: "Тонкий свитер из хлопка",
      price: 2200
    },
    {
        image: "images/007.jpg",
        description: "Тонкий свитер из хлопка",
        price: 2200
      },
      {
        image: "images/008.jpg",
        description: "Тонкий свитер из хлопка",
        price: 2200
      },
      {
        image: "images/009.jpg",
        description: "Тонкий свитер из хлопка",
        price: 2200
      }
      
  ];
  
  // Функция для создания блока с информацией о свитере
  function createProductBlock(sweater) {
    const block = document.createElement("div");
    block.classList.add("product-block");
  
    const image = document.createElement("img");
    image.src = sweater.image;
    block.appendChild(image);
  
    const description = document.createElement("h3");
    description.textContent = sweater.description;
    block.appendChild(description);
  
    const price = document.createElement("p");
    price.textContent = `Цена: ${sweater.price} руб.`;
    block.appendChild(price);
    return block;}
    const productContainer = document.getElementById("product-container");

sweaters.forEach(sweater => {
  const productBlock = createProductBlock(sweater);
  productContainer.appendChild(productBlock);
});


