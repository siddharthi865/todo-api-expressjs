import { Request, Response, NextFunction } from "express";

import prisma from "../config/prisma";

export const getTodos = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const todos = await prisma.todo.findMany();
    res.json(todos);
  } catch (err) {
    next(err);
  }
};

export const createTodo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { title } = req.body;

    const todo = await prisma.todo.create({
      data: { title },
    });

    res.status(201).json(todo);
  } catch (err) {
    next(err);
  }
};

export const updateTodo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = Number(req.params.id);
    const { title, completed } = req.body;

    const todo = await prisma.todo.update({
      where: { id },
      data: { title, completed },
    });

    res.json(todo);
  } catch (err) {
    next(err);
  }
};

export const deleteTodo = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const id = Number(req.params.id);

    await prisma.todo.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (err) {
    next(err);
  }
};
