import { useState } from 'react';
import { CButton, CCollapse, CCard, CCardBody } from '@coreui/react'; 
import './App.css';

function App() {
  const [visible, setVisible] = useState(false); 

  return (
    <>
  {/*    buttonla collapseni acib baqlamaq  */}
      <CButton   
        color="primary"
        href="#"
        onClick={(event) => {
          event.preventDefault();
          setVisible(!visible); 
        }}
      >
        Link
      </CButton>
      
      <CButton color="primary" onClick={() => setVisible(!visible)}>
        Kliklə
      </CButton>

      
      <CCollapse visible={visible}>
        <CCard className="mt-3">
          <CCardBody>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, numquam. Sed, veniam quam similique iusto inventore praesentium soluta perferendis possimus ratione? Soluta aliquam dolorum ex consequuntur fugit necessitatibus aut tenetur!
          </CCardBody>
        </CCard>
      </CCollapse>
    </>
  );
}

export default App;
