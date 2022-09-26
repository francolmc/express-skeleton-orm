import { Article } from "@core/test/models/article.entity";

export interface ShowServiceContract {
    show(id: number): Article;
}