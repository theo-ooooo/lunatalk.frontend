export default function Empty({
  title,
  subTitle,
}: {
  title: string;
  subTitle?: string;
}) {
  return (
    <div className='flex h-svh flex-col items-center justify-center tracking-tight'>
      <p className='font-bold text-lg'>{title}</p>
      {subTitle ?? <p className='text-[#a1a9ad]'>{subTitle}</p>}
    </div>
  );
}
