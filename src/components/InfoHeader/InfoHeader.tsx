import { Box } from "@material-ui/core"
import { observer } from "mobx-react-lite"
import * as React from "react"
import InterventionsContext from "../../contexts/InterventionsContext"
import { H3 } from "../../styles/Styles"

interface IInfoHeaderProps {}

const InfoHeader: React.FC<IInfoHeaderProps> = observer(() => {
    const store = React.useContext(InterventionsContext)

    return (
        <div>
            <Box display="flex">
                <H3>Number of all: {store?.interventions.length}</H3>
                <H3>Active: {store?.numberOfActiveInterventions}</H3>
                <H3>Finished: {store?.numberOfCompletedInterventions}</H3>
            </Box>
        </div>
    )
})

export default InfoHeader
