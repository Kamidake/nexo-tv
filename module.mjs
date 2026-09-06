// @ts-check
import { module } from "@prisma/composer";
import backendService from "./packages/backend/service.mjs";

export default module("nexo-tv", ({ provision }) => {
  provision(backendService);
});
