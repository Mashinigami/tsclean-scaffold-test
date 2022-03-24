import { AddUserParams, UserModel } from "@/domain/models/user";
import { UserModelSchema } from "@/infrastructure/driven-adapters/adapters/orm/mongoose/models/user";
import { IUserDetailRepository } from "@/domain/models/contracts/user-detail-repository";

export class UserMongooseRepositoryAdapter implements IUserDetailRepository {
    async userDetailRepository(data: AddUserParams): Promise<UserModel> {
        return await UserModelSchema.create(data);
    }
}
