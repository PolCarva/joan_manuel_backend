import { CollectionConfig } from 'payload/types';

const Media: CollectionConfig = {
  slug: 'media',
  upload: {
    staticURL: '/media', // URL estática donde se accederán los medios
    staticDir: 'media', // Directorio donde se guardarán los archivos
    imageSizes: [ // Solo una configuración de tamaño para preservar la proporción original
      {
        name: 'original',
        width: undefined, // No especificar ancho
        height: undefined, // No especificar altura
        position: 'centre',
      },
    ],
    adminThumbnail: 'original', // Usar la imagen original como thumbnail en admin
    mimeTypes: ['image/*'], // Aceptar todos los tipos de imágenes
  },
  fields: [
    {
      name: 'alt',
      type: 'text', // Campo para texto alternativo de la imagen
    },
  ],
}

export default Media;
