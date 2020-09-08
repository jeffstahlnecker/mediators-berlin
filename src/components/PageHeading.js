import React from "react";

const PageHeading = ({ t }) => {
  return (
    <div className="flex items-center justify-center center pt-32 justify-items-center">
      <div className="flex-1 min-w-0 prose prose-lg">
        <h1 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:leading-9 sm:truncate">
          {t}
        </h1>
      </div>
    </div>
  );
};

export default PageHeading;
