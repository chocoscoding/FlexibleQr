import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/app/libs/prismadb";

export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
      profile(profile) {
        return {
          id: profile.sub,
          email: profile.email,
          image: profile.picture,
          firstname: profile.given_name,
          lastname: profile.family_name,
          country: profile.locale,
          dob: profile.birthday,
          emailVerified: profile.email_verified,
          name: profile.name,
        };
      },
    }),
  ],
  // callbacks
  callbacks: {
    async session({ session, token, user }: any) {
      session.user.id = token.sub;
      return session;
    },
  },
  pages: {},
  debug: process.env.NODE_ENV === "development",
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
