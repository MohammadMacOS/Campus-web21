import UserController from "../controller/UserController.js";

const routes = (app) => {
    const userUrl = '/users'
    const userUrlById = `${userUrl}/:userId`
    const searchUsers = '/searchUsers'

    app.post(userUrl, UserController.createUser)
    app.get(userUrl, UserController.getAllUsers)
    app.get(userUrlById, UserController.getUserById)
    app.get(searchUsers, UserController.getUserByUsername)
    app.put(userUrlById, UserController.updateUserById)
    app.delete(userUrlById, UserController.deleteUserById)
};

export default {
    routes
}
