import { Adapter, Body, Mapping, Post } from "@tsclean/core";
import { IUserService, USER_DETAIL_SERVICE } from "@/domain/use-cases/user-service";
import { AddUserParams, UserModel } from "@/domain/models/user";

@Mapping("")
export class UserDetailController {
    constructor(@Adapter(USER_DETAIL_SERVICE) private readonly userDetailService: IUserService) {}

    @Post()
    async addUserDetail(@Body() data: AddUserParams): Promise<UserModel> {
        return await this.userDetailService.userDetailService(data);
    }
}
