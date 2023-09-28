import { stringify } from "lume/deps/yaml.ts";

export const url = "./config.yml";

export default (data, { url }) => {
  const config = {
    backend: {
      name: "git-gateway",
      repo: data.site.repo,
      branch: "main",
      commit_messages: {
        create: 'CMS Create {{collection}} “{{slug}}”',
        update: 'CMS Update {{collection}} “{{slug}}”',
        delete: 'CMS Delete {{collection}} “{{slug}}”',
        uploadMedia: '[skip ci] CMS Upload “{{path}}”',
        deleteMedia: '[skip ci] CMS Delete “{{path}}”',
      },
    },
    media_folder: "_src/img",
    public_folder: "/img",
    display_url: url("/"),
    logo_url: `${data.site.root}/_/apple-touch-icon.png`,
    collections: [],
  };

  // Draft field
  const draftField = field("draft", "boolean", { required: false });
  // Markdown editor buttons - removed Heading 1 and code blocks
  const markdownButtons = ["bold", "italic", "link", "heading-two", "heading-three", "quote", "bulleted-list", "numbered-list"];
  const markdownEditorComponents = ["image", "video"];

  const pageFields = [
    draftField,
    field("title"),
    field("photo", "image", { required: false }),
    field("body", "markdown", {
      buttons: markdownButtons,
      editorComponents: markdownEditorComponents
    }),
    field("layout", "hidden"),
  ];

  // Individual pages
  config.collections.push({
    label: "Page",
    name: "pages",
    description: "Here you can edit your individual pages",
    preview: false,
    files: [
      {
        label: "About",
        name: "about",
        file: "/_src/about.md",
        fields: pageFields,
      }
    ]
  })

  return stringify(config);
};

function field(label, widget = "string", extra = {}) {
  return { label, name: label.toLowerCase(), widget, ...extra };
}
