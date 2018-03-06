import { registerStore } from "@wordpress/data";

import reducer from "./reducer";
import * as selectors from "./selectors";
import * as actions from "./actions";

const MODULE_KEY = "standalone-gutenberg";
registerStore(MODULE_KEY, { reducer, actions, selectors });
