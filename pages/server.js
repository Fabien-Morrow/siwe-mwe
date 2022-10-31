import { unstable_getServerSession } from "next-auth/next";
import { authOptions } from "./api/auth/[...nextauth]";

// Export the `session` prop to use sessions with Server Side Rendering
export async function getServerSideProps(context) {
  const session = await unstable_getServerSession(
    context.req,
    context.res,
    authOptions
  );
  return {
    props: {
      session: JSON.parse(JSON.stringify(session)),
    },
  };
}

export default function ServerSidePage({ session }) {
  // As this page uses Server Side Rendering, the `session` will be already
  // populated on render with getServerSideProps, who is executed only on
  // the server side.

  return (
    <div>
      <h1>Server Side Rendering</h1>
      <p>
        This page uses <strong>unstable_getServerSession()</strong> method in{" "}
        <strong>getServerSideProps()</strong>.
      </p>
      <p>
        Using <strong>unstable_getServerSession()</strong> in{" "}
        <strong>getServerSideProps()</strong> is the recommended approach if you
        need to support Server Side Rendering with authentication.
      </p>
      <p>
        The advantage of Server Side Rendering is this page does not require
        client side JavaScript.
      </p>
      <p>
        The disadvantage of Server Side Rendering is that this page is slower to
        render.
      </p>
      <p>
        This is the content of the session object, returned by
        getServerSideProps :
      </p>
      {JSON.stringify(session)}
    </div>
  );
}
