import React from "react"
import Store from "../stores/Store"
const InterventionsContext = React.createContext<Store | null>(null)
export default InterventionsContext
