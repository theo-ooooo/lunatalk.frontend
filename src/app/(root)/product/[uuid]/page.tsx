export default function Page({ params }: { params: { uuid: string } }) {
  const { uuid } = params;
  console.log(params);
  return <div>{uuid}</div>;
}
