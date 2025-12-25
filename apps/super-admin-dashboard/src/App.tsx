import { Box } from "@mui/material"
import Dashboard from "./pages/dashboardPage/Dashboard"

const App = () => {
  return (
    <Box sx={{
      width:'100%',
      height:'100vh',
      bgcolor:'lightsalmon'
    }}>
        <Dashboard/>
    </Box>
  )
}

export default App
