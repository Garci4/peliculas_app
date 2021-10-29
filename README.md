<h2 align="center">Universidad Nacional de la Patagonia San Juan Bosco</h2>
<h2 align="center">Aplicaciones Web</h2>
<h3 align="center">Proyecto de Examen Final Libre</h3>

## El proyecto

El proyecto consiste en una aplicación web full-stack. Esto significa que debemos realizar desarrollos tanto del lado cliente como del lado servidor, de manera ordenada y con apropiada separación de responsabilidades.

El front-end debe realizarseen React o Vue, mientras que el Back-end debe implementarse en Laravel. Existen tres instancias de defensa,que se realizarán en el siguiente orden:

-   **Back-end**
-   **API**
-   **Front-end**

La aplicación consiste en un repositorio de películas, con los siguientes requerimientos:

-   El back-end debe implementar altas, bajas y modificaciones sobre datos básicos de una película: nombre, año, director y sinopsis. La vista de la aplicación back-end debe usar Blade y puede ser simple, sin mucha decoración estética. Posee un solo usuario que puede realizar todas las acciones necesarias sobre los datos

-   El API ofrece una interfaz REST para obtenerdatos de películas, como mínimo:

    -   **Obtener todas las películas**
    -   **Obtener todas las películas de un año determinado**
    -   **Obtener todos los datos de una película determinada**
    -   **Obtener la sinopsis de una película**

    -   La documentación del API debe realizarse en Swagger para permitir probarla

-   El front-end debe implementarse en React o Vue y ofrece los datos a los usuarios finales. Por esta razón se pone mayor énfasis en el diseño visual. Debe ser responsivapara poder verseapropiadamente enun celular o Tablet.
    -   Adicionalmente, el front-end muestra el poster de la película, si puede obtenerlo de un servicio web externo como Open Movie Database API (OMDBs)
