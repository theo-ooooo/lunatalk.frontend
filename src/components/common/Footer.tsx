const FooterItem = [
  { key: "대표이사", value: "강대용" },
  { key: "주소", value: "경기도 부천시 원종로 131(고강동) 3층 서진산업" },
  { key: "사업자등록번호", value: "130-86-59053" },
  { key: "통신판매업신고번호", value: "2011-경기부천-1500" },
  { key: "개인정보관리책임자", value: "강대용" },
  { key: "전화번호", value: "031-634-1234" },
  { key: "이메일", value: "lunatalk_helper@gmail.com" },
];

export default function Footer() {
  return (
    <footer className='bg-[#f5f6f8]'>
      <div className='px-4 py-8'>
        <h2 className='text-[#a1a9ad] font-bold mb-4 text-sm leading-3'>
          (주)서진산업 사업자 정보
        </h2>
        <ul className='font-normal text-[#a1a9ad] text-xs leading-4'>
          {FooterItem.map((item) => (
            <li key={item.key} className='flex gap-3 mb-1'>
              <span>{item.key}</span>
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
