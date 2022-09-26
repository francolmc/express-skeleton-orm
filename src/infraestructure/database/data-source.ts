import { consts } from "@config/constants";
import { DataSource } from "typeorm";

const AppDataSource = new DataSource({
    type: 'sqlite',
    database: consts.DATABASE_NAME,
    entities: [`${__dirname}/model/**/*.entity{.ts,.js}`],
    synchronize: true,
    migrations: [`${__dirname}/migrations/**/*{.ts,.js}`]
});

AppDataSource
    .initialize()
    .then(() => {
        console.log(`Data Source has been initialized`);
    })
    .catch((err) => {
        console.error(`Data Source initialization error`, err);
    })

export default AppDataSource;