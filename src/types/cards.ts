export interface ExperienceCardProps {
  time: string;
  title: string;
  companyUrl: string;
  description: string;
  tags: string[];
}

export interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
}

export interface CertificateCardProps {
  title: string;
  description: string;
  imageUrl: string;
  pdfUrl: string;
}
