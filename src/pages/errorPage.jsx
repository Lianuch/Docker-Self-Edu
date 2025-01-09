import { useRouteError } from "react-router"

export const ErrorPage = () => {
    const error = useRouteError()
    return (
    <div>
        <h1>{error.status}</h1>
        <h2>{error.statusText || "smth went wrong"}</h2>
    </div>
  )
}
