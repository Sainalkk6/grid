import { useState } from "react";
import Modal from "./components/Modal";
import Version3 from "./components/Version3";

const App = () => {
  const [proceed,setProceed] = useState(false)
  const [rows,setRows] = useState(1)
return(
  <>
  {proceed ? <Version3 rows={rows} setRows={setRows} setProceed={setProceed}/> : <Modal rows={rows} setRows={setRows} setProceed={setProceed}/>}
  </>
)
};

export default App;
