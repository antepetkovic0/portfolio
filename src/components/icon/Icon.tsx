import { useMemo } from "react";
import Github from "./icons-set/Github";
import LinkedIn from "./icons-set/LinkedIn";
import { DEFAULT_ICON_STYLES } from "./icon.styles";

interface IconProps {
  name: "github" | "linkedin";
}

export default function Icon({ name }: IconProps) {
  const icon = useMemo(() => {
    switch (name) {
      case "github":
        return <Github styles={DEFAULT_ICON_STYLES} />;
      case "linkedin":
        return <LinkedIn styles={DEFAULT_ICON_STYLES} />;
      default:
        return null;
    }
  }, [name]);

  return icon;
}
