import React from "react";

const PageHeading = ({ t }) => {
  return (
    <div className="md:flex md:items-center md:justify-between">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          {t}
        </h2>
      </div>
    </div>
  );
};

export default PageHeading;
