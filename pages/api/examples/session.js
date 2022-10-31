// This is an example of how to access a session from an API route
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

// getSession can still be used in vanilla js code to access the session object,
// or when using useSession hook is not possible, but it's depreciated.

// unstable_getServerSession is now the recommended way to access session
// server side.

// https://next-auth.js.org/configuration/nextjs#unstable_getserversession

export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);
  res.send(JSON.stringify(session, null, 2));
};
