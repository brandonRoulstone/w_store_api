import { getUsers, getUserByID, addUser, deleteUser, editUser } from '../Model/db.js'

export default {
    getAllUSers : async (req, res) => {
        try {
            res.send(await getUsers(req.body.user_profile));
        } catch (error) {
            res.status(404).json({
                msg: "Route does not exist or server is down!"
            })
        }
    },
    getUser : async (req, res) => {
        try {
            res.send(await getUserByID(+req.params.id))
        } catch (error) {
            res.status(404).json({
                msg: "Unable to get a user that does not exist"
            })
        }
    },
    addNewUser : async (req, res) => {

        try {

            res.send(await getUsers());

        } catch (error) {
            res.status(404).json({
                msg: "Make sure all inputs are filled out"
            })
        }
    },
    deleteUserByID : async (req, res) => {

        try {

            await deleteUser(+req.params.id)

            res.send(await getUsers())

        } catch (error) {
            res.status(404).json({
                msg: "Unable to delete a user that does not exist"
            })
        }

    }, 
    editUserByID : async (req, res) => {

        try {

            let { user_profile, user_email, user_password, user_role, user_image } = req.body;

            const [user] = await getUserByID(+req.params.id)
    
            user_profile ? user_profile : { user_profile } = user
    
            user_email ? user_email : { user_email } = user
    
            user_password ? user_password : { user_password } = user
    
            user_role ? user_role : { user_role } = user
    
            user_image ? user_role : { user_role } = user
    
            await editUser(user_profile, user_email, user_password, user_role, user_image, +req.params.id);
    
            res.send(await getUsers())

        } catch (error) {
            res.status(404).json({
                msg: "Unable to upadate a user that does not exist"
            })
        }

    }
}