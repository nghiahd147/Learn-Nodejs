import express from 'express'
const router = express.Router()

import { detailNewsControllers, getNewsControllers } from '../controllers/NewsControllers.js'
router.use('/:id', detailNewsControllers)
router.use('/', getNewsControllers)

export default router