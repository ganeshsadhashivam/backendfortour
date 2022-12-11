const router = require("express").Router();

const Tour = require("../models/tour.model");

router.route("/").get((req, res) => {
  Tour.find()
    .then((tour) => res.json(tour))
    .catch((err) => res.status(400).json("Error: " + err));
});

//PUT request

router.route("/add").put((req, res) => {
  const name = req.body.name;
  const info = req.body.info;
  const placeImage = req.body.placeImage;
  const rating = Number(req.body.rating);
  const price = Number(req.body.price);

  const tour = new Tour({
    name,
    info,
    placeImage,
    rating,
    price,
  });

  tour
    .save()
    .then(() => res.json("Tour added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Tour.findById(req.params.id)
    .then((tour) => res.json(tour))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").delete((req, res) => {
  Books.findByIdAndDelete(req.params.id)
    .then(() => res.json("Books deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/update/:id").put((req, res) => {
  Tour.findById(req.params.id)
    .then((tour) => {
      tour.name = req.body.name;

      tour.placeImage = req.body.placeImage;
      tour.rating = Number(req.body.rating);
      tour.price = Number(req.body.price);

      tour
        .save()
        .then(() => res.json("Tour updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
