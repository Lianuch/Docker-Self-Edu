import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";


export const SinglePage = () => {
  const{id}=useParams()
  const navigate = useNavigate()

  const [post, setPost] = useState(null);

  const goBack=()=>navigate(-1)
  // const goHome=()=>navigate('/',{replace:true})


  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  
  return (
    <div>
      <button onClick={goBack}>go back</button>

      {/* <button onClick={goHome}>go home</button> */}
      {post&&(
        <>
          <h1>{post.title}</h1>
          <h1>{post.body}</h1>
          <Link to={`/posts/${id}/edit`}>EDIT POST</Link>
        </>
      )}
    </div>
  )
}
