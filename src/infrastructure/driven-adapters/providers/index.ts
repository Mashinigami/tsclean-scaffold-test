import { USER_DETAIL_REPOSITORY } from "@/domain/models/contracts/user-detail-repository";
import { UserMongooseRepositoryAdapter } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/user-mongoose-repository-adapter";
import { USER_DETAIL_SERVICE } from "@/domain/use-cases/user-service";
import { UserServiceImpl } from "@/domain/use-cases/impl/user-service-impl";

export const adapters = [
    {
        provide: USER_DETAIL_REPOSITORY,
        useClass: UserMongooseRepositoryAdapter,
    },
];

export const services = [
    {
        provide: USER_DETAIL_SERVICE,
        useClass: UserServiceImpl,
    },
];
