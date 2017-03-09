'use strict'

console.log('products.js is linked');

var productListings = [
  {
    "id":1,
    "name": "Friendship",
    "price": 2500,
    "type": "people",
    "img": "assets/drowning.jpg",
  },
  {
    "id":2,
    "name": "Drowning",
    "price": 5000,
    "type": "physical",
    "img": "assets/drowning.jpg",
  },
  {
    "id":3,
    "name": "Spiders",
    "price": 10000,
    "type": "creature",
    "img": "assets/drowning.jpg",
  },
  {
    "id":4,
    "name": "Babies",
    "price": 1000,
    "type": "people",
    "img": "assets/spider.png",
  },
  {
    "id":5,
    "name": "Microbrews",
    "price": 1000,
    "type": "item",
    "img": "assets/spider.png",
  },
  {
    "id":6,
    "name": "Commitment",
    "price": 5000,
    "type": "feeling",
    "img": "assets/spider.png",
  },
  {
    "id":7,
    "name": "Baby Sharks",
    "price": 15000,
    "type": "creatures",
    "img": "assets/spider.png",
  },
  {
    "id":8,
    "name": "Aliens",
    "price": 15000,
    "type": "people",
    "img": "assets/spider.png",
  },
  {
    "id":9,
    "name": "Vegetables",
    "price": 1000,
    "type": "item",
    "img": "assets/spider.png",
  },
  {
    "id":10,
    "name": "XML",
    "price": 2000,
    "type": "feeling",
    "img": "assets/spider.png",
  },
  {
    "id":11,
    "name": "CSS",
    "price": 4000,
    "type": "feeling",
    "img": "assets/drowning.jpg",
  },
  {
    "id":12,
    "name": "Failure",
    "price": 30000,
    "type": "feeling",
    "img": "assets/drowning.jpg",
  },
  {
    "id":13,
    "name": "Robot Clowns",
    "price": 10000,
    "type": "creature",
    "img": "assets/drowning.jpg",
  },
  {
    "id":14,
    "name": "Blood",
    "price": 1000,
    "type": "item",
    "img": "assets/drowning.jpg",
  },
  {
    "id":15,
    "name": "Beards",
    "price": 1000,
    "type": "item",
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

      $("#productsList").append(`<div class="col-md-6 ${prodType} ${prodPrice}"><img class="img-responsive center-block" src=${prodImg}><div class="row"><div class="col-md-6"><p class="text-center">${prodName}</p></div><div class="col-md-6"><p class="text-center">${prodPrice}</p></div></div><div class="row"><br></div></div>`);
      // console.log(result.id, result.price);
    });
  }).catch(function (error) {
    console.log('Error:', error)
  });
