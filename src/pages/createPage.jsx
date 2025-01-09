import { useNavigate } from "react-router";
import { useAuth } from "../hook/useAuth";

export const createPage = () => {
  const navigate = useNavigate();
  const { signOut } = useAuth();
  return (
    <div>
      <h1>Create a post</h1>

      <button onClick={() => signOut(() => navigate("/", { replace: true }))}>
        Log Out
      </button>
    </div>
  );
};
