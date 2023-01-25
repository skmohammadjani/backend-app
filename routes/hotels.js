import express from "express";
import { createHotel, DeleteHotel, GetAllHotels, GetHotel, UpdateHotel } from "../controllers/hotel.js";
import { createError } from "../utils/error.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router();

//CREATE
router.post('/', verifyAdmin, createHotel);
//UPDATE
router.put('/:id', verifyAdmin, UpdateHotel);
//DELETE
router.delete('/:id', verifyAdmin, DeleteHotel);
//GET
router.get('/:id', GetHotel);
//GET ALL
router.get('/', GetAllHotels);

export default router;