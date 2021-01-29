import { observer } from "mobx-react-lite"
import * as React from "react"
import InterventionsContext from "../../contexts/InterventionsContext"
import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core"

interface IObservableInterventionsListProps {}

const ObservableInterventionsList: React.FC<IObservableInterventionsListProps> = observer(() => {
    const store = React.useContext(InterventionsContext)

    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Location</TableCell>
                        <TableCell>Leader</TableCell>
                        <TableCell>Status</TableCell>
                    </TableRow>
                </TableHead>

                <TableBody>
                    {store.interventions?.map((intervention, idx) => (
                        <TableRow key={idx} onDoubleClick={() => store.removeIntervention(intervention)}>
                            <TableCell>{intervention.name}</TableCell>
                            <TableCell>{intervention.location}</TableCell>
                            <TableCell>{intervention.leader}</TableCell>
                            <TableCell>
                                <Checkbox color="primary" onChange={() => store.completeIntervention(intervention)} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
})

export default ObservableInterventionsList
