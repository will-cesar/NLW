import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // recebe o token
    const authToken = request.headers.authorization;

    // valida de o token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    // faz um split da string para retirar a palavra "Bearer" e pegar apenas o token
    const [, token] = authToken.split(" ");

    try {
        // verifica se o token está válido e recupera o "subject" do token
        // no subject contém o id do usuário
        const { sub } = verify(token, "7c4a030e7a03e51855dbd499a9ea5c6e") as IPayload;

        // recupera as informações do usuário
        request.user_id = sub;

        return next();
    }
    catch (err) {
        return response.status(401).end();
    }


}