import { render } from "@wordpress/element";
import { EditorProvider } from "@wordpress/editor";
import { registerCoreBlocks } from "@wordpress/blocks";

import "./buttons.scss";
import "./style.scss";

import "./store";
import Layout from "./components/layout";

const settings = {};
const post = {
  id: 1,
  title: {
    raw: ""
  },
  content: {
    raw: ""
  }
};

registerCoreBlocks();
render(
  <EditorProvider settings={settings} post={post}>
    <Layout />
  </EditorProvider>,
  document.getElementById("root")
);
