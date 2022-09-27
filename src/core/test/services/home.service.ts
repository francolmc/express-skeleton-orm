import { HomeServiceContract } from "@core/test/contracts/service/home-service.contract";
import { HomeBody } from "@core/test/models/home.entity";
import AppDataSource from "@infra/database/data-source";
import { User } from "@infra/database/model/user.entity";
import { Service } from "typedi";

@Service()
export class HomeService implements HomeServiceContract {
    public constructor(
        private _user = AppDataSource.getRepository(User)
    ) {}
    public home(): HomeBody {
        const HomeBody: HomeBody = {
            title: 'Pagina de ejemplo',
            body: 'Esta es una descripcion de esta pagina de prueba.'
        };
        const user = new User();
        user.firstName = 'Frescia';
        user.lastName = 'Roncalla';
        user.age = 29;
        this._user.save(user);
        return HomeBody;
    }
}