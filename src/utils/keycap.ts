import { Key } from "../types/keys";
import { keyMap } from "./map";

export const getKeyCaps = (key: Key) => {
  return key.split("+").map((key) => {
    return { key, symbol: getKeySymbol(key) ?? key };
  });
};

function getKeySymbol(key: string) {
  const symbol = keyMap[key];
  if (!symbol || typeof symbol === "string") return symbol;
  const userAgent = navigator.userAgent.toLowerCase(),
    macosPlatforms = /(macintosh|macintel|macppc|mac68k|macos)/i,
    windowsPlatforms = /(win32|win64|windows|wince)/i,
    iosPlatforms = /(iphone|ipad|ipod)/i;
  let os = null;

  if (macosPlatforms.test(userAgent) || iosPlatforms.test(userAgent)) {
    os = "mac";
  } else if (windowsPlatforms.test(userAgent)) {
    os = "win";
  } else {
    os = "lin";
  }

  return symbol[os];
}
