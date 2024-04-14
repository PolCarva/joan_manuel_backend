import { CollectionConfig } from "payload/types";

const Photography: CollectionConfig = {
  slug: "photography-projects",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "year",
      label: "Year",
      type: "date",
      required: true,
    },
    {
      name: "project",
      label: "Project",
      type: "text",
      required: true,
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
          required: true,
        },
      ],
    },
    {
      name: "description",
      label: "Short Description",
      type: "textarea",
      maxLength: 500,
    },
    {
      name: "read_more",
      label: "Read More",
      type: "textarea",
    },
  ],
};

export default Photography;
