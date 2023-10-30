import { HomePage } from "../pages/Home/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { KinalatPage } from "../pages/Kinalat/KinalatPage";
import { UgyintPage } from "../pages/Ugyintezes/UgyintPage";
import {GyikPage} from "../pages/GYIK/GyikPage";

export const publicRoutes = [
    {path: "login", page: LoginPage},
    {path: "kinalat", page: KinalatPage},
    {path: "ugyint", page: UgyintPage},
    {path: "gyik", page: GyikPage},
    {path: "/", page: HomePage}
]