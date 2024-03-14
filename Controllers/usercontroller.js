import { getUsers, getUserByID, addUser, deleteUser, editUser } from '../Model/db.js'

export default {
    getAllUSers : async (req, res) => {
        res.send(await getUsers());
    },
    getUser : async (req, res) => {
        res.send(await getUserByID(+req.params.id))
    },
    addNewUser : async (req, res) => {

        res.send(await getUsers());
    },
    deleteUserByID : async (req, res) => {

        await deleteUser(+req.params.id)

        res.send(await getUsers())

    }, 
    editUserByID : async (req, res) => {
        
        let { user_profile, user_email, user_password, user_role, user_image } = req.body;

        const user = await getUserByID(+req.params.id)

        user_profile ? user_profile : { user_profile } = user

        user_email ? user_email : { user_email } = user

        user_password ? user_password : { user_password } = user

        user_role ? user_role : { user_role } = user

        user_image ? user_role : { user_role } = user

        await editUser(user_profile, user_email, user_password, user_role, user_image, +req.params.id);

        res.send(await getUsers())

    }
}