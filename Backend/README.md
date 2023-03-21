# proyecto-arquiler-de-autos

<br>

<h1><img src="https://img.shields.io/badge/Django-092E20?style=for-the-badge&logo=django&logoColor=white" title="Django"/> Version:4.1.7</h1>

<br>
<br>


## url:principal
http://127.0.0.1:8000/swagger/

<br>
<br>

## El siguiente comando instalará los paquetes de acuerdo con el archivo de configuración requirements.txt
$ pip install -r requirements.txt

<br>
<br>
<h2>Debe crear un documento llamado 📄.env, el cual va a 
 tener en su interior la 🔐Srecret_key,  DEBUG, SCRAPE KEYS y la 📝información de la base de datos.
</h2>
<hr>
<div>
 <h4> El documento  va a tener los siguientes datos:</h4>
 <ul>
  <p>###SECURITY WARNING: </p>
  <li>🔐SECRET_KEY = " "</li>
  <hr>
  
  <p>###SECURITY WARNING: don't run with debug turned on in production!</p>
  <li>💻DEBUG = True/False</li>
  <hr>

  <p>###SCRAPE_KEYS: </p>
  <li>🔐SCRAPE_SECRET_KEY = " "</li>
  <li>🔐SCRAPE_PUBLIC_KEY = " "</li>
  <hr>
  
  <p>###📄Database information</p>
  <li>NAME = 'Backend_autos_arquiler'</li>
  <li>USER = ' '</li>
  <li>🔐PASSWORD = ' '</li>
  <li>HOST = 'localhost'</li>
  <li>PORT = ' '</li>
 </ul>
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
