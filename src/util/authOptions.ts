import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import { login, loginWithFacebook, loginWithGoogle } from "@/api/auth";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          if (!credentials) return null;

          const res = await login(credentials.email, credentials.password);
          const data = res?.data;

          if (data?.user) {
            return {
              ...data.user.user,
              role: data.user.role,
              accessToken: data.token.accessToken,
              refreshToken: data.token.refreshToken,
            };
          }

          return null;
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      }

    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID || "",
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET || "",

      token: {
        url: "https://graph.facebook.com/oauth/access_token",
        async request(context) {
          const url =
            `https://graph.facebook.com/oauth/access_token` +
            `?code=${context.params.code}` +
            `&client_id=${context.provider.clientId}` +
            `&redirect_uri=${context.provider.callbackUrl}` +
            `&client_secret=${context.provider.clientSecret}`;
          const response = await fetch(url);
          const tokens = await response.json();
          return { tokens };
        },
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if (
        account &&
        (account.provider === "google" || account.provider === "facebook")
      ) {
        try {
          if (account.provider === "facebook") {
            const idToken = account.access_token;

            // const response = await loginWithFacebook(idToken);

            // if (!response.ok) throw new Error("Login with Facebook failed");

            // const data = await response.json();

            // if (data?.data?.user) {
            //   const fullUser = {
            //     ...data.data.user.user,
            //     role: data.data.user.role,
            //     accessToken: data.data.token.accessToken,
            //     refreshToken: data.data.token.refreshToken,
            //   };

            //   Object.assign(user, fullUser);
            // }
          }

          if (account.provider === "google") {
            const idToken = account.id_token;

            // const response = await loginWithGoogle(idToken);

            // if (!response.ok) throw new Error("Login with Google failed");

            // const data = await response.json();

            // if (data?.data?.user) {
            //   const fullUser = {
            //     ...data.data.user.user,
            //     role: data.data.user.role,
            //     accessToken: data.data.token.accessToken,
            //     refreshToken: data.data.token.refreshToken,
            //   };

            //   Object.assign(user, fullUser);
            // }
          }

          return true;
        } catch (error) {
          console.error("Social login error:", error);
          return false;
        }
      }

      return true;
    },

    async redirect({ url, baseUrl }) {
      // console.log("Redirecting", url, baseUrl);
      if (url.includes("facebook") || url.includes("google")) {
        return Promise.resolve(url);
      }
      return Promise.resolve(baseUrl);
    },
    async jwt({ token, user, trigger, session }) {
      if (user) {
        return { ...token, ...user };
      }

      if (trigger === "update" && session) {
        return {
          ...token,
          ...session,
          updated_at: session.updated_at || Date.now()
        };
      }

      return token;
    },
    async session({ session, token }) {
      session.user = {
        ...token
      };

      return session;
    },
  },
  pages: {
    error: "/auth/login",
    // signIn: "/login/close",
    signIn: "/login",
  },
};