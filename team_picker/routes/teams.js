const express = require("express");
const router = express.Router();
const knex = require("../db/client");

router.get('/', (req, res) => {
  res.render('main'); 
});

router.get("/new", (req, res) => {
  res.render("new");
});

router.post("/new", (req, res) => {
  console.log("Saving data to database from new teams")
  knex("cohorts")
    .insert({
      name: req.body.name,
      logoUrl: req.body.logoUrl,
      members: req.body.members
    })
    // .returning("*")
    .then(() => {
      res.redirect('index');
    });
});

router.get('/cohorts', (req, res) => {
  knex("cohorts")
    .orderBy("name")
    .then(cohorts => {
      // console.log(cohorts)
      res.render("index", { cohorts });
    });
});

router.get('/teams/:id', (req, res) => {
  const id = req.params.id
  knex("cohorts")
  .where("id", id)
  .first()
  .then(cohort => {
    console.log(cohort)
    res.render("teams", { cohort });
  });
})

router.get("/teams", (req, res) => {
  res.render("teams");
});




module.exports = router;