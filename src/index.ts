import UserController from "./controllers/UserController";
import { User } from "./models/User";

const user1 = UserController.createUser({name: "Luciano", username: "lucian", email: "luciano@gmail.com", password: "batata123"});
const user2 = UserController.createUser({name: "Luciano", username: "lucian", email: "luciano@gmail.com", password: "batata123"});
const user3 = UserController.createUser({name: "Luciano", username: "lucian2", email: "luciano@gmail.com"});

UserController.list();