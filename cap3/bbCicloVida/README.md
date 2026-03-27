# Demo Ciclo de Vida de un componente Lit

## Métodos del ciclo de Lit

 
| Método                       | ¿Cuándo se ejecuta?                     | ¿Para qué sirve?                                  | ¿Llamar a `super`?                               |
| ---------------------------- | --------------------------------------- | ------------------------------------------------- | ------------------------------------------------ |
| `constructor()`              | Al crear la instancia del componente    | Inicializar propiedades (sin acceso al DOM)       | **Obligatorio** (`super()`)                      |
| `connectedCallback()`        | Cuando el componente entra al DOM       | Suscribirse a eventos, timers o recursos externos | **Obligatorio** (`super.connectedCallback()`)    |
| `willUpdate(changedProps)`   | Antes de renderizar                     | Reaccionar a cambios de propiedades               | Opcional                                         |
| `render()`                   | Durante el renderizado                  | Definir el template HTML del componente           | No aplica                                        |
| `update(changedProps)`       | Durante el proceso de actualización     | Control interno del render                        | **Obligatorio** (`super.update()`)               |
| `firstUpdated(changedProps)` | Después del primer render               | Acceso inicial al DOM                             | Opcional                                         |
| `updated(changedProps)`      | Después de cada actualización           | Reaccionar a cambios en el DOM                    | Opcional                                         |
| `disconnectedCallback()`     | Cuando el componente se elimina del DOM | Liberar recursos                                  | **Obligatorio** (`super.disconnectedCallback()`) |



<br/><br/>

### Flujo en la creación por primera vez

```txt
constructor
 → connectedCallback
 → shouldUpdate()
   → false → no renderiza (raro, pero posible)
   → true → continúa
 → willUpdate()
 → update()
   → render()
 → firstUpdated()
 → updated()
```

### Flujo cuando una propiedad cambia

```txt
→ shouldUpdate()
   → false → se cancela todo
   → true → continúa
→ willUpdate()
→ update()
   → render()
→ updated()
```

<br/><br/>

## Reglas rápidas  

* **Siempre llamar a `super` en:**

  * `constructor`
  * `connectedCallback`
  * `update`
  * `disconnectedCallback`

* **Opcional (depende del caso):**

  * `willUpdate`
  * `firstUpdated`
  * `updated`

* **No aplica:**

  * `render` (no existe `super.render()` en Lit)

<br/><br/>

## Notas 

Si **no llamas a `super` en métodos críticos**, puedes romper:

* El ciclo de actualización
* El renderizado
* La conexión del componente al DOM

<br/><br/>

## Referencias

[Lifecycle](https://lit.dev/docs/components/lifecycle/)