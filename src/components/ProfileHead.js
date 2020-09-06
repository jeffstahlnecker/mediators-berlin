import React from "react";

export const PureProfileHead = () => {
  // to include:
  // Profile Picture
  // Contact Information
  // Background Image??
  // Schwerpunkte

  return <div>ProfileHead</div>;
};

export const ProfileHead = ({ ...props }) => {
  return <PureProfileHead {...props} />;
};

export default ProfileHead;
