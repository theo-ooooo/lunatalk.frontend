import { MyInformation } from "@/lib/api/my";

export default async function MyInfomation() {
  const data = await MyInformation();

  return (
    <div className='bg-white flex flex-col gap-3 p-14 items-center'>
      <div className='text-xl font-bold'>{data.name}</div>
      <div className='text-sm text-gray-500'>{data.email}</div>
    </div>
  );
}
