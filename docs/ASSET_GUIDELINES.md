# Asset Guidelines

## Formatos recomendados

Modelos 3D:

* `.glb`
* `.gltf`

Imágenes:

* `.webp`
* `.jpg`
* `.png` solo cuando sea necesario

Texturas:

* `.webp`
* `.jpg`

Documentos:

* `.pdf`

## Reglas para modelos 3D

* Usar modelos low-poly cuando sea posible.
* Evitar modelos excesivamente detallados para objetos pequeños.
* Comprimir modelos antes de integrarlos.
* Optimizar texturas.
* No subir archivos pesados sin revisión.
* Mantener nombres claros.
* Guardar fuente y licencia de modelos externos.

## Tamaños sugeridos

Modelo pequeño:

Menos de 1 MB.

Modelo medio:

1 MB a 5 MB.

Modelo pesado:

Más de 5 MB. Requiere revisión antes de integrarse.

Texturas:

Preferiblemente 1024x1024 o menor, salvo casos especiales.

## Estructura de carpetas

`public/models/office`

Para oficina, paredes, escritorio, silla.

`public/models/cad-desk`

Para monitores, laptop, mouse 3D, planos, herramientas.

`public/models/transmission-line`

Para torre eléctrica, cables, terreno.

`public/models/foundations`

Para zapatas, pilotes, bases, armaduras.

`public/models/projects`

Para modelos o maquetas de proyectos.

`public/models/certificates`

Para diplomas, placas o insignias.

## Licencias

Todo asset externo debe tener:

* Nombre del asset.
* Autor.
* Fuente.
* Licencia.
* Link original.
* Fecha de descarga.

Crear un archivo `public/models/ASSET_LICENSES.md` si se usan assets externos.
