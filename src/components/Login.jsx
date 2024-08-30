import Image from 'next/image'
import { signIn } from "next-auth/react";


export default function Login() {
  return (
	<div>
			<div className='flex w-100 items-center justify-center h-screen'>
		<div className='max-w-[520px] w-[90%] h-[320px] text-[#fff] rounded-[4px] border border-solid border-[rgb(255,255,255)]/[.10] overflow-hidden bg-white shadow-[-1px_3px_10px_0_rgba(0,0,0,0.05)]'>
			<div className='p-4 flex flex-col items-center text-center mt-4'>
				<div className='flex items-center justify-center'>
				<Image src={'/images/logo.webp'} width={64} height={64} alt='logo' />
			</div>
			
				<h1 className='text-[2.125rem] font-semibold leading-[1.235] tracking-[0.00735em] mt-[1rem] mb-[0.5rem] text-center text-[#1e293b]'>
					GITGALAXY
				</h1>
				
				<p className='text-xs leading-[1.5] tracking-[0.00938em] text-[#64748b] w-[80%]'>
					Introducing GitGalaxy, the web app for Github users. With GitGalaxy, you can easily log in, view your repositories, and download repo contents from one user-friendly platform.
				</p>
			</div>

			<div className='flex items-center justify-center text-center'>
				
				  <button className="py-[10px] w-[207px] flex items-center justify-center rounded-[10px] bg-[#030093] text-white text-[14px]" onClick={() => signIn("github")}>  Login with GitHub</button>
			</div>
			
		</div>
	</div>
	</div>
  )
}
