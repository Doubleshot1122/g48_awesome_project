'use strict'

console.log('products.js is linked');

var productListings = [
  {
    "id":1,
    "name": "Drowning-1",
    "price": "$1000",
    "type": "drowning",
    "img": "assets/drowning.jpg",
  },
  {
    "id":2,
    "name": "Drowning-2",
    "price": "$2000",
    "type": "drowning",
    "img": "assets/drowning.jpg",
  },
  {
    "id":3,
    "name": "Drowning-3",
    "price": "$3000",
    "type": "drowning",
    "img": "assets/drowning.jpg",
  },
  {
    "id":4,
    "name": "Drowning-4",
    "price": "$4000",
    "type": "drowning",
    "img": "assets/spider.png",
  },
  {
    "id":5,
    "name": "Drowning-5",
    "price": "$5000",
    "type": "drowning",
    "img": "assets/spider.png",
  },
  {
    "id":6,
    "name": "Drowning-6",
    "price": "$6000",
    "type": "drowning",
    "img": "assets/spider.png",
  },
  {
    "id":7,
    "name": "Drowning-7",
    "price": "$7000",
    "type": "drowning",
    "img": "assets/spider.png",
  },
  {
    "id":8,
    "name": "Drowning-8",
    "price": "$8000",
    "type": "drowning",
    "img": "assets/beard.jpg",
  },
  {
    "id":9,
    "name": "Drowning-9",
    "price": "$9000",
    "type": "drowning",
    "img": "assets/beard.jpg",
  },
  {
    "id":10,
    "name": "Drowning-10",
    "price": "$10,000",
    "type": "drowning",
    "img": "assets/beard.jpg",
  },
  {
    "id":11,
    "name": "Drowning-11",
    "price": "$11,000",
    "type": "drowning",
    "img": "assets/drowning.jpg",
  },
  {
    "id":12,
    "name": "Drowning-12",
    "price": "$12,000",
    "type": "drowning",
    "img": "assets/drowning.jpg",
  },
  {
    "id":13,
    "name": "Drowning-13",
    "price": "$13,000",
    "type": "drowning",
    "img": "assets/drowning.jpg",
  },
  {
    "id":14,
    "name": "Drowning-14",
    "price": "$14,000",
    "type": "drowning",
    "img": "assets/drowning.jpg",
  },
  {
    "id":15,
    "name": "Drowning-15",
    "price": "$15,000",
    "type": "drowning",
    "img": "assets/drowning.jpg",
  },
];



$.ajax({
    url: 'http://galvanize-student-apis.herokuapp.com/gcommerce/products',
    method: 'GET'
  }).then(function (result) {
    $.each(result, function (i, result) {
      function matchProdIDs(productListings) {
        return productListings.id === result.id;
      }

      var currentItem = productListings.find(matchProdIDs);
      var prodName = currentItem.name;
      var prodType = currentItem.type;
      var prodPrice = currentItem.price;
      var prodImg = currentItem.img;

      $("#productsList").append(`<div class="col-md-6"><img class="img-responsive center-block" src=${prodImg}><div class="row"><div class="col-md-6"><p class="text-center">${prodName}</p></div><div class="col-md-6"><p class="text-center">${prodPrice}</p></div></div><div class="row"><br></div></div>`);
      // console.log(result.id, result.price);
    });
  }).catch(function (error) {
    console.log('Error:', error)
  });
