import { signOut } from "next-auth/react";

export default function RepositoryList() {
  return (
	<div>
		    <div className="h-screen flex flex-col items-center justify-center ">
		 <div className="flex items-center text-black  gap-4 p-[20px]">
		<h1>لیست ریپازیتوری‌های شما</h1>
      <button className="text-[#1e293b] border border-solid border-[#e2e8f0] rounded-lg px-4 py-2 hover:bg-[#283e5317] transition-all duration-300" onClick={() => signOut()}>خروج</button>
	  </div>
      {repositories.length === 0 ? (
        <p>هیچ ریپازیتوری یافت نشد.</p>
      ) : (
        <ul className="text-[#1e293b] overflow-auto w-[100%] flex flex-col items-center">
          {repositories.map((repo) => (
            <li className="w-[50%] flex items-center justify-between border border-solid border-[#e2e8f0] transition-all duration-300 bg-white rounded-lg hover:shadow-xl py-[30px] px-[20px] m-4 shadow-[-1px_3px_10px_0_rgba(0,0,0,0.05)]" key={repo.id}>
             <div className="flex gap-[15px]">
				 <h2>{repo.name}</h2>
              <p>آخرین آپدیت: {new Date(repo.updated_at).toLocaleDateString()}</p>
              <p>سازنده: {repo.owner.login}</p>
			 </div>
             <div>
				 <a href={`${repo.html_url}/archive/refs/heads/main.zip`} download>
                <button className="bg-[#671cc9] rounded-lg text-white py-[10px] px-[20px] text-[13px]">دانلود به صورت ZIP</button>
              </a>
			 </div>
            </li>
          ))}
        </ul>
      )}
	 </div>
	</div>
  )
}
