import { cdbg } from "@zkbridge/dbg";
import { Method } from "./type";

export const dbg = cdbg("@zkbridge/api→", "color:blue;background:white");

export const GetLikeMethods: Method[] = ["get", "head", "options", "delete"];
