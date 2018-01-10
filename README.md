*-------------------------------- GROUP PEOPLE LIBRARY ----------------------------------*
==================================== BAS VAN MONTFORT ====================================
__________________________________________________________________________________________
*INTRO*
Met deze library kan je mensen heel makkelijk toevoegen aan een online JSON-database genaamd, Firebase. Hierdoor kan je ook aanpassen voor je eigen projecten.



__________________________________________________________________________________________
*WAT KAN JE AANPASSEN*
- Toevoegen van eigen (persoonlijke) data
- Doorvoeren in eigen projecten of creaties



__________________________________________________________________________________________
*DEMO*
http://basvanmontfort.nl/DED/GroupPeopleLibrary



__________________________________________________________________________________________
*INSTALLATIE*
1. Download ZIP en pak het uit
2. Kopieer index.js naar je eigen project en maak koppeling met HTML bestand
````html 
<script type="text/javascript" src="index.js"></script>
````

3. Maak een tekstbox met naam: "naam" en knop met value "Doorgaan"
````html
<input type="text" id="naam"><br>
<input type="button" value="Doorgaan"/>
````

4. Voeg onclick toe aan deze knop, deze moet een CreateAdmin of CreateExtra aanmaken
````html
<input type="button" value="Doorgaan" onclick=""/>
````

5. Maak een account aan op Firebase en maak koppeling met je code, dit kan in de library gezet worden, maar kan ook in HTML bestand

6. Vervolg is het mogelijk om de waardes: "naam", "connectid", "rechten" en "status" uit te lezen. (Dit kan in een tabel gebeuren, maar kan je helemaal naar eigen keus invullen)


__________________________________________________________________________________________
*IMPLEMENTEREN*
Maak een object aan van "CreateAdmin"* of "CreateExtra"**, afhankelijk van type account. 
*CreateAdmin is hoofdgebruiker
**CreateExtra kan elk account zijn wat toegevoegd wordt aan een hoofdaccount, maar met minder permissie

Afhankelijk van de keuze, roep je .init() aan, waarna het account aangemaakt wordt en toegevoegd wordt aan de database
````html
<input type="button" value="Doorgaan" onclick="var Admin = new CreateAdmin(); Admin.init();"/>
````

__________________________________________________________________________________________
*GEBRUIK*
Vul de tekstbox met de juiste naam en klik vervolgens op de knop. 
Hierna wordt je doorgestuurd naar een andere pagina, waarbij de data opgehaald kan worden. 
Dit kan je laten zien of onderhuids doorsturen naar pagina's



__________________________________________________________________________________________
*VRAGEN?*
Als je vragen hebt kan je dit sturen naar info@basvanmontfort.nl

Veel plezier met mijn library!
© BAS VAN MONTFORT 2017

