import NextAuth, { NextAuthOptions } from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import AppleProvider from 'next-auth/providers/apple';
import { db } from '../../../firebase';
import { doc, setDoc } from 'firebase/firestore';

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID || "",
      clientSecret: process.env.APPLE_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      if (user) {
        try {
          // Sync user to Firestore
          await setDoc(doc(db, "users", user.id), {
            name: user.name,
            email: user.email,
            image: user.image,
            uid: user.id, // Store auth provider's ID
            updatedAt: new Date().toISOString(),
          }, { merge: true });
        } catch (error) {
          console.error("Error saving user to firestore", error);
        }
      }
      return true;
    },
    async session({ session, token }) {
      if (session?.user && token?.sub) {
        // @ts-ignore
        session.user.id = token.sub;
      }
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
