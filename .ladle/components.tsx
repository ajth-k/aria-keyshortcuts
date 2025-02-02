import type { GlobalProvider } from "@ladle/react";
import React from "react";
import KeyShortcutProvider from "../src/components/KeyShortcutProvider";
import { ComponentProps } from "react";

export const Provider: GlobalProvider = (
  props: ComponentProps<GlobalProvider>,
) => {
  return <KeyShortcutProvider>{props.children}</KeyShortcutProvider>;
};
