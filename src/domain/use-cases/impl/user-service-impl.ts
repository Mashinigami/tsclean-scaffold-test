import { Adapter, Service } from "@tsclean/core";
import { IUserService } from "@/domain/use-cases/user-service";
import { IUserDetailRepository, USER_DETAIL_REPOSITORY } from "@/domain/models/contracts/user-detail-repository";
import { AddUserParams, UserModel } from "@/domain/models/user";

@Service()
export class UserServiceImpl implements IUserService {
    constructor(@Adapter(USER_DETAIL_REPOSITORY) private readonly userDetailRepository: IUserDetailRepository) {}

    async userDetailService(data: AddUserParams): Promise<UserModel> {
        return await this.userDetailRepository.userDetailRepository(data);
    }
}
