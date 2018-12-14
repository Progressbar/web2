import { http } from "./shared"

export interface UserService {
  verifyUser(): any
}

export const UserService: UserService = {
  verifyUser() {
    return http.get("/hello")
  },
}
