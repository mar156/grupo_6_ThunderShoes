## **INSTRUCCIONES:**

### **Clonar repositorio:**
**1.** Para la correcta visualización del sitio debes utilizar en primer lugar el comando git clone en tu terminal en la carpeta donde quieres descargar los archivos seguido de la url: **git clone** [https://github.com/mar156/grupo_6_ThunderShoes.git](https://github.com/mar156/grupo_6_ThunderShoes.git)

### **Base de datos:**
**3.** Iniciar un sistema de gestión de base de datos, como puede ser XAMPP, para luego desde un administrador de base de datos (Workbench, DBeaver, PHPMyAdmin, etc.) importar la base de datos de prueba.

**Estructura:**
En Workbench conectamos con localhost:3306 y desde File > Run SQL Sctipt, abrimos el archivo **\grupo_6_ThunderShoes\site\data\db\thundershoes_db_127_0_0_1.sql** , seleccionamos default Character set: utf8-mb4 y presionamos 'run'. 
Contraseña: (sin contraseña)

**Datos**
Seleccionamos la base de datos creada, thundershoes_db, con doble click.
'File > New Query Tab' (CTRL + T), pegamos el contenido del archivo **\grupo_6_ThunderShoes\site\data\db\data-inserts\thundershoes_db-datos-Sprint6.sql** y seleccionamos 'Query > Execute Current Statemente' (CTRL + ENTER).

**4.** Ahora debes ubicarte dentro de la carpeta **\grupo_6_ThunderShoes\site** e instalar las dependencias con el comando **npm install**

**5.** Para correr el servidor con node haciendo **node app.js** (*No te olvides de verificar que estes ubicado en la carpeta site*)   

**6.** ¡Y ya puedes ir a tu navegador para ver nuestra página web!. Te recomendamos empezar por el home: http://localhost:3000/ y luego ir recorriendo las demás secciones.

**7.** Para acceder como Administrador debes iniciar sesión con usuario thundershoes@gmail.com y contraseña ' nuevaclave ', acceso admin: http://localhost:3000/admin

