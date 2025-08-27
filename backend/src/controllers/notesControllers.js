import Note from "../models/Note.js"

export const getAllNotes= async (req,res) => {
     try {
        const notes = await Note.find().sort({createdAt:-1}); //this gets the lates one first
        res.status(200).json(notes)
        
     } catch (error) {
        console.error("Error in getAllNotes controller",error)
        res.status(500).json({message:"Internal server error"})
     }
}

export const addNewNotes = async (req,res) => {
    try {
        const {title,content} = req.body;
        const note = new Note({title,content})

        await note.save();
        res.status(201).json({note});
    } catch (error) {
        console.error("Error in addNewNotes controller",error);
        res.status(500).json({message:"Internal server error"})
        
    }
}

export const getNoteById = async (req,res) =>{
    try {
        const findNote = await Note.findById(req.params.id)
    if(!findNote) return res.status(404).json({message:"Note does not exist"})

        res.status(200).json({findNote})


    } catch (error) {
        console.error("error in getNoteById controller",error);
        res.status(500).json({message:"Internal server error"})
        
    }
}
export const updateNotes =async (req,res) => {
try {
    const { title, content } = req.body;
    const updateId = await Note.findByIdAndUpdate(
        req.params.id,
        {title,content},{
            new:true,
        }
    );
//to correct later on wrong id it directly hits catch block
    if(!updateId) return res.status(404).json({message:"Note not found"})

        res.status(200).json({updateId})
} catch (error) {
    console.error("Error in updateNotes controller",error)
    res.status(500).json("Internal server error")

}
}


export const deleteNotes = async (req,res) =>{
    try {
        const deleteNote = await Note.findByIdAndDelete(
        req.params.id
    )

    if(!deleteNote) return req.status(404).json({message:"Did not find the note"})
    res.status(200).json({message:"Note deleted successfully"})


    } catch (error) {
       console.error("Error in deleteNote controller",error) 
       res.status(500).json({message:"Internal server error"})
    }
}