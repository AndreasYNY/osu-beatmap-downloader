import { useEffect, useState } from "react";

export const useConvertInput = (inputValue) => {
  const [beatmapSetId, setBeatmapSetId] = useState("");
  useEffect(() => {
    if (inputValue.length > 8) {
      const data = inputValue;
      const pattern = /\/(\d+)/;
      const matches = data.match(pattern);
      const sliceData = matches ? matches[1] : null;
      setBeatmapSetId(sliceData);
    } else {
      const data = inputValue;
      setBeatmapSetId(data);
    }
  }, [inputValue]);
  return beatmapSetId;
};
