import { ProjectCardProps } from "@/types/cards";
import BaseCard from "./BaseCard";
import Link from "next/link";
import Image from "next/image";

export default function ProjectCard({
  title,
  description,
  imageUrl,
}: ProjectCardProps) {
  return (
    <Link href={`/projects/${title}`} className="z-20">
      <BaseCard>
        <div className="z-10 sm:col-span-6 sm:order-2">
          <h3 className="text-slate-200">{title}</h3>
          <p className="text-sm">{description}</p>
        </div>
        <div className="sm:col-span-2 mt-1">
          <Image
            src={imageUrl}
            alt={title}
            width={400}
            height={300}
            className="rounded"
          />
        </div>
      </BaseCard>
    </Link>
  );
}
