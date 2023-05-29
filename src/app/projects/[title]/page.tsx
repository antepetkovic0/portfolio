export default function Project({ params }: { params: { title: string } }) {
  return <div>Specific project {params.title}</div>;
}
