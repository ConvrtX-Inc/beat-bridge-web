import React, {CSSProperties} from "react";
import ScaleLoader from "react-spinners/ScaleLoader";




  const Customloader = (props:any)=>{
    const override: CSSProperties = {
        display: "block",
        marginTop: "250px"
      };
    return(
        <ScaleLoader
        color={"#0096FF"}
        loading={props.loader}
        cssOverride={override}
        height={50}
        width={9}
        radius={2}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    )
  };

  export default Customloader;