
# Respuestas de la práctica 1.2 Conocimientos Generales II

<br/><br/>

## Instrucciones

* Relaciona los siguientes términos con sus definiciones. Al finalizar la actividad, tu instructor revisará las respuestas correctas y resolverá cualquier duda para garantizar una comprensión completa.

<br/>

| Número y concepto              | Letra y definición                                                                                                                   |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| 1. Métodos POST                | A. Propiedad de algunos métodos HTTP (como GET, PUT y DELETE) donde la misma operación realizada varias veces tiene el mismo efecto. |
| 2. Métodos GET                 | B. Pequeños archivos de texto enviados por el servidor al cliente para almacenar datos como sesi|ones, preferencias o autenticación.  |
| 3. Idempotencia                | C. Métodos como POST, PUT y PATCH utilizan el cuerpo de la solicitud para enviar datos al servidor.                                  |
| 4. Método PUT                  | D. Números que indican el resultado de una solicitud HTTP. Ejemplo: 200 (éxito), 404 (no encontrado), 500 (error del servidor).      |
| 5. Método DELETE               | E. Encabezado HTTP que indica el tipo de contenido del cuerpo de la solicitud o respuesta (por ejemplo, application/json).           |
| 6. Content-Type                | F. Método HTTP utilizado para actualizar o crear un recurso en el servidor en una ubicación específica.                              |
| 7. HTTP Authorization          | G. Método HTTP utilizado para enviar datos al servidor para su procesamiento. Los datos suelen incluirse en el cuerpo.               |
| 8. Partes de una Petición HTTP | H. Encabezado HTTP utilizado para enviar credenciales al servidor para autenticación (por ejemplo, tokens o credenciales básicas).   |
| 9. Métodos que usan Body       | I. Incluye línea de solicitud, encabezados, línea vacía y cuerpo opcional (en algunos métodos como POST y PUT).                      |
| 10. Formato JSON               | J. Método HTTP utilizado para solicitar recursos del servidor. No incluye cuerpo y no debe modificar el estado del servidor.         |
| 11. Cookies                    | K. Cross-Origin Resource Sharing, Es una política de seguridad implementada en los servidores web.                                   |
| 12. Códigos de Estado HTTP     | L. Método HTTP utilizado para eliminar un recurso específico en el servidor.                                                         |
| 13. CORS                       | M. Formato ligero de intercambio de datos basado en texto, estructurado como pares clave-valor. Usado frecuentemente en APIs.        |


<br/><br/>

## Respuestas

| #  | Término                     | Respuesta |
| -- | --------------------------- | --------- |
| 1  | Métodos POST                | G         |
| 2  | Métodos GET                 | J         |
| 3  | Idempotencia                | A         |
| 4  | Método PUT                  | F         |
| 5  | Método DELETE               | L         |
| 6  | Content-Type                | E         |
| 7  | HTTP Authorization          | H         |
| 8  | Partes de una Petición HTTP | I         |
| 9  | Métodos que usan Body       | C         |
| 10 | Formato JSON                | M         |
| 11 | Cookies                     | B         |
| 12 | Códigos de Estado HTTP      | D         |
| 13 | CORS                        | K         |


<br/><br/>

### Códigos de Estado HTTP más comunes

| Código | Nombre                 | Descripción                                                                             |
| ------ | ---------------------- | --------------------------------------------------------------------------------------- |
| 200    | OK                     | La solicitud fue exitosa.                                                               |
| 201    | Created                | El recurso fue creado exitosamente.                                                     |
| 204    | No Content             | La solicitud fue exitosa, pero no hay contenido en la respuesta.                        |
| 301    | Moved Permanently      | El recurso se ha movido de forma permanente a otra URL.                                 |
| 302    | Found                  | Redirección temporal a otra URL.                                                        |
| 304    | Not Modified           | El recurso no ha cambiado (usa caché).                                                  |
| 400    | Bad Request            | Solicitud incorrecta o mal formada.                                                     |
| 401    | Unauthorized           | Se requiere autenticación.                                                              |
| 403    | Forbidden              | Acceso denegado aunque esté autenticado.                                                |
| 404    | Not Found              | El recurso no existe.                                                                   |
| 405    | Method Not Allowed     | Método HTTP no permitido para ese recurso.                                              |
| 409    | Conflict               | Conflicto con el estado actual del recurso.                                             |
| 415    | Unsupported Media Type | Tipo de contenido no soportado.                                                         |
| 418    | I'm a teapot           | Código humorístico que indica que el servidor es una tetera y no puede preparar café. |
| 500    | Internal Server Error  | Error interno del servidor.                                                             |
| 502    | Bad Gateway            | Error en un servidor intermedio.                                                        |
| 503    | Service Unavailable    | Servicio no disponible (sobrecarga o mantenimiento).                                    |

<br/><br/>
 
## Notas

El código 418 I'm a teapot proviene del estándar humorístico RFC 2324.

Fue creado como una broma en el protocolo “Hyper Text Coffee Pot Control Protocol”.
La idea: una tetera (teapot) no puede servir café, por lo tanto responde con error.
Aunque nació como chiste, muchos frameworks y APIs lo incluyen.

<br/><br/>

## Métodos HTTP

Aquí tienes una **tabla de ayuda clara y lista para clase** sobre métodos HTTP:

<br/><br/>

### Métodos HTTP – Tabla de ayuda

| Método  | Descripción / Uso                             | Encabezados | Cuerpo   | Idempotente |
| ------- | --------------------------------------------- | ----------- | -------- | ----------- |
| GET     | Obtener información de un recurso             | Sí          | No       | Sí          |
| POST    | Enviar datos para crear o procesar un recurso | Sí          | Sí       | No          |
| PUT     | Crear o reemplazar completamente un recurso   | Sí          | Sí       | Sí          |
| PATCH   | Actualizar parcialmente un recurso            | Sí          | Sí       | No          |
| DELETE  | Eliminar un recurso                           | Sí          | Opcional | Sí          |
| HEAD    | Obtener solo encabezados (sin cuerpo)         | Sí          | No       | Sí          |
| OPTIONS | Consultar métodos permitidos en un recurso    | Sí          | No       | Sí          |

 
## Notas:

**Idempotencia** propiedad de una operación que permite ejecutarla múltiples veces sin cambiar el resultado más allá de la primera ejecución.