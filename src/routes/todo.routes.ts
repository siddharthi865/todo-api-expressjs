import { Router } from "express";

import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo,
} from "../controllers/todo.controller.js";
import { todoSchema } from "../validators/todo.validator";
import validate from "../middleware/validate.middleware";

const router = Router();

router.get("/", getTodos);
router.post("/", validate(todoSchema), createTodo);
router.put("/:id", validate(todoSchema), updateTodo);
router.delete("/:id", deleteTodo);

export default router;
