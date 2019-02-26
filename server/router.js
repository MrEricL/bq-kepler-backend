import express, { Router} from 'express';
import {getAll} from './controller/query';
import {getGeoid} from './controller/geoid';

const router = Router();

// Loan Endpoints ============================================================
router.route('/ok')
	.get(getAll);


router.route('/geoid')
	.post(getGeoid);


// End =========================================================================
export default router;
