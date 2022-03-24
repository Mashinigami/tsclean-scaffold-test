import { AddUserParams, UserModel } from "@/domain/models/user";

export const USER_DETAIL_SERVICE = "USER_DETAIL_SERVICE";

export interface IUserService {
    userDetailService: (data: AddUserParams) => Promise<UserModel>;
}
