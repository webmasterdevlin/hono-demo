import { Hono } from "hono";
import {createUser, deleteUser, getUserById, getUsers, updateUser} from "../services";
import {User} from "@prisma/client";

const users = new Hono();


users.get("/", async (c) => {
  const users = await getUsers();
  return c.json(users);
});

users.post("/", async (c) => {
  const body = await c.req.json<User>();
  const createdUser = await createUser(body);
  return c.json(createdUser, 201);
});

users.get("/:id", async (c) => {
  const id = parseInt(c.req.param('id'));
  const user = await getUserById(id);
  return c.json(user);
});

users.put("/:id", async (c) => {
  const id = parseInt(c.req.param('id'));
  const body = await c.req.json<User>();
  const updatedUser = await updateUser(id, body);
  return c.json(updatedUser);
})

users.delete("/:id", async (c) => {
  const id = parseInt(c.req.param('id'));
  await deleteUser(id);
  return c.json({ message: "User deleted successfully" });
});

export const routerUsers = (app: Hono) => app.route("/users", users);
