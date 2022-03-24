import { AddUserParams, UserModel } from "@/domain/models/user";

export interface IUserService {
    userDetailService: (data: AddUserParams) => Promise<UserModel>;
}
