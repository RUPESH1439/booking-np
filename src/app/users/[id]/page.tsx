export default async function ({ params }: { params: { id: string } }) {
  return <div>Hello user {params.id}</div>;
}
