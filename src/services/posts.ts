import {db} from "../utils/dbServer";
import {Post} from "@prisma/client";


export const getPosts =  () => {
    return db.post.findMany();
}

export const getPostById = (id: number) => {
    return db.post.findUnique({where: {id: id}});
}

export const createPost = (post: Post) => {
    return db.post.create({
        data: post
    })
}

export const deletePost = (id: number) => {
    return db.post.findUnique({where: {id: id}});
}

export const updatePost = (id:number, post: Post) => {
    return db.post.update({
        where: { id },
        data: post
    })
}
