import React from "react"

import { Switch, Route, Link, useLocation } from "react-router-dom"
import UserList from "../../components/UserList/UserList"
import { observer } from "mobx-react-lite"
import Interventions from "../../components/Interventions/Interventions"
import UserDataContext from "../../contexts/UserDataContext"
import { AppBar, List, ListItem, Toolbar } from "@material-ui/core"
const useQuery = () => {
    return new URLSearchParams(useLocation().search)
}
const Menu = observer(() => {
    const query = useQuery()
    const store = React.useContext(UserDataContext)
    const token = query.get("token")

    store?.changeToken(token === null ? store.token : token)
    return (
        <div>
            <AppBar position="relative">
                <Toolbar>
                    <h1>Admin dashboard</h1>
                </Toolbar>
                <List component="nav">
                    <ListItem button component={Link} to="/">
                        Home
                    </ListItem>
                    <ListItem button component={Link} to="/users">
                        Users
                    </ListItem>
                </List>
            </AppBar>
            <Switch>
                <Route path="/users">
                    <UserList />
                </Route>
                <Route path="/">
                    <Interventions></Interventions>
                </Route>
            </Switch>
        </div>
    )
})
export default Menu
