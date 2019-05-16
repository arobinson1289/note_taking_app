const router = require("express").Router();
const connection = require("../../db/connection");

router.get("/api/notes", function (req, res) {
  connection.query("SELECT * FROM notebook", function (err, dbNotes) {
    if (err) throw err;
    res.send(dbNotes);
  });
});

router.post("/api/notes", function (req, res) {

    console.log(req.body)
  connection.query("INSERT INTO notebook SET ?", req.body, function (err, result) {
    if (err) throw err;
    res.redirect("/allnotes");
  });
})

router.delete("/api/notes/:id", function (req, res) {
    connection.query("DELETE FROM notebook WHERE id = ?", req.params.id,  function (err, result) {
      if (err) throw err;
      res.send(result);
    });
  });

router.get("/api/allnotes", function (req, res){
    connection.query("SELECT * FROM notebook", function (err, dbNotes) {
     if (err) throw err;
    res.send(dbNotes);   
    console.log("all notes page works")
    });
    
});

  module.exports = router;