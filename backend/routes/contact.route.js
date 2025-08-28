import express from 'express';
import { createContact, getContactById, getContacts } from '../controller/contact.controller.js';

const router = express.Router()

router.post("/", createContact)
router.get("/", getContacts)
router.get("/:id", getContactById )

export default router;
