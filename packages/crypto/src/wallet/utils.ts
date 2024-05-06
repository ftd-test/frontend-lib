import { uaHelper } from "../utils/ua";
import { injectedProviders, WalletName } from "./injectedProviders";

export const jump2NativeAppOrDlPage = (name: WalletName = "metamask") => {
  if (uaHelper.isMobile()) {
    const target = injectedProviders[name].getDeeplink(window.location.href);
    console.log("jump2to", target);
    window.open(target, "_blank");
  } else if (uaHelper.isBrowser()) {
    window.open(injectedProviders[name].pcDownloadUrl, "_blank");
  }
};

export const resolveIfNeed = async <T>(value: Promise<T> | T) => {
  if (value instanceof Promise) {
    return await value;
  }
  return value;
};
