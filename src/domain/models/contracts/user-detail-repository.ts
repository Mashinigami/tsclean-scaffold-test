import { AddUserParams, UserModel } from "@/domain/models/user";

export const USER_DETAIL_REPOSITORY = "USER_DETAIL_REPOSITORY";

export interface IUserDetailRepository {
    userDetailRepository: (data: AddUserParams) => Promise<UserModel>;
}
