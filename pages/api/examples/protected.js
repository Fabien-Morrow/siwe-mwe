// This is an example of to protect an API route
import { getSession } from "next-auth/react";

// getSession can still be used in vanilla js code to access the session object,
// or when using useSession hook is not possible, but it's depreciated.

// unstable_getServerSession is now the recommended way to access session
// server side.

// https://next-auth.js.org/configuration/nextjs#unstable_getserversession

// old way api call with getSession

export default async (req, res) => {
  const session = await getSession({ req });

  if (session) {
    res.send({
      content:
        "This is protected content served with getSession. You can access this content because you are signed in.",
    });
  } else {
    res.send({
      error:
        "You must be signed in to view the getSession protected content on this page.",
    });
  }
};
