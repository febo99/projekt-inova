import React from "react"
import "./App.css"
import { observer, useLocalObservable } from "mobx-react-lite"
import StoreProvider from "./providers/StoreProvider"
import ObservableInterventionsList from "./components/ObservableInterventionsList/ObservableInterventionsList"
import InterventionForm from "./components/InterventionForm/InterventionForm"
import InfoHeader from "./components/InfoHeader/InfoHeader"
import Store from "./stores/Store"

const App = observer(() => {
    const store = useLocalObservable(() => new Store())
    return (
        <StoreProvider store={store}>
            <InfoHeader></InfoHeader>
            <ObservableInterventionsList></ObservableInterventionsList>
            <InterventionForm></InterventionForm>
        </StoreProvider>
    )
})

export default App
