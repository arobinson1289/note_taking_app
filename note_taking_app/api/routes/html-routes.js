const router = require("express").Router();
const path = require("path");


router.get("/allnotes", function(req, res){
  res.sendFile(path.join(__dirname, "../../public/notespage.html"));
})

// All other paths serve the index.html page
router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../../public/notes.html"));
});

module.exports = router;