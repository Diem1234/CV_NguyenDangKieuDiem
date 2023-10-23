import React from "react";

const PersonalDetails = () => {
  return (
    <>
    <div className="Top">
        <img src="./images/cv.jpg" className="rounded mx-auto d-block mt-3" alt="..." width={"250px"} height={"auto"} />
        <h2 className="jane shadow text-white">Nguyễn Đặng Kiều Diểm</h2>
    </div>
    {/*Enter data*/}
    <div className="partTwo">
        <p>
            <i className="fa"></i>Fontend Reactjs
        </p>
        <p>
            <i className="fa"></i>16/03/2002 
        </p>
        <p>
            <i className="fa"></i>Duy Xuyên, Quảng Nam 
        </p>
        <p>
            <i className="fa"></i>diemnguyen.16032002dmx@gmail.com
        </p>
        <p>
            <i className="fa"> </i>0336041752
        </p>
    </div>
    </>
  );
};

export default PersonalDetails;
