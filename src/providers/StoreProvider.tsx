import * as React from "react"
import InterventionsContext from "../contexts/InterventionsContext"
import PropTypes from "prop-types"
import Store from "../stores/Store"

interface IStoreProvider {
    store: Store
    children: React.ReactNode
}

const StoreProvider: React.FC<IStoreProvider> = (props) => {
    return <InterventionsContext.Provider value={props.store}>{props.children}</InterventionsContext.Provider>
}

StoreProvider.propTypes = {
    store: PropTypes.instanceOf(Store).isRequired,
    children: PropTypes.node.isRequired,
}

export default StoreProvider
