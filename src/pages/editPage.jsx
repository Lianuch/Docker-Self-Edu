import { useParams } from "react-router"

export const EditPage = () => {
    const{id}=useParams()
  return (
    <div>editPage {id}</div>
  )
}
