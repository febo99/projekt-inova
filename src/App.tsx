import React from "react"
import "./App.css"
import { observer } from "mobx-react-lite"
import { BrowserRouter as Router } from "react-router-dom"
import UserDataProvider from "./providers/UserDataProvider"
import Menu from "./components/Menu/Menu"

const App = observer(() => {
    return (
        <div>
            <UserDataProvider>
                {/* Router must be in a parent component so useLocation works */}
                <Router>
                    <Menu></Menu>
                </Router>
            </UserDataProvider>
        </div>
    )
})

export default App
