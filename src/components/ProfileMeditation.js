import React from "react";

export const PureProfileMeditation = () => {
  //  // Was bedeutet Mediation für mich
  //   // Was mich antreibt
  return <div>My thoughts on Meditation</div>;
};

export const ProfileMeditation = ({ ...props }) => {
  return <PureProfileMeditation {...props} />;
};

export default ProfileMeditation;
