import React from "react";

const PersonalDetails = () => {
  return (
    <>
    <div className="Top">
        <img src="https://www.w3schools.com/w3images/avatar_hat.jpg" />
        <h2 className="jane">Jane Doe</h2>
    </div>
    {/*Enter data*/}
    <div className="partTwo">
        <p>
            <i className="fa"></i>Designer
        </p>
        <p>
            <i className="fa"></i>London, UK
        </p>
        <p>
            <i className="fa"></i>ex@mail.com
        </p>
        <p>
            <i className="fa"> </i>1224435534
        </p>
    </div>
    </>
  );
};

export default PersonalDetails;
