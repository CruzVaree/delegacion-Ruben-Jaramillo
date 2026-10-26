# Delegación Rubén Jaramillo

Sitio web informativo de la **Delegación Rubén Jaramillo**, en Temixco, Morelos. Reúne los datos de contacto, los servicios de la delegación, la historia de la colonia, su organización territorial y un directorio de lugares y servicios de la zona.

Es un sitio estático: solo HTML, CSS y JavaScript, sin frameworks ni proceso de compilación.

## Páginas

| Página | Contenido |
| --- | --- |
| `index.html` | Inicio: dirección, teléfono, servicios, mapa, galería del 31 de marzo y preguntas frecuentes |
| `historia.html` | Historia de la colonia con línea del tiempo e índice por capítulos |
| `territorio.html` | Barrios, extensión, eje principal y colindancias |
| `infraestructura.html` | Directorio de 21 lugares con buscador y filtros por categoría |

## Características

- Diseño adaptable a celular, tableta y computadora.
- Barra fija en móvil con los botones "Llamar" y "Cómo llegar".
- Buscador y filtros en el directorio de lugares.
- Galería con visor ampliado (teclado y flechas).
- Mapa con Leaflet (satélite y calles), que carga solo al llegar a esa sección.
- SEO: títulos y descripciones propios, Open Graph, datos estructurados (JSON-LD), `sitemap.xml` y `robots.txt`.
- Accesibilidad: enlace para saltar al contenido, foco visible, navegación por teclado y respeto a "reducir movimiento".
- Imágenes en WebP con carga diferida.

## Estructura

```
.
├── index.html
├── historia.html
├── territorio.html
├── infraestructura.html
├── css/styles.css        # estilos de todo el sitio
├── js/main.js            # menú, galería, filtros, índice y mapa
├── img/                  # imágenes optimizadas (WebP)
├── favicon.svg
├── apple-touch-icon.png
├── robots.txt
└── sitemap.xml
```

## Uso local

No necesita instalación. Abre `index.html` en el navegador, o levanta un servidor local:

```bash
python3 -m http.server 8000
```

Luego entra a <http://localhost:8000>.

## Antes de publicar

Las páginas, el `sitemap.xml` y el `robots.txt` usan `https://TU-DOMINIO.mx` como marcador. Reemplázalo por tu dirección real:

```bash
# Linux / macOS
grep -rl "TU-DOMINIO.mx" . | xargs sed -i 's#https://TU-DOMINIO.mx#https://tu-dominio-real.mx#g'
```

En Windows puedes usar buscar y reemplazar en tu editor (por ejemplo, VS Code: `Ctrl + Shift + H`).

## Publicar en GitHub Pages

1. Sube el contenido de esta carpeta a la raíz del repositorio.
2. En GitHub ve a **Settings → Pages**.
3. En **Source** elige la rama `main` y la carpeta `/ (root)`.
4. Guarda y espera a que GitHub publique el sitio.

## Cómo editar

- **Textos y datos:** edita directamente los archivos `.html`.
- **Colores y tipografía:** están al inicio de `css/styles.css`, en `:root`.
- **Nuevo lugar en el directorio:** copia una tarjeta `<article class="card place" data-c="Categoría">` en `infraestructura.html` y usa una categoría que ya exista en los filtros.
- **Fotos nuevas:** conviértelas a WebP y define `width` y `height` en la etiqueta `<img>`.

## Créditos

- Foto del mural: Ricardo Yunuel Fuentes.
- Otras fotos del directorio: fuentes indicadas en cada tarjeta (Google Maps, Municipio de Temixco, DIF Temixco, entre otras).
- Mapa: [Leaflet](https://leafletjs.com/), teselas de Esri y © colaboradores de OpenStreetMap.
- Tipografías: Bricolage Grotesque y Figtree, de Google Fonts.
