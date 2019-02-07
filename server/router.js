import express, { Router} from 'express';
import {getAll} from './controller/query'

const router = Router();

// Loan Endpoints ============================================================
router.route('/')
	.get(getAll);


// End =========================================================================
export default router;
