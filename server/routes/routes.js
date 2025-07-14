const express = require('express')
const  router = express.Router()
const {get_all_notes,add_note,update_note,delete_note} =require('../controller/notesController')

router.get("/allnotes",get_all_notes);
router.post("/addnote", add_note, get_all_notes);
router.put("/updatenote", update_note);
router.delete("/deletenote",delete_note);

module.exports = router;
