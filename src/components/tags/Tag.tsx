import { TagProps } from "@/types/tags";

export default function Tag({ name }: TagProps) {
  return (
    <div className="rounded-full bg-teal-400/10 text-teal-300 text-xs font-medium px-4 py-2">
      {name}
    </div>
  );
}
