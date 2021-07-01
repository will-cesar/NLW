import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IAuthenticateRequest {
    email: string;
    password: string;
}

class AuthenticateUserService {

    async execute({ email, password }: IAuthenticateRequest) {
        const usersRepositories = getCustomRepository(UsersRepositories);

        // verifica se o e-mail do usuário existe
        const user = await usersRepositories.findOne({ email });

        // caso não exista, passar o erro
        if (!user) {
            throw new Error('E-mail/Password incorrect');
        }

        // verifica se a senha está correta
        const passwordMatch: boolean = await compare(password, user.password);

        // caso a senha não for correta, passar o erro
        if (!passwordMatch) {
            throw new Error('E-mail/Password incorrect');
        }

        // gera o token de autenticação
        // Primeiro parâmetro (payload): passar o payload (E-mail, Nome ou Id)
        // Segundo parâmetro (signature): passar uma hash (utilizar o MD5 Hash Generator)
        // Terceiro parâmetro: passar no "subject" o Id do usuário e configurar o tempo em que expira o token "expiresIn"
        const token = sign(
            {
                email: user.email
            },
            "7c4a030e7a03e51855dbd499a9ea5c6e",
            {
                subject: user.id,
                expiresIn: '1d'
            }
        );

        return token;
    }
}

export { AuthenticateUserService };