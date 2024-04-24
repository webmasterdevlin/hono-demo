import {db} from "../utils/dbServer";
import {User} from "@prisma/client";


export const getUsers = () => {
    return db.user.findMany();
}

export const getUserById = (id: number) => {
    return db.user.findUnique({ where: { id: id } });
}

export const createUser = (user: User) => {
    return db.user.create({
        data: user
    })
}

export const deleteUser = (id: number) => {
    return db.user.delete({
        where: { id: id }
    })
}

export const updateUser = (id:number, user: User) => {
    return db.user.update({
        where: { id },
        data: user
    })
}
