import users from "../database/users";

function validateUsernameUser(data: any): boolean {

    const exist = users.some(item => item.getInf().username === data.username);

    if (exist) {
        return false;
    }
    return true;
}

export default validateUsernameUser;