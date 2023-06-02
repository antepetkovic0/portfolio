import { TagListProps } from "@/types/tags";
import Tag from "./Tag";

export default function TagList({ tags }: TagListProps) {
  return (
    <ul className="flex flex-wrap">
      {tags.map((tag) => (
        <li key={tag} className="mr-2 mt-2">
          <Tag name={tag} />
        </li>
      ))}
    </ul>
  );
}
