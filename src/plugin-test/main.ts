import * as core from "@actions/core";
import { pluginTestAll } from "~/plugin-test/index.ts";
import { validateSubscription } from "~/utils/subscription.ts";

(async () => {
  try {
    await validateSubscription();
    await pluginTestAll();
  } catch (error) {
    core.setFailed(`Action failed with error ${error}`); // eslint-disable-line @typescript-eslint/restrict-template-expressions
  }
})();
