import { cdbg } from "@zkbridge/fdn-dbg";
import { Method } from "./type";

export const dbg = cdbg("@zkbridge/fdn-api→", "color:blue;background:white");

export const GetLikeMethods: Method[] = ["get", "head", "options", "delete"];
