import { CollectionConfig } from "payload/types";

const Config: CollectionConfig = {
  slug: "config",
  access: {
    read: () => true,
    create: () => false,
    update: () => true,
    delete: () => false,
  },
  fields: [
    {
      name: "type",
      label: "Page",
      type: "select",
      options: [
        { label: "About", value: "about" },
        { label: "Contact", value: "contact" },
      ],
      required: true,
      access: {
        update: () => false,
      },
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
      access: {
        update: () => false,
      },
    },
    {
      name: "bio",
      label: "Bio",
      type: "textarea",
      required: true,
      admin: {
        condition: (data) => data.type === "about",
      },
    },
    {
      type: "upload",
      name: "cv",
      label: "CV",
      relationTo: "media",
      required: true,
      admin: {
        condition: (data) => data.type === "about",
      },
    },
    {
      type: "text",
      name: "pass",
      label: "Password",
      required: true,
      admin: {
        condition: (data) => data.type === "about",
      },
    },
    {
      name: "displayName",
      label: "Display Name",
      type: "text",
      required: true,
      admin: {
        condition: (data) => data.type === "contact",
      },
    },
    {
      name: "status",
      label: "Status",
      type: "text",
      required: true,
      admin: {
        condition: (data) => data.type === "contact",
      },
    },
    {
      name: "mail",
      label: "Email",
      type: "text",
      required: true,
      admin: {
        condition: (data) => data.type === "contact",
      },
    },
    {
      name: "city",
      label: "City",
      type: "text",
      required: true,
      admin: {
        condition: (data) => data.type === "contact",
      },
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "text",
      required: true,
      admin: {
        condition: (data) => data.type === "contact",
      },
    },
    {
      name: "socialMedia",
      label: "Social Media",
      type: "array",
      fields: [
        {
          name: "name",
          label: "Name",
          type: "text",
          required: true,
        },
        {
          name: "url",
          label: "URL",
          type: "text",
          required: true,
        },
      ],
      admin: {
        condition: (data) => data.type === "contact",
      },
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
            collection: "config",
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
  ],
};

export default Config;
