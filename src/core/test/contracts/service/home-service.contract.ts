import { HomeBody } from "@core/test/models/home.entity";

export interface HomeServiceContract {
    home(): HomeBody;
}