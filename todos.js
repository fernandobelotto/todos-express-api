import { v4 as uuid } from "uuid";

const todos = {};

export function listTodos(_req, res, next) {
  res.json(Object.values(todos));
}

export function createTodo(req, res, next) {
  const id = uuid();
  const content = req.body.content;
  const createdAt = new Date().toISOString();

  const updatedAt = new Date().toISOString();

  const newTodo = {
    id,
    content,
    createdAt,
    updatedAt,
  };

  todos[id] = newTodo;

  res.status(201).json(newTodo);
}

export function updateTodo(req, res, next) {
  const id = req.params.id;
  const todo = todos[id];
  console.log(todo)
  todo.content = req.body.content;
  todo.updatedAt = new Date().toISOString();

  res.json(todos[id]);
}

export function deleteTodo(req, res, next) {
    const id = req.params.id

    delete todos[id]

    res.json(todos[id])
}