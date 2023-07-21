import { useQuery } from "@tanstack/react-query";

import { fetchBook } from "./services";

export const useFetchBook = (id: string | undefined) => {
  return useQuery(
    [`book-${id}`],
    async () => {
      const { data } = await fetchBook(id);
      return data.results;
    },
    { staleTime: 60000, refetchOnWindowFocus: false }
  );
};
