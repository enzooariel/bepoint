// backend/routes/eventRoutes.js
import express from 'express';
import {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
} from '../controllers/eventController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(protect, createEvent).get(protect, getEvents);
router.route('/:id').put(protect, updateEvent).delete(protect, deleteEvent);

export default router;