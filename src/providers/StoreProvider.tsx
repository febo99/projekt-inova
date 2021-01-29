import * as React from "react"
import InterventionsContext from "../contexts/InterventionsContext"
import PropTypes from "prop-types"
import { useLocalObservable } from "mobx-react-lite"
import Store from "../stores/Store"

interface IStoreProvider {}

const StoreProvider: React.FC<IStoreProvider> = (props) => {
    const store = useLocalObservable(() => new Store())
    return <InterventionsContext.Provider value={store}>{props.children}</InterventionsContext.Provider>
}

StoreProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default StoreProvider
