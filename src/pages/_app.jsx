import '@/style/general.css'
import '../style/globals.css'
import { SessionProvider } from "next-auth/react";


// export default function App ({Component, pageProps}) {
// 	console.log(Component)
// 	return <Component {...pageProps} />
// }

export default function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  );
}
 
export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}
 
export function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}



