import { Box, FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import { observer } from "mobx-react-lite"
import * as React from "react"
import UserDataContext from "../../contexts/UserDataContext"
// import InterventionsContext from "../../contexts/InterventionsContext"

interface ICompanySelectorProps {}

interface IEmailId {
    name: string
    id: string
}

const CompanySelector: React.FC<ICompanySelectorProps> = observer(() => {
    const [companies, setCompanies] = React.useState<IEmailId[]>([])

    const store = React.useContext(UserDataContext)
    const getCompanies = async () => {
        const response = await fetch(`http://localhost:5000/project-tracking-dev/europe-west3/api/companies?token=${store?.token as string}`)
        return await response.json()
    }
    React.useEffect(() => {
        getCompanies().then((companies) => {
            // eslint-disable-next-line no-console
            console.log(companies)
            const storeComp = [] as IEmailId[]
            companies.forEach((c: any) => {
                storeComp.push({ name: c.name, id: c.id } as IEmailId)
            })
            setCompanies(storeComp)
        })
    })
    return (
        <div>
            <Box display="flex">
                <FormControl>
                    <InputLabel>Company</InputLabel>
                    <Select>
                        {companies.map((item: IEmailId) => {
                            return <MenuItem key={item.id}>{item.name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </Box>
        </div>
    )
})

export default CompanySelector
