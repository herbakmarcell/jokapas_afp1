# Tesztjegyzőkönyv
## Tesztelő: Herbák Marcell
## Utolsó módosítás: 2023. 12. 12.

## Általános tesztelés
 | Teszteset           | Elvárt eredmény                                                                                                                                            | 
 |---------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------| 
 | Oldal megjelenítése | Megjelenik a főoldal, egy navigációs sávval, rajta az oldal funkcióival, középen egy ábrával és gombbal, alul egy lábjegyzettel.                           |
 | Regisztráció        | Amennyiben a  3 karakternél hosszabb felhasználónév nem létezik, és a formátumnak megfelelő emailt adunk meg, az oldal beregisztrál, és erről jelezést ad. | 
 | Bejelentkezés       | Amennyiben a megfelelő felhasználónevet és jelszó kombinációt használjuk, az oldal belépteti a felhasználót, és visszajelez az oldal ennek sikerességéről. |
 | Kínálat             | Megjelenik az elérhető és megvásárolható termékek listája.                                                                                                 | 
 | Termék kiválasztása | Megjelenik a termék egyedi oldala, a termék leírásával és paramétereivel.                                                                                  | 
 | Szűrés              | A termékeket csoportjuk alapján leszűri és a szűrésnek megfelelően megjelenik.                                                                             |
 | GYIK                | Megjelenik a GYIK oldal, középen kérdés-válaszokkal.                                                                                                       |
 
 ## Bejelentkezett tesztelés
 | Teszteset           | Elvárt eredmény                                                                                     | 
 |---------------------|-----------------------------------------------------------------------------------------------------| 
 | Kijelentkezés       | A felhasználót kiléptetjük a rendszerből.                                                           | 
 | Vásárlás            | A gomb megnyomására egy értesítőablak elfogadásával a terméket meg tudjuk vásárolni.                |
 | Ügyfélszolgálat     | Megjelenik az ügyfélszolgálat oldal.                                                                |
 | Beküldés gomb       | Értesíti a felhasználót az üzenet elküldéséről, és felírja az adatbázisba.                          |
 | Rendeléseim         | Legutolsó bevitt karakter, törlésre kerül a szövegdobozból. Ha üres lenne, 0 kerül a szövegdobozba. | 
 
 ## Admin specifikus tesztelés
 | Teszteset                     | Elvárt eredmény                                                                                                     | 
 |-------------------------------|---------------------------------------------------------------------------------------------------------------------| 
 | Ügyfélszolgálati bejelentések | A beküldött üzeneteket megjelennek az "Ügyfélszolgálat" oldalon.                                                    |

 ### Ezeket a teszteseteket végrehajtani a legtöbb kombinációval
 Tesztelés dátuma: 2023. december. 12. 21:30

 | Tesztszám | Rövid leírás                     | Várt eredmény                                                                           | Eredmény                                                                       | Megjegyzés                |
 |-----------|----------------------------------|-----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------|---------------------------|
 | Teszt #01 | Minta Leírás | Minta várt eredmény | Minta Eredmény | Minta Megjegyzés |
