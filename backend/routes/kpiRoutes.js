import express from 'express';
import { getKPIS } from '../controllers/kpiController.js';

const router = express.Router();

router.get('/kpis', getKPIS);

export default router;