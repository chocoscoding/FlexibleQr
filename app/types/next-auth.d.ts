import { Session, DefaultSession } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";

declare module "next-auth" {
  interface Session {
    user: {
      id: string;
      name: string,
    email: string,
    image: string,
    
    } & DefaultSession;
  }
}

/** Example on how to extend the built-in types for JWT */
declare module "next-auth/jwt" {
  interface JWT {
    user: {
      id: string;
      name: string,
    email: string,
    image: string,
    
    } & DefaultJWT;
  }
}
