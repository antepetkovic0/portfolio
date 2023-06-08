import { useMemo } from "react";
import Email from "./icons-set/Email";
import Github from "./icons-set/Github";
import LinkedIn from "./icons-set/LinkedIn";
import ArrowRight from "./icons-set/ArrowRight";
import File from "./icons-set/File";
import { DEFAULT_ICON_STYLES } from "./icon.styles";

interface IconProps {
  name: "email" | "github" | "linkedin" | "file" | "arrow-right";
}

export default function Icon({ name }: IconProps) {
  const icon = useMemo(() => {
    switch (name) {
      case "email":
        return <Email styles={DEFAULT_ICON_STYLES} />;
      case "github":
        return <Github styles={DEFAULT_ICON_STYLES} />;
      case "linkedin":
        return <LinkedIn styles={DEFAULT_ICON_STYLES} />;
      case "file":
        return (
          <File styles="w-6 h-6 fill-slate-400 group-hover:fill-slate-200" />
        );
      case "arrow-right":
        return <ArrowRight styles={DEFAULT_ICON_STYLES} />;
      default:
        return null;
    }
  }, [name]);

  return icon;
}
