import React from "react";

const PureProfileBackground = () => {
  return <div>Mein Hintergrund (privat/beruflich</div>;
};

export const ProfileBackground = ({ ...props }) => {
  return <PureProfileBackground {...props} />;
};

export default ProfileBackground;
