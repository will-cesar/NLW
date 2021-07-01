import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
}

class CreateUserService {

    async execute({ name, email, admin = false, password }: IUserRequest) { // admin = false caso não tenha nenhum valor atribuído para a propriedade
        const usersRepository = getCustomRepository(UsersRepositories);

        // verifica se existe algum e-mail na request
        if (!email) {
            throw new Error("Email incorrect");
        }

        // verifica se já existe esse e-mail cadastrado
        const userAlreadyExists = await usersRepository.findOne({
            email
        })

        if (userAlreadyExists) {
            throw new Error("User already exists");
        }

        //criptografia da senha
        const passwordHash = await hash(password, 8);

        const user = usersRepository.create({
            name,
            email,
            admin,
            password: passwordHash
        });

        // cria o usuário
        await usersRepository.save(user);

        return user;
    }
}

export { CreateUserService };