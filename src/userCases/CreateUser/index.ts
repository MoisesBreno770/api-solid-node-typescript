import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgressUsersRepository } from "../../repositories/implementations/PostgresUserRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

const postgresUsersRepository = new PostgressUsersRepository();
const mailtrapMailProvider = new MailtrapMailProvider();

const createUserUseCase = new CreateUserUseCase(
    postgresUsersRepository, mailtrapMailProvider
);

const createUserController = new CreateUserController(createUserUseCase)

export { createUserUseCase, createUserController };