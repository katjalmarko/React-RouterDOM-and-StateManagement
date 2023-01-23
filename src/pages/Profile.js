import "./Profile.css"
import { ChangeProfile } from "../components/ChangeProfile"
import { useContext } from "react"
import { AppContext } from '../Router-dom'
import Form from "../components/Form"


export const Profile = () => {
  const { username } = useContext(AppContext)

  return <div className="profile"> 
         
          <div className="profilechanging">
          <h2>Current User: "{username}"</h2>
           <ChangeProfile /> 
          </div>

           <div>
            <Form />
           </div>

         </div>
}