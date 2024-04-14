import { CollectionConfig } from "payload/types";

const Films: CollectionConfig = {
  slug: "film-projects",
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
        name: "url",
        label: "Vimeo Link",
        type: "text",
        required: true,
      },
      {
        name: "description",
        label: "Short Description",
        type: "textarea",
        maxLength: 500,
        required: true,
      },
  ],
};

export default Films;
