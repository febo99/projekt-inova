import * as React from "react"
import InterventionsContext from "../contexts/InterventionsContext"
import PropTypes from "prop-types"
import { useLocalObservable } from "mobx-react-lite"
import { StoreInterface } from "../interfaces/Interfaces"
import Store from "../stores/Store"

interface IStoreProvider {}

const StoreProvider: React.FC<IStoreProvider> = (props) => {
    const store: StoreInterface = useLocalObservable<StoreInterface>(Store)

    return <InterventionsContext.Provider value={store}>{props.children}</InterventionsContext.Provider>
}

StoreProvider.propTypes = {
    children: PropTypes.node.isRequired,
}

export default StoreProvider
