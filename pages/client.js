import { useSession } from "next-auth/react";

export default function ClientPage() {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Client Side Rendering</h1>
      <p>
        This page uses the <strong>useSession()</strong> React Hook.
      </p>
      <p>
        The <strong>useSession()</strong> React Hook is easy to use and allows
        pages to render very quickly.
      </p>
      <p>
        The advantage of this approach is that session state is shared between
        pages by using the <strong>Provider</strong> in <strong>_app.js</strong>{" "}
        so that navigation between pages using <strong>useSession()</strong> is
        very fast.
      </p>
      <p>
        The disadvantage of <strong>useSession()</strong> is that it requires
        client side JavaScript.
      </p>
      <p>
        It's standart clientside rendering, nothing protected here, but ofc if
        you're not logged session is null
      </p>
      <p>
        Below is result of <strong>JSON.stringify(session)</strong>, returned by{" "}
        <strong>useSession()</strong>,
      </p>
      {JSON.stringify(session)}
    </div>
  );
}
