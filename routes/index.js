var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

  const items = [
    {
        image: {
            thumbnail: "/images/image-waffle-thumbnail.jpg",
            mobile: "/images/image-waffle-mobile.jpg",
            tablet: "/images/image-waffle-tablet.jpg",
            desktop: "/images/image-waffle-desktop.jpg"
        },
        name: "Waffle with Berries",
        category: "Waffle",
        price: 6.50
    },
    {
      image: {
        thumbnail: "/images/image-creme-brulee-thumbnail.jpg",
        mobile: "/images/image-creme-brulee-mobile.jpg",
        tablet: "/images/image-creme-brulee-tablet.jpg",
        desktop: "/images/image-creme-brulee-desktop.jpg"
    },
      name: "Vanilla Bean Crème Brûlée",
      category: "Crème Brûlée",
      price: 7.00
   },
  ];

  res.render('index', { items });
});

module.exports = router;
