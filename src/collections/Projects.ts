import { CollectionConfig } from "payload/types";
import { slugField } from "../fields/slug";

const Projects: CollectionConfig = {
  slug: "projects",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "type", "project", "year"],
  },
  access: {
    read: () => true,
  },

  fields: [
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    slugField(),
     {
      name: "type",
      label: "Type",
      type: "radio",
      required: true,
      options: [
        { label: "Film", value: "film" },
        { label: "Photography", value: "photography" },
      ],
      admin: {
        layout: "horizontal",
      },
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
    /* VIDEO */
    {
      name: "url",
      label: "Video Link",
      type: "text",
      admin: {
        condition: (data) => data.type === "film",
      },
      required: true,
    },
    /* Photo */
    {
      name: "images",
      label: "Project Images",
      type: "array",
      admin: {
        condition: (data) => data.type === "photography",
      },
      fields: [
        {
          type: "upload",
          name: "image",
          label: "Image",
          relationTo: "media",
          required: true,
        },
      ],
    },
    /* Both */
    {
      name: "credits",
      label: "Credits",
      type: "textarea",
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
  endpoints: [
    {
      path: "/by-type/:type",
      method: "get",
      handler: async (req, res, next) => {
        try {
          const { type } = req.params;
          const results = await req.payload.find({
            collection: "projects",
            where: {
              type: {
                equals: type,
              },
            },
          });
          res.status(200).json(results);
        } catch (error) {
          res.status(500).json({
            error: "Internal server error",
            details: error.toString(),
          });
        }
      },
    },
    {
      path: "/by-slug/:slug",
      method: "get",
      handler: async (req, res, next) => {
        try {
          const { slug } = req.params;
          const results = await req.payload.find({
            collection: "projects",
            where: {
              slug: {
                equals: slug,
              },
            },
          });
          res.status(200).json(results);
        } catch (error) {
          res.status(500).json({
            error: "Internal server error",
            details: error.toString(),
          });
        }
      },
    },
  ],
};

export default Projects;
