/**
 * External dependencies
 */
import { withSelect, withDispatch } from "@wordpress/data";
import { compose } from "@wordpress/element";
import { __, _n, sprintf } from "@wordpress/i18n";
import { IconButton } from "@wordpress/components";
import { query } from "@wordpress/data";

const SidebarHeader = ({ panel, onSetPanel, onToggleSidebar, count }) => {
  // Do not display "0 Blocks".
  count = count === 0 ? 1 : count;
  const closeSidebar = () => onToggleSidebar(undefined, false);

  return (
    <div className="components-panel__header edit-post-sidebar__panel-tabs">
      <button
        onClick={() => onSetPanel("template")}
        className={`edit-post-sidebar__panel-tab ${
          panel === "template" ? "is-active" : ""
        }`}
        aria-label={__("Template settings")}
      >
        {__("Template")}
      </button>
      <button
        onClick={() => onSetPanel("block")}
        className={`edit-post-sidebar__panel-tab ${
          panel === "block" ? "is-active" : ""
        }`}
        aria-label={__("Block settings")}
      >
        {sprintf(_n("Block", "%d Blocks", count), count)}
      </button>
      <IconButton
        onClick={closeSidebar}
        icon="no-alt"
        label={__("Close settings")}
      />
    </div>
  );
};

export default compose(
  withSelect(select => ({
    count: select("core/editor").getSelectedBlockCount(),
    panel: select("standalone-gutenberg").getActivePanel()
  })),
  withDispatch(dispatch => ({
    onSetPanel: dispatch("standalone-gutenberg").setActivePanel,
    onToggleSidebar: dispatch("standalone-gutenberg").toggleSidebar
  }))
)(SidebarHeader);
