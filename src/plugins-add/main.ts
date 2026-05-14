import * as core from "@actions/core";
import { pluginsAdd } from "~/plugins-add/index.ts";
import { validateSubscription } from "~/utils/subscription.ts";

(async () => {
  try {
    await validateSubscription();
    await pluginsAdd();
  } catch (error) {
    core.setFailed(`Action failed with error ${error}`); // eslint-disable-line @typescript-eslint/restrict-template-expressions
  }
})();
