export default function Page({ params }: { params: { uuid: string } }) {
  const { uuid } = params;
  return <div>{uuid}</div>;
}
