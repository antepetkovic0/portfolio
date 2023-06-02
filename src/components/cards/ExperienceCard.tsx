import { ExperienceCardProps } from "@/types/cards";
import TagList from "../tags/TagList";
import BaseCard from "./BaseCard";

export default function ExperienceCard({
  time,
  title,
  companyUrl,
  description,
  tags,
}: ExperienceCardProps) {
  return (
    <BaseCard>
      <div className="text-slate-400 font-semibold text-xs uppercase tracking-wide sm:col-span-2">
        {time}
      </div>
      <div className="sm:col-span-6">
        <h3 className="text-slate-200">
          <a href={companyUrl}>{title}</a>
        </h3>
        <p>{description}</p>
        <TagList tags={tags} />
      </div>
    </BaseCard>
  );
}
