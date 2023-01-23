import "./Home.css"
import { useContext } from "react"
import { AppContext } from '../Router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"

export const Home = () => {

  const { username } = useContext(AppContext);

  const { 
    data,
    isLoading, 
    isError, 
    refetch 
  } = useQuery(["cat"], () => {
    return axios.get("https://catfact.ninja/fact")
    .then((res) => res.data);
  } )
  // no need to use state here, all the API in {data}

  if (isError) {
    return <h1>Error "something is not right"</h1>
  }

  if (isLoading) {
    return <h1>Loading...</h1>
  }

  return (
    <div className="home">
      <h1>
      Welcome to home page: "{username}""
      </h1>
      <h2>Here is a random Cat Fact:</h2>
      <p> {data?.fact}</p>
      <button className="homebutton"
      onClick={refetch}>Update Data</button>
    </div>
  )
}