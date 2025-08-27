import express from "express";
import {
  addNewNotes,
  deleteNotes,
  getAllNotes,
  updateNotes,
  getNoteById
} from "../controllers/notesControllers.js";

const router =express.Router();

router.get("/", getAllNotes);
router.get("/:id", getNoteById);
router.post("/", addNewNotes);

router.put("/:id", updateNotes);
router.delete("/:id", deleteNotes);


export default router;