const express = require("express");
const router = express.Router();
const knex = require("../db/client");

router.get('/', (req, res) => {
  res.render('main'); 
});

router.get("/new", (req, res) => {
  res.render("new");
});

// Enter new cohort
router.post("/new", (req, res) => {
  console.log("Saving data to database from new teams")
  knex("cohorts")
    .insert({
      name: req.body.name,
      logoUrl: req.body.logoUrl,
      members: req.body.members
    })
    .returning("*")
    .then(cohorts => {
      res.render('show', { cohort: cohorts[0], pickerMethod: undefined, quantity: 0 });
    });
});

// List of all the cohorts
router.get('/cohorts', (req, res) => {
  knex("cohorts")
    .orderBy("name")
    .then(cohorts => {
      res.render("index", { cohorts });
    });
});

// Display a specific cohort and team picker
router.get('/teams/:id', (req, res) => {
  const id = req.params.id;
  knex("cohorts")
  .where("id", id)
  .first()
  .then(cohort => {
    res.render("show", { cohort, pickerMethod: undefined, quantity: 0 });
  });
})
router.post("/teams", (req, res) => {
  const pickerMethod = req.body.pickerMethod
  const quantity = req.body.quantity
  const id = req.body.id
  knex("cohorts")
  .where("id", id)
  .first()
  .then((cohort) => {
    res.render("show", { cohort, pickerMethod, quantity });
  });
})

// Edit cohort
router.get("/teams/:id/edit", (req, res) => {
  const id = req.params.id;
    knex("cohorts")
    .where("id", id)
    .first()
    .then(cohort => {
      res.render("edit", { cohort})
    })
})
router.patch("/teams/:id", (req, res) => {
  const id = req.params.id;
  knex("cohorts")
    .where("id", id)
    .update({
      name: req.body.name,
      imageUrl: req.body.imageUrl,
      members: req.body.members
    })
    .then(() => {
      res.redirect(`/teams/${id}`);
    });
});

// Delete cohort
router.delete("/teams/:id", (req, res) => {
  const id = req.params.id;
  knex("cohorts")
    .where("id", id)
    .del()
    .then(() => {
      res.redirect("/cohorts");
    });
});

module.exports = router;