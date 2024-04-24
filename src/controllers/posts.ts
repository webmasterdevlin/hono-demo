import { Hono } from "hono";
import {createPost, deletePost, getPostById, getPosts, updatePost} from "../services";
import {Post} from "@prisma/client";

const posts = new Hono();


posts.get("/", async (c) => {
  const posts = await getPosts();
  return c.json(posts);
});

posts.post("/", async (c) => {
  const body = await c.req.json<Post>();
  const createdPost = await createPost(body);
  return c.json(createdPost, 201);
});

posts.get("/:id", async (c) => {
  const id = parseInt(c.req.param('id'));
  const post = await getPostById(id);
  return c.json(post);
});

posts.put("/:id", async (c) => {
  const id = parseInt(c.req.param('id'));
  const body = await c.req.json<Post>();
  const updatedPost = await updatePost( id, body);
  return c.json(updatedPost);
})

posts.delete("/:id", async (c) => {
  const id = parseInt(c.req.param('id'));
  const deletedPost = await deletePost(id);
  return c.json(deletedPost);
});

export const routerPosts = (app: Hono) => app.route("/posts", posts);
