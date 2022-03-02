import React from "react";
import LinearProgress from '@mui/material/LinearProgress';
// reactstrap components
// import { Spinner } from "reactstrap";

// core components

export default function PageChange(props) {


  const divStyle = {
    paddingTop: '50%'
  }
  return (
      <div className="32 mx-auto  text-center absolute  top-0" style={{ zIndex: '3000', width: '100%', position: 'fixed' }}>
        <div className=" block mb-4">
          <LinearProgress />
        </div>
      </div>
  );
}


