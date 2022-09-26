import { Request, Response } from "express";
import { Service } from "typedi";
import { ShowService } from "@core/test/services/show.service";
import { Article } from "@core/test/models/article.entity";

@Service()
export default class ShowController {
    public constructor( private readonly _showService: ShowService ) {}

    public show(req: Request, res: Response) {
        const content: Article = this._showService.show(+req.params.id);
        res.render('test/show', { content });
    }
}