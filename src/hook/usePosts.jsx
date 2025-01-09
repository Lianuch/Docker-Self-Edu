import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const usePosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  const postQuery = searchParams.get("post") || "";
  const latest = searchParams.has("latest");
  const startsFrom = latest ? 80 : 1;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => setPosts(data))
      .catch((err) => setError(err.message));
  }, []);

  return { posts, error, postQuery, latest, startsFrom, setSearchParams };
};
