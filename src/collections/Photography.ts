import { CollectionConfig } from "payload/types";

const Photography: CollectionConfig = {
  slug: "photography-projects",
  fields: [
    {
      name: "name",
      type: "text",
      label: "Project name",
      required: true, // Requerido
    },
    {
      name: "images",
      type: "array", // Modificado para aceptar un array de imágenes
      label: "Project images",
      fields: [
        {
          type: "upload",
          name: "image",
          label: "Image",
          relationTo: "media", // Se relaciona con la colección media
          required: true
        }
      ]
    },
    {
      name: "intro",
      type: "textarea",
      label: "Short intro",
      maxLength: 500,
    },
  ],
};

export default Photography;
