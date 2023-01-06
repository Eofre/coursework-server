import express from "express";
import subscriptionController from "../controllers/subscription.controller.js";

const router = express.Router();

router.get("/", subscriptionController.getSubscriptions);
router.post("/", subscriptionController.createSubscription);

export default router;
