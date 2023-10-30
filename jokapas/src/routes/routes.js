import { HomePage } from "../pages/Home/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { MarketPage } from "../pages/Market/MarketPage";
import { AdminPage } from "../pages/Administration/AdministrationPage";
import { FaqPage } from "../pages/FAQ/FaqPage";
import { ProfilePage } from "../pages/Profile/ProfilePage";

export const publicRoutes = [
    {path: "login", page: LoginPage},
    {path: "market", page: MarketPage},
    {path: "admin", page: AdminPage},
    {path: "faq", page: FaqPage},
    {path: "/", page: HomePage},
    
]

export const protectedRoutes = [
    {path: "profile", page: ProfilePage}
]