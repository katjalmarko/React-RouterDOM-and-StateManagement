import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from "react"
import { AppContext } from '../Router-dom'


export const Profile = () => {
  const { username } = useContext(AppContext)

  return <div> 
           user is: {username}
           <ChangeProfile /> 
         </div>
}