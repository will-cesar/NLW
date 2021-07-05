import { classToPlain } from "class-transformer";
import { getCustomRepository } from "typeorm";
import { TagsRepositories } from "../repositories/TagsRepositories";


class ListTagsService {

    async execute() {
        const tagsRepositories = getCustomRepository(TagsRepositories);

        const tags = await tagsRepositories.find();

        // "classToPlain" retorna todos os dados das tags + a propriedade customizável no @Expose dentro da classe
        return classToPlain(tags);
    }
}

export { ListTagsService };