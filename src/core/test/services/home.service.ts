import { HomeServiceContract } from "@core/test/contracts/service/home-service.contract";
import { HomeBody } from "@core/test/models/home.entity";
import { Service } from "typedi";

@Service()
export class HomeService implements HomeServiceContract {
    public home(): HomeBody {
        const HomeBody: HomeBody = {
            title: 'Pagina de ejemplo',
            body: 'Esta es una descripcion de esta pagina de prueba.'
        };
        return HomeBody;
    }
}