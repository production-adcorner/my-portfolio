import { Box } from "@mui/material";
import Navbar from "./Components/Navbar";
import Leanding from "./leanding/page";

export default function Home() {
  return (
    <Box sx ={{ backgroundColor: "#000"  ,display: "flex"}}>
      <Navbar />
      <Leanding />


    </Box>
  );
}
