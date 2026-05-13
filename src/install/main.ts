import * as core from "@actions/core";
import { toolsInstall } from "~/install/index.ts";
import { validateSubscription } from "~/utils/subscription.ts";

(async () => {
  try {
    await validateSubscription();
    await toolsInstall();
  } catch (error) {
    core.setFailed(`Action failed with error ${error}`); // eslint-disable-line @typescript-eslint/restrict-template-expressions
  }
})();
