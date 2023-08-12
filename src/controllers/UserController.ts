import { User } from "../models/User";
import users from "../database/users";
import validateFieldsUser from "../middlewares/validateFieldsUser";
import validateUsernameUser from "../middlewares/validateUsernameUser";

class UserController {
    public registerUser(user: User): void {

        const validatedFields = validateFieldsUser(user);
        const validatedUsername = validateUsernameUser(user);

        if (validatedUsername && validatedFields) {
            users.push(user);
        } else if (!validatedUsername) {
            console.log("Usuário já existente.");
        } else if (!validatedFields) {
            console.log("Preencha todos os campos.");
        }
    };
};

export default new UserController();