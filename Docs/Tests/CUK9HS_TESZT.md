# Tesztjegyzőkönyv
## Tesztelő: Fodor Győző Benedek
## Utolsó módosítás: 2023. 12. 12.

Operációs rendszer: Windows 10

Böngészők: Google Chrome, Mozilla Firefox

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
| Regisztráció | 2023.12.12. | Regisztrálás a weboldalra | A gomb megnyomása után most már nem engedi a felhasználót ugyanolyan meglévő adatokkal regisztrálni | Hibát nem találtam |
| Autentikáció | 2023.12.12. | Csak felhasználói fiók azonosítása után tudjuk a profilt megtekinteni | Már csak bejelentkezve működik | Hibát nem találtam |
| Navigációs sáv | 2023.12.12. | A menüpontokon kattintva az adott oldalra átirányít | A megfelelő oldalakra irányít át | Hibát nem találtam |
| Menüpont tesztelés | 2023.12.12. | A kínálat oldalon a termékek kilistázása | A termékeket adatait sikeresen lekérjük az adatbázisból | Hibát nem találtam |
| Menüpont tesztelés | 2023.12.12. | Ügyfélszolgálat megjelenítése | A gombok és beviteli mezők megjelennek, de adatot nem tudunk felvinni az adatbázisba | Hibát találtam |
| Menüpont tesztelés | 2023.12.12. | Rendelések megjelenítése | Nem jelennek meg megfelelően a felhasználó rendelései | Hibát találtam |
| Menüpont tesztelés | 2023.12.12. | Profil megjelenítése | A profil oldal megjelenik az adatbázisban szereplő adatokkal, személyes adatokat azonban nem lehet szerkeszteni | Hibát találtam |
| Termék | 2023.12.12. | Egy darab termék megjelenítése | Az oldala a terméknek megjelenik minden adatával együtt | Hibát nem találtam |
| Frontend | 2023.12.12. | A weboldal megjelenésének vizsgálata | A weboldal felépítése elfogadható, átlátható. Néhány UI funkció nem működött megfelelően. | Hibát találtam |
| Backend | 2023.12.12. | A backendben megírt kódok megfelelő működése | A backend kódjainak javarésze nem működött megfelelően. | Hibát találtam |
Az Alfa tesztben hibásan működő regisztráció és autentikáció prioritást élvezett, így már javításra került a béta tesztelésre.

A Béta teszt elkészült, a letesztelt funkciók többségében hibásan működtek a weboldalon, így sürgős javítás szükséges mind Front- és Backend-en. 

A végleges tesztelésnél prioritást élvez a Béta teszt során még hibásnak titulált elemek, majd újra ellenőrzésre kerül az összes eddigi ellenőrzött funkció.

## Végleges teszt
