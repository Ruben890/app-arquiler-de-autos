# proyecto-arquiler-de-autos
<h1><img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" title="Django"/> Version:4.1.7</h1>

proyecto-arquiler-de-autos



## url:principal
http://127.0.0.1:8000/swagger/

<h1>Primero debe crear un documento llamado 📄.env, el cual va a 
 tener en su interior la 🔐Srecrey_key,  DEBUG y la 📝información de la base de datos.
</1>
<hr>
<div>
 <h4> El documento  va a tener los siguientes datos:</h4>
 ##SECURITY WARNING: 
🔐SECRET_KEY = " "

##SECURITY WARNING: don't run with debug turned on in production!
💻DEBUG = True/False

##📄Database information
NAME = 'Backend_autos_arquiler'
USER = ''
🔐PASSWORD =  ''
HOST =  'localhost'
PORT = ' '
</div>
<hr>


<h1>Comando para arrancar Django Rest  Frameowork</h1>
<p>Para poder arrancar Django rest Framework primero tiene que dirigirse a la carpeta donde
se encuentra el proyecto usando la consola, para luego ejecutar los siguientes comandos:</p>

<div>
<p>Ejemplo:</p>
<p>⌨️cd ./Documents/proyecto Django...💻</p>
</div>

<hr>
<ul>
<h3>Para migrar los datos a la base de datos en MySQL</h3>
 <small>
 🔴🟥‼️Para poder migrar los datos primero debe crear la base de datos. El documento SQL para crear la base de datos se encuentra en el repositorio como 📄myslq.sql.
  ‼️🔴🟥
 </small>
 
 <li>⌨️python manage.py migrate</li>
<hr>
<h3>Para hacer que la aplicación arranque.</h3>
 <li>⌨️python manage.py runserver</li>
<hr>

</ul>
