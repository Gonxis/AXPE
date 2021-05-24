# AXPE

## Descripción

Al inicializar el proyecto, nos encontraremos un mapa de Google con un buscador
encima que nos permitirá buscar buscar diferentes lugares del mundo gracias a la
API de Google. Una vez hayamos seleccionado un lugar del listado que nos aparece
en el buscador, éste se visualizará en el mapa con un marcador y se guardará en
el estado de la aplicación gestionado por Redux, de tal forma que si hemos
buscado tres lugares, se visualizarán en el mapa tres marcadores indicando esos
tres lugares.

## Configuración

Asumimos que tenemos instalado NODE en el sistema.

Una vez descargado el proyecto, tendremos que entrar dentro de la carpeta raíz
de este y ejecutar la línea de comando `yarn install` ya que este proyecto se ha
realizado con yarn en vez de npm y no es recomendable mezclar los
administradores de paquetes.

Una vez nos hayamos instalado todas las dependencias del proyecto, aún quedará
una cosa por configurar para que la aplicación funcione correctamente. Tendremos
que añadir en la carpeta raíz un fichero `.env` con nuestra API Key de google
siguiendo
[la documentación](https://developers.google.com/maps/documentation/javascript/get-api-key),
de tal forma que tengamos habilitadas las siguientes API:

```sh
Maps Javascript API
Places API
```

El fichero .env deberá tener el siguiente contenido, donde `YOUR_API_KEY` se
tendrá que reemplazar por la clave que nos hayamos creado.

`...$ cat .env`

```sh
REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
```

Consideraciones:

- No debe tener espacios entre = ni YOUR_API_KEY
- No debe terminar con , o ; o . a no ser que la propia API Key lo contenga

Por motivos de seguridad y dado que el repositorio es público, no voy a
compartir la clave que generé para el proyecto ni subir al repositorio ningún
fichero .env con datos sensibles.

Una vez hayamos configurado el proyecto, podremos ejecutarlo lanzando la
siguiente línea de comando:

```sh
yarn start
```

## Herramientas usadas

- React
- Redux
- google-map-react
- react-testing-library
- cypress
- prettier
- eslint
