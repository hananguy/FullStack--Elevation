import express from "express";
const router = express.Router();

import { GetUsersFromModel, GetUserByIdFromModel, AddUserToData} from "../controllers/usersController.js";
import validateId from "../middlewares/validateId.js";

router.get('/', GetUsersFromModel);
router.get('/:id', validateId, GetUserByIdFromModel);
router.post('/', AddUserToData)

export default router;