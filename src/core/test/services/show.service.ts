import { ShowServiceContract } from "@core/test/contracts/service/show-service.contract";
import { Article } from "@core/test/models/article.entity";
import { Service } from "typedi";

@Service()
export class ShowService implements ShowServiceContract {
    public show(id: number): Article {
        const article: Article = {
            id: 1,
            title: 'Titulo del articulo',
            description: 'Descripcion del articulo',
            content: 'Contenido mas completo del articulo, aqui va mucho mas texto.',
            publishDate: new Date()
        };

        return article;
    }
}