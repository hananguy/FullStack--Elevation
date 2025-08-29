import {GetUsers, GetUserById, AddUser} from '../model/usersModel.js'

export function GetUsersFromModel(req,res)
{
    const users = GetUsers();
    res.status(200).json(users);
}

export function GetUserByIdFromModel(req,res)
{
    const user = GetUserById(req.params.id);
    res.status(200).json(user);
}
export function AddUserToData(req,res)
{
    AddUser(req.body);
    res.status(200).send("User addded !");
}