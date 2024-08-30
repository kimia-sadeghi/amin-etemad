import Link from 'next/link'
import Main from '@/layout/Main'
import axios from 'axios'


export default function Users({users}) {

  return (
	<Main> 
		<h2>Users List</h2>	

		{users.map(user => <li key={user.id}>
			<Link href={`/users/${user.id}`}>{user.name}</Link>
			</li>)}
		
	 </Main>
  )
}



export async function getServerSideProps () {

	const {data : users} = await axios (
		'https://jsonplaceholder.typicode.com/users'
	)

	return {
		props : {
			users
		}
	}
}
