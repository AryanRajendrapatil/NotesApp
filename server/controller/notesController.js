const noteSchema = require("../model/note.schema");
const Note = require("../model/note.schema");
const get_all_notes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch notes", details: err.message });
    }
};

const add_note = async (req, res, next) => {
    
    try {
        const note = new Note({
            title: req.body.title,
            description: req.body.description
        });
        await note.save();
        
        return next();
    } catch (error) {
        res.status(400).json({ error: "Error adding note" });
    }
};

const update_note = async (req, res) => {
    try {
        const {change,title,description}= await req.body;
       
       



       
        const note=await Note.findOneAndReplace({title:change},{title,description},{new:true});
          if (!note) {
            return res.status(404).send("Note not found");
        }
       
        return res.send("note updated successfully");
    } catch (error) {
        res.status(400).send("Error updating note");
    }
};

const delete_note = async (req, res) => {
    try {
        const {title}= await req.body;
        const note= await Note.findOne({title})
         console.log(note.title);
         if (!note) {

            return res.send("note not found");
        }
       

        const deletenote = await Note.findByIdAndDelete(note._id)
        res.send("note deleted successflly")
    }

    catch {
        res.send("error deleting note")
    }

}

module.exports = {
    get_all_notes,
    add_note,
    update_note,
    delete_note
}