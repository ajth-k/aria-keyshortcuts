import { createContext, PropsWithChildren } from "react";

export type Scope = "__global" | (string & {});

export const ShortcutContext = createContext<{ scopes: Scope[] }>({
  scopes: ["__global"],
});

const ShortcutScope = (props: PropsWithChildren<{ scopes: Scope[] }>) => {
  const { children, ...contextProps } = props;

  return (
    <ShortcutContext.Provider value={{ ...contextProps }}>
      {children}
    </ShortcutContext.Provider>
  );
};

export default ShortcutScope;
