# StraBoard-Bot
Template d'un bot pour faire un starboard

# Modules obligatoire
```
npm install --save discord.js @discordjs/rest discord-api-types quick.db
```

# Config -> `./Data/exmple.config.js`
Modifie avec les informations de ton bot/sevreur.
<br>Renome le ensuite en `config.js`
```js
module.export = {
  token: "token de ton bot",
  //prefix: "!"
}
```

# Les commandes (A faire dans l'ordre !)
```css
[1] /setstar
[2] /setstarchannel <le salon>
[3] /setstarnumber <numéro>
```
La limite par défaut est 5.

# Rendu :
![image](https://user-images.githubusercontent.com/71967731/140596850-c5a4f68f-b2d4-474d-815f-44127c882ce0.png)

# Version et autre
La version de ce projet/template est en v13 de **discord.js** !
*Pas compatible avec les versions précédente !*
