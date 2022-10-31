import { useState, useEffect } from "react";
import AccessDenied from "../components/access-denied";

export default function ProtectedPage() {
  const [content, setContent] = useState();
  const [error, setError] = useState();

  // Fetch content from protected route
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/examples/protected-unstable");
      const json = await res.json();
      if (json.content) {
        setContent(json.content);
      } else if (json.error) {
        setError(json.error);
      }
    };
    fetchData();
  }, []);

  // If no session exists, display access denied message
  if (error) {
    return <AccessDenied />;
  }

  // If session exists, display content
  return (
    <div>
      <h1>Protected Page</h1>
      <p>
        <strong>{content ?? "\u00a0"}</strong>
      </p>
    </div>
  );
}
