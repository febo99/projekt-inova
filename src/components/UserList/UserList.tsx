import { Box } from "@material-ui/core"
import { observer } from "mobx-react-lite"
import * as React from "react"
import UserDataContext from "../../contexts/UserDataContext"
import { H3 } from "../../styles/Styles"
import CompanySelector from "../CompanySelector/CompanySelector"

interface IInfoHeaderProps {}

const InfoHeader: React.FC<IInfoHeaderProps> = observer(() => {
    const store = React.useContext(UserDataContext)

    return (
        <div>
            <Box display="flex">
                <H3>{store?.token ? "Token je" : "Ni tokena"}</H3>
                <CompanySelector />
            </Box>
        </div>
    )
})

export default InfoHeader
