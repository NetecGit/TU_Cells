 


## ¿Qué es Vite?

**Vite** es una herramienta moderna de desarrollo frontend que permite crear proyectos web de forma **rápida y ligera**.

A diferencia de herramientas tradicionales como Webpack, Vite utiliza:

* **ES Modules nativos** en el navegador
* Un servidor de desarrollo ultrarrápido
* Recarga instantánea (Hot Module Replacement)


[Sitio oficial de Vite](https://vite.dev/)

<br/><br/>

### Instrucciones para crear un proyecto con Vite

```bash

# 1. Verifica que tengas Node.js instalado
node -v
npm -v

# 2. Crea el proyecto con Vite
npm create vite@latest

# 3. El asistente te pedirá:
#    - Project name: nombre_de_tu_proyecto
#    - Framework: Vanilla, Vue, React, Lit, etc.
#    - Variant: JavaScript o TypeScript

# 4. Entra a la carpeta del proyecto
cd nombre_de_tu_proyecto

# 5. Instala dependencias
npm install

# 6. Levanta el servidor de desarrollo
npm run dev

# 7. Abre en el navegador la URL que aparezca en terminal
#    normalmente algo como:
#    http://localhost:5173/


```

<br/><br/>

### Creación directa (sin preguntas)

Ejemplo con **Lit + JavaScript**:

```bash
npm create vite@latest mi-proyecto -- --template lit
cd mi-proyecto
npm install
npm run dev

```

<br/><br/>

## Notas

* Vite **no es un framework**, es una herramienta de construcción.
* Puede trabajar con:

  * JavaScript puro (Vanilla)
  * Lit
  * React
  * Vue
  * Es ideal para aprendizaje porque:
    * Configuración mínima
    * Arranque inmediato
    * Menos complejidad que herramientas clásicas
  * Antes de ejecutar el proyecto, es necesario posicionarse dentro de la carpeta del proyecto e instalar las dependencias.

```bash
cd nombre_del_proyecto
npm install
```

<br/><br/>

## Vite

Para verificar si un proyecto fue creado con **Vite**, revisa el archivo **`package.json`** ubicado en la raíz del proyecto. En este archivo debes buscar la dependencia `"vite"` dentro de las secciones `"dependencies"` o `"devDependencies"`, así como los scripts típicos como `"dev": "vite"`, `"build": "vite build"` y `"preview": "vite preview"`. Si estos elementos están presentes, puedes confirmar que el proyecto utiliza Vite como herramienta de desarrollo y construcción.

<br/><br/>

## ¿Qué es es-dev-server?

es-dev-server es un servidor de desarrollo ligero para aplicaciones web, diseñado especialmente para trabajar con módulos ES (ES Modules) directamente en el navegador.

Es una herramienta que levanta un servidor local para ejecutar tu aplicación sin necesidad de hacer un “build” complejo.

¿Qué lo hace especial?
* No requiere bundling (no empaqueta como Webpack)
* Usa módulos ES nativos del navegador
* Soporta recarga automática (live reload)
* Ideal para proyectos simples o educativos (como Lit o Web Components)
* Configuración mínima

Repositorio oficial de [es-dev-server](https://github.com/open-wc/es-dev-server)

Antes de ejecutar el proyecto, asegúrate de posicionarte en la carpeta del proyecto e instalar las dependencias necesarias.

Los proyectos que utilizan `es-dev-server` también gestionan sus dependencias mediante `package.json`, por lo que es indispensable ejecutar:

```bash
cd nombre_del_proyecto
npm install
```

Posteriormente, podrás levantar el servidor de desarrollo con un comando similar a:

```bash
npm start
```

Por lo general, la aplicación se abrirá automáticamente en el navegador en la siguiente dirección:

`http://localhost:8000/`