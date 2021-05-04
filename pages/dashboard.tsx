import { useContext, useEffect } from "react"
import { AuthContext, singOut } from "../Contexts/AuthContext"
import { api } from "../services/api";

export default function Dashboard() {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    api.get('/me').then(response => console.log(response)).catch(() => {
      singOut();
    })
  }, [])

  return (
    <h1>Dashboard: { user?.email }</h1>
  )
}