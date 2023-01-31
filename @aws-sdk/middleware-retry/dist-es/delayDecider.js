import { MAXIMUM_RETRY_DELAY } from "@aws-sdk/util-retry";
export const defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
