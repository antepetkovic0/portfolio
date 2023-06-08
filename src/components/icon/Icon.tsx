import { useMemo } from "react";
import Github from "./icons-set/Github";
import LinkedIn from "./icons-set/LinkedIn";
import ArrowRight from "./icons-set/ArrowRight";
import { DEFAULT_ICON_STYLES } from "./icon.styles";
import FileDownload from "./icons-set/FileDownload";

interface IconProps {
  name: "github" | "linkedin" | "file-download" | "arrow-right";
}

export default function Icon({ name }: IconProps) {
  const icon = useMemo(() => {
    switch (name) {
      case "github":
        return <Github styles={DEFAULT_ICON_STYLES} />;
      case "linkedin":
        return <LinkedIn styles={DEFAULT_ICON_STYLES} />;
      case "file-download":
        return <FileDownload styles="w-6 h-6 fill-slate-200" />;
      case "arrow-right":
        return <ArrowRight styles={DEFAULT_ICON_STYLES} />;
      default:
        return null;
    }
  }, [name]);

  return icon;
}
