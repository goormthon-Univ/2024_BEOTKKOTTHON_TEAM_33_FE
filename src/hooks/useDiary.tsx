import { useSuspenseQuery } from "@tanstack/react-query";
import getDiary from "@apis/getDiary";

const useDiary = (filterIndex: number) => {
  return useSuspenseQuery({
    queryKey: ["diary"],
    queryFn: () => getDiary(filterIndex)
  });
};

export default useDiary;
