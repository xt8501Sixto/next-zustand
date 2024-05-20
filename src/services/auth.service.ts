import { endpointApi } from "@/api/endpointApi";
import { User } from "@/app/interfaces";
import { AxiosError } from "axios";

export class AuthService {
  static login = async (username: string, password: string): Promise<User> => {
    try {
      const { data } = await endpointApi.get<User[]>(
        "/user_accounts/accounts.json"
      );
      const user = data.find(
        (user) => user.username === username && user.password === password
      );

      if (user) {
        return user;
      } else {
        throw new Error("Username or password incorrect");
      }
    } catch (error) {
      if (error instanceof AxiosError) {
        throw new Error(
          error.response?.data || "Unable to login due to server error"
        );
      }
      throw error;
    }
  };
}
