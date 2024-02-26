import React, { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `App | ${title}`;
  }, []);
};

export default useTitle;
