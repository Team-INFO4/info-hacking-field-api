import { Router, Request, Response } from 'express'
import { userInteractor } from '../../core/interactors'

const router = Router()

router.get('/:id', async (req: Request, res: Response) => {
  const { id } = req.params

  const { status, data, error } = await userInteractor.getById(parseInt(id))

  res.status(status).json({ data, error })
})

export default router
