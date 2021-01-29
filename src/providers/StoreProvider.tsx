import * as React from "react"
import InterventionsContext from "../contexts/InterventionsContext"
import PropTypes from "prop-types"
import { useLocalStore } from "mobx-react-lite"
import Store from "../stores/Store"

interface IStoreProvider {}

const StoreProvider: React.FC<IStoreProvider> = (props) => {
    const localStore = useLocalStore(() => new Store())
    return <InterventionsContext.Provider value={localStore}>{props.children}</InterventionsContext.Provider>
}

StoreProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default StoreProvider
