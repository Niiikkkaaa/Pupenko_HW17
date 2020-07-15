'use strict';
//Доступ к обьектам
function handleCategoryClick(event){
  const categoryId = event.target.getAttribute('data-id');

  const selectedCategory = categories.find(function(category) {
    return category.id === categoryId;
  });

  const products = selectedCategory.items;
  showProducts(products, categoryId);//Вывод товаров
}

function handleProductClick(event) {
  const productId = event.target.getAttribute('data-id');
  const categoryId = event.target.getAttribute('data-category-id');

  const selectedCategory = categories.find(function(category) {
    return category.id === categoryId;
  });

  const selectedProduct = selectedCategory.items.find(function(product) {
    return product.id === productId;
  });

  showProduct(selectedProduct);
}

//Вывод товаров
function showItems(items, parentId, clickHandler, additionalAttributes) {
  const parent = document.getElementById(parentId);
  parent.innerHTML = '';

  for (let i = 0; i < items.length; i++) {
    const element = document.createElement('div');
    element.innerText = items[i].name;
    element.setAttribute('data-id', items[i].id);

    if (additionalAttributes && additionalAttributes.length) {
      for (let j = 0; j < additionalAttributes.length; j++) {
        element.setAttribute(additionalAttributes[j].key, additionalAttributes[j].value);
      }
    }

    element.addEventListener('click', clickHandler);

    parent.appendChild(element);
  }
}

//Вывод категорий
function showCategories() {
  showItems(categories, 'categories', handleCategoryClick);
}

//Вывод товаров
function showProducts(items,categoryId) {
  const attributes = [
  {
    key: 'data-category-id',
    value: categoryId,
  }
  ];
  showItems(items, 'products', handleProductClick, attributes);
}
//Вывод информации о товаре
function showProduct(product) {
  const parent = document.getElementById('product_info');
  parent.innerHTML = '';

  const title = document.createElement('h2');
  title.textContent = product.name;
  parent.appendChild(title);

  const price = document.createElement('div');
  price.textContent = product.price;
  parent.appendChild(price);

  const buyButton = document.createElement('input');
  buyButton.setAttribute('type', 'button');
  buyButton.setAttribute('value', 'Buy');
  buyButton.addEventListener('click', handleBuyButtonClick);
  parent.appendChild(buyButton);
}

function handleBuyButtonClick() {
  // TODO:
  const myform = document.forms.myform;
  myform.style.display = 'block';
  const saveButton = document.getElementById('save-button');
  saveButton.addEventListener('click', handleSaveButtonClick);
}

function handleSaveButtonClick() {
  const myform = document.forms.myform;
  const name = myform.elements.name.value;
  const surname = myform.elements.surname.value;
  const city = myform.elements.city.value;
  const post = myform.elements.post.value;
  const number = myform.elements.number.value;
  const comment = myform.elements.comment.value;


  document.write("<table border=1 cellspacing='0'>");
  document.write('<tr>');
  document.write('<td>');
  document.write('name');
  document.write("</td>");
  document.write('<td>');
  document.write(name);
  document.write("</td>");
  document.write("</tr>");
  document.write('<tr>');
  document.write('<td>');
  document.write('surname');
  document.write("</td>");
  document.write('<td>');
  document.write(surname);
  document.write("</td>");
  document.write("</tr>");
  document.write('<tr>');
  document.write('<td>');
  document.write('city');
  document.write("</td>");
  document.write('<td>');
  document.write(city);
  document.write("</td>");
  document.write("</tr>");
  document.write('<tr>');
  document.write('<td>');
  document.write('post');
  document.write("</td>");
  document.write('<td>');
  document.write(post);
  document.write("</td>");
  document.write("</tr>");
  document.write("</tr>");
  document.write('<tr>');
  document.write('<td>');
  document.write('number');
  document.write("</td>");
  document.write('<td>');
  document.write(number);
  document.write("</td>");
  document.write("</tr>");
  document.write("</tr>");
  document.write("</tr>");
  document.write('<tr>');
  document.write('<td>');
  document.write('comment');
  document.write("</td>");
  document.write('<td>');
  document.write(comment);
  document.write("</td>");
  document.write("</tr>");
  document.write("</table>");
}










