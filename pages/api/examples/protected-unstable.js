// This is an example of to protect an API route
import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "../auth/[...nextauth]";

// getSession can still be used in vanilla js code to access the session object,
// or when using useSession hook is not possible, but it's depreciated.

// unstable_getServerSession is now the recommended way to access session
// server side.

// https://next-auth.js.org/configuration/nextjs#unstable_getserversession
export default async (req, res) => {
  const session = await unstable_getServerSession(req, res, authOptions);

  if (session) {
    res.send({
      content:
        "This is protected content served with unstable_getServerSession. You can access this content because you are signed in. The content is served faster than with getSession.",
    });
  } else {
    res.send({
      error:
        "You must be signed in to view the unstable_getServerSession protected content on this page.",
    });
  }
};
