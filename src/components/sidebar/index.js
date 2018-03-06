import { withSelect } from "@wordpress/data";
import { Panel, PanelBody } from "@wordpress/components";
import {
  BlockInspector,
  PostTaxonomiesCheck,
  PostTaxonomies as PostTaxonomiesForm
} from "@wordpress/editor";

import SidebarHeader from "./header";

function Sidebar({ panel }) {
  return (
    <div className="edit-post-sidebar">
      <Panel>
        <SidebarHeader />
        {panel === "template" && (
          <PostTaxonomiesCheck>
            <PanelBody>
              <PostTaxonomiesForm />
            </PanelBody>
          </PostTaxonomiesCheck>
        )}
        {panel === "block" && (
          <PanelBody className="edit-post-block-inspector-panel">
            <BlockInspector />
          </PanelBody>
        )}
      </Panel>
    </div>
  );
}

export default withSelect(select => ({
  panel: select("standalone-gutenberg").getActivePanel()
}))(Sidebar);
