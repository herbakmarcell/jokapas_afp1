import { HomePage } from "../pages/Home/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";

export const publicRoutes = [
    {path: "login", page: LoginPage},
    {path: "/", page: HomePage}
]