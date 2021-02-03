import React from "react"
import UserData from "../stores/UserData"
const UserDataContext = React.createContext<UserData | null>(null)
export default UserDataContext
