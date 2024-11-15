import Link from "next/link";

export default function Page() {
  return (
    <form>
      <div className='h-svh p-3 flex flex-col gap-5'>
        <div>
          <h2 className='text-xl font-bold tracking-tight mb-2'>
            이메일로 로그인 하기
          </h2>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col gap-1'>
            <label htmlFor='email' className='text-xs tracking-tight'>
              이메일 주소
            </label>
            <input
              type='text'
              id='loginId'
              className='w-full border-2 rounded-md px-4 h-12 outline-none'
              placeholder='아이디'
            />
          </div>
          <div>
            <label htmlFor='password' className='text-xs tracking-tight'>
              비밀번호
            </label>
            <input
              type='password'
              id='password'
              placeholder='비밀번호'
              className='w-full border-2 rounded-md px-4 h-12 outline-none'
            />
          </div>
        </div>
        <div>
          <button
            type='submit'
            className='w-full bg-black text-white rounded-full px-4 h-12'
          >
            로그인
          </button>
        </div>
        <div>
          <div className='flex items-center gap-8 justify-end'>
            <Link
              href={"/auth/find/login_id"}
              className='text-xs tracking-tight'
            >
              아이디 찾기
            </Link>
            <Link
              href={"/auth/find/password"}
              className='text-xs tracking-tight'
            >
              비밀번호 찾기
            </Link>
          </div>
        </div>
        <div className='flex items-center gap-1 justify-center'>
          <span className='text-xs text-[#828a8f]'>
            아직 루나톡 계정이 없으신가요?
          </span>
          <Link href={"/auth/register"} className='text-xs tracking-tight'>
            회원가입하기
          </Link>
        </div>
      </div>
    </form>
  );
}
