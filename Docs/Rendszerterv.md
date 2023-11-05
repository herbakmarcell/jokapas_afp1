## 1. A rendszer célja

A Kézifék Entertaiment Inc. azt kapta megbízásul, hogy készítsen egy középkort idéző webshopot, mely kitűnik a ma fellelhető webshopok közül a minőségre helyezett hangsúlyával, és egyedi, autentikus, kézzel készült termékeivel, a tömegből kitűnő webdesignal. A Kézifék E. Inc. elkötelezett amellett, hogy a Jókapás webshop kielégítse a középkori kultúrák szerelmeseinek minden igényét, mindezt a korhoz leghitelesebben kinéző felületen keresztül. Nem csak egy áruházat akarunk létrehozni, hanem egy olyan helyet, ahol az emberek igazán átélhetik azt a varázslatos világot, ami akkoriban volt. Ez a projekt az általunk kifejlesztett egyedi és kreatív megoldásokkal fogja elősegíteni, hogy új szintre emeljük a középkori kultúrák iránt érdeklődő vásárlók elérését. Felhasználóink könnyen létre tudnak hozni a kézzel készült,korhű árúinak aukciókat, ahol nem kell aggódniuk a adásvétel és a kiszállítás bonyodalmaitól. Hogy oldalunk a lehető legmagasabb színvonalat képviselhesse, az árúkat be lehet nekünk jelenteni, ahol kiválasztható a probléma típusa az árúval, mely után a moderátorok aktívan bevizsgálhatják az így megjelölt árúkat. Oldalunk teljeskörű pénzvisszafizetési garanciát vállal az oldalon megvett árúkra, ha azok nem autentikusak, nem felelnek meg a leírásnak, vagy nem kézzel készült darabok.

## 2. Projektterv
   
### 2.1 Projektszerepkörök, felelőségek
* Scrum master:
	-   Kaponya Martin 	
* Product owner:
	-   Kaponya Martin 
* Üzleti szereplő:
	-   Megrendelő:
		 -  Bagoly Gábor

### 2.2 Projektmunkások és felelőségek

* Frontend:
	-   Pántya Barnabás
	-   Fodor Győző Benedek
* Backend:  
	-   Herbák Marcell
	-   Détári Levente
* Tesztelés:   
	-   Herbák Marcell
	-   Pántya Barnabás
	-   Détári Levente
	-   Fodor Győző Benedek

### 2.3 Ütemterv

|Funkció                  | Feladat                   | Prioritás | Becslés (nap) | Aktuális becslés (nap) | Eltelt idő (nap) | Határidő (nap)      |
|-------------------------|---------------------------|-----------|---------------|------------------------|------------------|---------------------|
|Követelmény specifikáció |Megírás                    |         1 |             1 |                      1 |                1 |                   1 |             
|Funkcionális specifikáció|Megírás                    |         1 |             1 |                      1 |                1 |                   1 |
|Rendszerterv             |Megírás                    |         1 |             1 |                      1 |                2 |                   2 |
|Front End                |Vizuális tervek elkészítése|         2 |             1 |                      1 |                1 |                   1 |
|Front End                |Prototípus elkészítése     |         2 |             3 |                      3 |                3 |                   5 |
|Front End                |Alapfunkciók elkészítése   |         2 |             2 |                      2 |                2 |                   2 |
|Back End                 |Prototípus elkészítése     |         3 |             5 |                      5 |                0 |                   5 |
|Back End                 |Alapfunkciók elkészítése   |         3 |             3 |                      3 |                0 |                   3 |
|Front End                |Termék funkciók elkészítése|         4 |             5 |                      5 |                0 |                   5 |
|Back End                 |Termék funkciók elkészítése|         4 |             5 |                      5 |                0 |                   5 |
|Front- és Back End       |Ügyfélszolgálat elkészítése|         5 |             2 |                      2 |                0 |                   2 |
|Front- és Back End       |Tesztelés                  |         6 |             2 |                      2 |                0 |                   2 |

### 2.4 Mérföldkövek

   *   10.28. Követelmény specifikáció elkészítése
   *   10.30. Funkcionális specifikáció elkészítése
   *   11.05. Rendszerterv elkészítése
   *   11.14. Bejelentkező prototípusoldal elkészítése
   *   11.15. I. Sprint Prototípus prezentálása
   *   11.29. Alpha tesztelések megkezdése
   *   12.12. Utolsó simítások és tesztelések
   *   12.13. II. Sprint végső prototípus bemutatása
   
## 3. Üzleti folyamatok modellje

### 3.1 Üzleti szereplők

### 3.2 Üzleti folyamatok
   
## 4. Követelmények
   
## 5. Funkcionális terv
    
### 5.1 Rendszerszereplők

A rendszer egy szerver (host) gépen fut, amelyet a felhasználók (kliensek) egy webböngészőn keresztül érik el. A felhasználók között több jogosultság is megoszlik, ezek:

| Felhasználói jogkör | Jogok                                                                                                                                                                                                                   |
|---------------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| no_login            | Regisztráció és bejelentkezés, Áruk megtekintése                                                                                                                                                                        |
| user                | Áruk megtekintése és megvásárlása, Saját rendelés leadása, törlése és követése, saját profil szerkesztése és törlése, Saját áru eladása és törlése, Értékelés írása a vásárolt termékre, Ügyfélszolgálati segítségkérés |
| moderator           | user + Értékelések törlése, Áruk törlése, Ügyfélszolgálati segítségnyújtás                                                                                                                                              |
| admin               | moderator + delivery + Rendelések törlése, Profilok törlése, Ügyfélszolgálati esemény törlése                                                                                                                           |
| delivery            | Rendelések állapotának módosítása                                                                                                                                                                                       |
   
### 5.2 Menü-hierarchia:
   
## 6. Fizikai környezet

### Vásárolt szoftverkomponensek, valamint esetleges külső rendszerek
Nincsenek vásárolt szoftverkomponensek.
### Hardver topológia
Olyan grafikus felülettel rendelkező operációs rendszer alkalmas, amely tud böngészőt futtatni.
### Fizikai alrendszerek
Kliens gépek: A követelményeknek megfelelő, grafikus felülettel rendelkező operációs rendszerrel rendelkező PC-k.
Szerver (Host) gép: Az adatbázis rendszer és a weboldalhoz szükséges összetevők itt találhatóak. A kliens gép ezzel kommunikál.
### Fejlesztő eszközök
Visual Code
Böngésző (Google Chrome, Firefox, Opera, Brave, Safari)
    
## 7. Architekturális terv

A szolgáltatás igénybevételéhez szükséges az állandó internetkapcsolat és webböngésző (Google Chrome, Firefox, Opera, Brave, Safari). A felhasználónak az adatbázishoz nem szükséges külön csatlakoznia, a weboldal háttérben autómatikusan elvégzi.

Az oldal használatához el kell indítani a webböngészőt, a keresősávjába bele kell írnia a Jókapás URL címét, ezután igénybe veheti a szolgáltatásokat.
    
## 8. Adatbázis terv

A webshop több különböző táblát használ a megfelelő működés érdekében, ezek: 

| Tábla    | Betöltendő funkció                         | Tábla attribútumai                                                         |
|----------|--------------------------------------------|----------------------------------------------------------------------------|
| Users    | A regisztrált felhasználók adatait tárolja | userID, username, password, email, full_name, icon, 2FA                           |
| Products | A feltöltött termékek adatait tárolja      | productID, product_tag, product_name, description, sellerID, isUnavailable |
| Orders   | A vásárolt termékeket tárolja              | orderID, productID, sellerID, userID, status                               |

## 9. Implementációs terv
    
## 10. Tesztterv

## 11. Telepítési terv
    
## 12. Karbantartási terv
