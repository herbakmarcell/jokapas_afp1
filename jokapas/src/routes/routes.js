import { HomePage } from "../pages/Home/HomePage";
import { LoginPage } from "../pages/Login/LoginPage";
import { MarketPage } from "../pages/Market/MarketPage";
import { AdminPage } from "../pages/Administration/AdministrationPage";
import { FaqPage } from "../pages/FAQ/FaqPage";
import { ProfilePage } from "../pages/Profile/ProfilePage";
import { RegisterPage } from "../pages/Register/RegisterPage";
import { CartPage } from "../Cart/CartPage";
import { AdminSuccess } from "../pages/Administration/AdminSuccess";

export const publicRoutes = [
    {path: "login", page: LoginPage},
    {path: "market", page: MarketPage},
    {path: "admin", page: AdminPage},
    {path: "faq", page: FaqPage},
    {path: "/", page: HomePage},
    {path: "register", page: RegisterPage},    
]

export const protectedRoutes = [
    {path: "profile", page: ProfilePage},
    {path: "cart", page: CartPage},
    {path: "adminsuccess", page: AdminSuccess},
]