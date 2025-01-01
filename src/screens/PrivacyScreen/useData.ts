import { useState } from "react";

export const useData = () => {
  const [visiblePrivacy, setVisiblePrivacy] = useState<boolean>(false);

  return { visiblePrivacy, setVisiblePrivacy };
};
