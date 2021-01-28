import { Observer } from "mobx-react-lite"
import * as React from "react"
import InterventionsContext from "../../contexts/InterventionsContext"
import { StoreInterface } from "../../interfaces/Interfaces"
import { Checkbox, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@material-ui/core"

interface IObservableInterventionsListProps {}

const ObservableInterventionsList: React.FC<IObservableInterventionsListProps> = () => {
    const store: StoreInterface | null = React.useContext(InterventionsContext)

    return (
        <Observer>
            {() => (
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Naziv</TableCell>
                                <TableCell>Lokacija</TableCell>
                                <TableCell>Vodja intervencije</TableCell>
                                <TableCell>Stanje</TableCell>
                            </TableRow>
                        </TableHead>

                        <TableBody>
                            {store?.interventions.map((intervention, idx) => (
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
            )}
        </Observer>
    )
}

export default ObservableInterventionsList
