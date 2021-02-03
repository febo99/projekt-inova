import React from "react"

import StoreProvider from "../../providers/StoreProvider"
import ObservableInterventionsList from "../../components/ObservableInterventionsList/ObservableInterventionsList"
import InterventionForm from "../../components/InterventionForm/InterventionForm"
import InfoHeader from "../../components/InfoHeader/InfoHeader"
import { observer } from "mobx-react-lite"

const Interventions = observer(() => {
    return (
        <StoreProvider>
            <InfoHeader></InfoHeader>
            <ObservableInterventionsList></ObservableInterventionsList>
            <InterventionForm></InterventionForm>
        </StoreProvider>
    )
})
export default Interventions
