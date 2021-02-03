import * as React from "react"
import UserDataContext from "../contexts/UserDataContext"
import PropTypes from "prop-types"
import { useLocalStore } from "mobx-react-lite"
import UserDataStore from "../stores/UserData"

interface IUserDataProvider {}

const UserDataProvider: React.FC<IUserDataProvider> = (props) => {
    const localStore = useLocalStore(() => new UserDataStore())
    return <UserDataContext.Provider value={localStore}>{props.children}</UserDataContext.Provider>
}

UserDataProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default UserDataProvider
