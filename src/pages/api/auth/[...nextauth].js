// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import GitHubProvider from 'next-auth/providers/github';

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    async session({ session, token }) {
      // اطلاعات بیشتری که می‌خواهید به سشن اضافه کنید را در اینجا اضافه کنید
      session.user.id = token.sub;
      session.accessToken = token.accessToken;
      return session;
    },
    async jwt({ token, user, account }) {
      if (account) {
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
});






// // pages/api/auth/[...nextauth].js
// import NextAuth from "next-auth";
// import GithubProvider from "next-auth/providers/github";

// export const authOptions = {
//   providers: [
//     GithubProvider({
//       clientId: process.env.GITHUB_CLIENT_ID,
//       clientSecret: process.env.GITHUB_CLIENT_SECRET,
//       authorization: {
//         params: {
//           scope: "repo", // برای دسترسی به ریپازیتوری‌ها
//         },
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, account }) {
//       // ذخیره توکن دسترسی در JWT
//       if (account) {
//         token.accessToken = account.access_token;
//       }
//       return token;
//     },
//     async session({ session, token }) {
//       // ذخیره توکن دسترسی در session
//       session.accessToken = token.accessToken;
//       return session;
//     },
//   },
// };

// export default NextAuth(authOptions);
