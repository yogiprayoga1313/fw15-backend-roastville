import { Router } from "express"
import * as transactionController from "../controllers/transactions.controller.js"

const transactionRouter = Router()

transactionRouter.get("/", transactionController.getAll)
transactionRouter.get("/manage", transactionController.getMyTransaction)
transactionRouter.post("/", transactionController.makeTransaction)

export default transactionRouter
