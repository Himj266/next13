//types
import type { ReactNode } from "react";

const AboutLayout = ({ children }: { children: ReactNode }) => {
  return <div className="bg-sky-800 h-full w-full">{children}</div>;
};

export default AboutLayout;
