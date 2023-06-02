import { TagListProps } from "@/types/tags";
import Tag from "./Tag";

export default function TagList({ tagNames }: TagListProps) {
  return (
    <ul className="flex flex-wrap">
      {tagNames.map((tagName) => (
        <li key={tagName} className="mr-2 mt-2">
          <Tag name={tagName} />
        </li>
      ))}
    </ul>
  );
}
