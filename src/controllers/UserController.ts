import { User } from "../models/User";
import users from "../database/users";
import validateFieldsUser from "../middlewares/validateFieldsUser";
import validateUsernameUser from "../middlewares/validateUsernameUser";

class UserController {
    public createUser(data: any): User | boolean{

        const validatedFields = validateFieldsUser(data);
        const validatedUsername = validateUsernameUser(data);

        if(validatedUsername && validatedFields) {
            const newUser = new User(data.name, data.email, data.username, data.password);
            users.push(newUser);
            return newUser;
        } else if (!validatedUsername) {
            console.log("Nome de usuário já existe.");
            return false;
        } else if (!validatedFields) {
            console.log("Preencha todos os campos para o cadastro.");
            return false;
        } else {
            return false;
        }
    };

    public list() {
        console.log(users);
    };
};

export default new UserController;