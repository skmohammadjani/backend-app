import express from "express";
import { createHotel, DeleteHotel, GetAllHotels, GetHotel, UpdateHotel } from "../controllers/hotel.js";
import { createError } from "../utils/error.js";

const router = express.Router();

//CREATE
router.post('/', createHotel);
//UPDATE
router.put('/:id', UpdateHotel);
//DELETE
router.delete('/:id', DeleteHotel);
//GET
router.get('/:id', GetHotel);
//GET ALL
router.get('/', GetAllHotels);

export default router;