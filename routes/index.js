var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const items = [
    {
      "image": {
           "thumbnail": "/images/image-waffle-thumbnail.jpg",
           "mobile": "/images/image-waffle-mobile.jpg",
           "tablet": "/images/image-waffle-tablet.jpg",
           "desktop": "/images/image-waffle-desktop.jpg"
      },
      "button": {
        "text": "Add to Cart",
        "url": "/cart/add",
        "style": 'bg-orange-500 text-white rounded-full py-2 px-4 hover:bg-orange-600',
        "svg": "<svg xmlns='http://www.w3.org/2000/svg' width='21' height='20' fill='none' viewBox='0 0 21 20'><g fill='#C73B0F' clip-path='url(#a)'><path d='M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z' /><path d='M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z' /></g><defs><clipPath id='a'><path fill='#fff' d='M.333 0h20v20h-20z' /></clipPath></defs></svg>"
      },
      "name": "Waffle with Berries",
      "category": "Waffle",
      "price": 6.50
   },
   {
       "image": {
           "thumbnail": "/images/image-creme-brulee-thumbnail.jpg",
           "mobile": "/images/image-creme-brulee-mobile.jpg",
           "tablet": "/images/image-creme-brulee-tablet.jpg",
           "desktop": "/images/image-creme-brulee-desktop.jpg"
       },
       "name": "Vanilla Bean Crème Brûlée",
       "category": "Crème Brûlée",
       "price": 7.00
    },
    {
       "image": {
           "thumbnail": "/images/image-macaron-thumbnail.jpg",
           "mobile": "/images/image-macaron-mobile.jpg",
           "tablet": "/images/image-macaron-tablet.jpg",
           "desktop": "/images/image-macaron-desktop.jpg"
       },
       "name": "Macaron Mix of Five",
       "category": "Macaron",
       "price": 8.00
    },
    {
       "image": {
           "thumbnail": "/images/image-tiramisu-thumbnail.jpg",
           "mobile": "/images/image-tiramisu-mobile.jpg",
           "tablet": "/images/image-tiramisu-tablet.jpg",
           "desktop": "/images/image-tiramisu-desktop.jpg"
       },
       "name": "Classic Tiramisu",
       "category": "Tiramisu",
       "price": 5.50
    },
{
  "image": {
      "thumbnail": "/images/image-baklava-thumbnail.jpg",
      "mobile": "/images/image-baklava-mobile.jpg",
      "tablet": "/images/image-baklava-tablet.jpg",
      "desktop" : "/images/image-baklava-desktop.jpg"
  },
  "name": "Pistachio Baklava",
  "category": "Baklava",
  "price": 4.00
},
{
  "image": {
      "thumbnail": "/images/image-meringue-thumbnail.jpg",
      "mobile": "/images/image-meringue-mobile.jpg",
      "tablet": "/images/image-meringue-tablet.jpg",
      "desktop": "/images/image-meringue-desktop.jpg"
  },
  "name": "Lemon Meringue Pie",
  "category": "Pie",
  "price": 5.00
},
{
  "image": {
      "thumbnail": "/images/image-cake-thumbnail.jpg",
      "mobile": "/images/image-cake-mobile.jpg",
      "tablet": "/images/image-cake-tablet.jpg",
      "desktop": "/images/image-cake-desktop.jpg"
  },
  "name": "Red Velvet Cake",
  "category": "Cake",
  "price": 4.50
},
{
  "image": {
      "thumbnail": "/images/image-brownie-thumbnail.jpg",
      "mobile": "/images/image-brownie-mobile.jpg",
      "tablet": "/images/image-brownie-tablet.jpg",
      "desktop": "/images/image-brownie-desktop.jpg"
  },
  "name": "Salted Caramel Brownie",
  "category": "Brownie",
  "price": 4.50
},
{
  "image": {
      "thumbnail": "/images/image-panna-cotta-thumbnail.jpg",
      "mobile": "/images/image-panna-cotta-mobile.jpg",
      "tablet": "/images/image-panna-cotta-tablet.jpg",
      "desktop": "/images/image-panna-cotta-desktop.jpg"
  },
  "name": "Vanilla Panna Cotta",
  "category": "Panna Cotta",
  "price": 6.50
}
  ];

  res.render('index', { items });
});

module.exports = router;
