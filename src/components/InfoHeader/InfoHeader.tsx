import { AppBar, Toolbar, Box } from "@material-ui/core"
import { observer } from "mobx-react-lite"
import * as React from "react"
import InterventionsContext from "../../contexts/InterventionsContext"
import { H3 } from "../../styles/Styles"

interface IInfoHeaderProps {}

const InfoHeader: React.FC<IInfoHeaderProps> = observer(() => {
    const store = React.useContext(InterventionsContext)

    return (
        <div>
            <AppBar position="relative">
                <Toolbar>
                    <h1>List of interventions</h1>
                </Toolbar>
            </AppBar>
            <Box display="flex">
                <H3>Number of all: {store?.interventions.length}</H3>
                <H3>Active: {store?.numberOfActiveInterventions}</H3>
                <H3>Finished: {store?.numberOfCompletedInterventions}</H3>
            </Box>
        </div>
    )
})

export default InfoHeader
