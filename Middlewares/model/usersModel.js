const users = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }]
export function GetUsers()
{
    return users;
}
export function GetUserById(id)
{
    const user = users.find(user => user.id === Number(id));
    return user;
}

export function AddUser(user)
{
    users.push(user);
}