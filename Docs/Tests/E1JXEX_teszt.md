# Tesztjegyzőkönyv
## Tesztelő: Détári Levente
## Utolsó módosítás: 2023. 12. 13.

Operációs rendszer: Windows 11

Böngészők: Google Chrome, Brave, Edge

Ebben a dokumentumban lesz felsorolva az elvégzett tesztek elvárásai és eredményei. (Alfa, Béta és Végleges verzió)

## Alfa teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
| Adatbázis | 2023.11.14. | Adatbázis működésének ellenőrzése. | A táblák és a weboldal sikeresen kapcsolódnak, az adatbázis adatok tárolására kész | Hibát nem találtam |
| Bejelentkezés | 2023.11.14. | Belépés már létrehozott fiókkal | A fiókkal sikeresen be tudtam lépni a felületre | Hibát nem találtam |
| Regisztráció | 2023.11.14. | Regisztrálás a weboldalra | Kért adatok megadása után sikeresen tudtam regisztrálni, és többször lehet beregisztrálni ugyanazokkal az adatokkal | Hibát találtam |
| Autentikáció | 2023.11.14. | Csak felhasználói fiók azonosítása után tudjuk a profilt megtekinteni | Bejelentkezve sikeresen műkődik, azonban nem megfelelő adatot jelenít meg, kijelentkezve is lehetséges | Hibát találtam |
| Menüpont tesztelés | 2023.11.14. | Gyakran ismételt kérdések | Megjelennek a kérdés-válasz párok | Hibát nem találtam |

Az alfa tesztelés során a funkciók rendeltetésszerű használat mellett megfelelően működtek, azonban validáció hiányában hibás eredményeket kaptam, ami a további teszteknél javítva lesz.

A következő tesztelés során a többi funkció kerül vizsgálatra, tesztelésre.


## Béta teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
| Regisztráció | 2023.12.13. | Regisztrálás a weboldalra | A gomb megnyomása után most már nem engedi a felhasználót ugyanolyan meglévő adatokkal regisztrálni | Hibát nem találtam |
| Autentikáció | 2023.12.13. | Csak felhasználói fiók azonosítása után tudjuk a profilt megtekinteni | Már csak bejelentkezve működik | Hibát nem találtam |
| Navigációs sáv | 2023.12.13. | A menüpontokon kattintva az adott oldalra átirányít | A megfelelő oldalakra irányít át | Hibát nem találtam |
| Menüpont tesztelés | 2023.12.13. | A kínálat oldalon a termékek kilistázása | A termékeket adatait sikeresen lekérjük az adatbázisból | Hibát nem találtam |
| Menüpont tesztelés | 2023.12.13. | Ügyfélszolgálat megjelenítése | A gombok és beviteli mezők megjelennek, de adatot nem tudunk felvinni az adatbázisba | Hibát találtam |
| Menüpont tesztelés | 2023.12.13. | Rendelések megjelenítése | Nem jelennek meg megfelelően a felhasználó rendelései | Hibát találtam |
| Menüpont tesztelés | 2023.12.13. | Profil megjelenítése | A profil oldal megjelenik az adatbázisban szereplő adatokkal, személyes adatokat azonban nem lehet szerkeszteni | Hibát találtam |
| Termék | 2023.12.13. | Egy darab termék megjelenítése | Az oldala a terméknek megjelenik minden adatával együtt | Hibát nem találtam |
| Frontend | 2023.12.13. | A weboldal megjelenésének vizsgálata | A weboldal felépítése elfogadható, átlátható. Néhány UI funkció nem működött megfelelően. | Hibát találtam |
| Backend | 2023.12.13. | A backendben megírt kódok megfelelő működése | A backend kódjainak javarésze nem működött megfelelően. | Hibát találtam |

Az Alfa tesztben hibásan működő regisztráció és autentikáció prioritást élvezett, így már javításra került a béta tesztelésre.


## Végleges teszt

| Vizsgálat | Tesztelés időpontja | Elvárás | Eredmény | Hibák |
| :---: | --- | --- | --- | --- |
| Adatbázis | 2023.12.13. | Adatbázis működésének ellenőrzése. | A tábla-weboldal kapcsolat működik. Az adatbázis képes az adatok tárolására. | Hibát nem találtam |
| Bejelentkezés | 2023.12.13. | Belépés már létrehozott fiókkal | A fiókommal sikerült belépnem a weboldalra. | Hibát nem találtam |
| Regisztráció | 2023.12.13. | Regisztrálás a weboldalra |A szükséges adatokkal sikerült regisztrálnom, és újra regisztrálni is lehetett. | Hibát nem találtam |
| Autentikáció | 2023.12.13. | Csak felhasználói fiók azonosítása után tudjuk a profilt megtekinteni | Bejelentkezés után működik, bejelentkezés hiányában nem lehetséges. | Hibát nem találtam |
| Navigációs sáv | 2023.12.13. | A menüpontokon kattintva az adott oldalra átirányít | Az átirányítások megfelelően működik. | Hibát nem találtam |
| Menüpont tesztelés | 2023.12.13. | Gyakran ismételt kérdések | A kérdések, és a hozzájuk tartozó válaszok megjelennek. | Hibát nem találtam |
| Menüpont tesztelés | 2023.12.13. | A kínálat oldalon a termékek kilistázása | A termékek adatainak lekérdezése az adatbázisból működik. | Hibát nem találtam |
| Menüpont tesztelés | 2023.12.13. | Ügyfélszolgálat | A weboldal betölti a gombokat és input mezőket, a backend képes az adatfelvitelre, de az összekötés nincs meg, ezért az adatbázisba nem tudunk felvinni az adatot. | Hibát találtam |
| Menüpont tesztelés | 2023.12.13. | Profil | A profil oldal megjeleníti az adatbázis adatait, a személyes adatok szerkesztése viszont nem működik | Hibát találtam |

A Béta teszt elkészült, a letesztelt funkciók többségében hibásan működtek a weboldalon, így sürgős javítás szükséges mind Front- és Backend-en. 

A végleges tesztelésnél prioritást élvez a Béta teszt során még hibásnak titulált elemek, majd újra ellenőrzésre kerül az összes eddigi ellenőrzött funkció.
