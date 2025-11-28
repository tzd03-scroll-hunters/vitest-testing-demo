import { Router } from 'express'

export const whateverRouter = Router()

whateverRouter.get("/", (req, res) => {
  res.json({
    message: "Whatever works works...."
  })
})