import { Link } from "react-router-dom";
import { BlogFilter } from "../components/BlogFilter";

import { usePosts } from "../hook/usePosts";

export const BlogPage = () => {
  const {posts, error, postQuery, latest, startsFrom, setSearchParams } = usePosts()
 
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>News</h1>

      <BlogFilter
        setSearchParams={setSearchParams}
        postQuery={postQuery}
        latest={latest}
      />

      <Link to={"/posts/new"}>Add new post</Link>

      {posts
        .filter(
          (post) => post.title.includes(postQuery) && post.id >= startsFrom
        )
        .map((post) => (
          <Link key={post.id} to={`/posts/${post.id}`}>
            <li>{post.title}</li>
          </Link>
        ))}
    </div>
  );
};
