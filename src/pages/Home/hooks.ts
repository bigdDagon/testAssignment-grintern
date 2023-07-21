import { useQuery } from "@tanstack/react-query";

import { fetchBookLists, searchBook } from "./services";
import { Book } from "../../types/types";

export const useFetchBookLists = () => {
  return useQuery(
    ["bookLists"],
    async () => {
      const {
        data: { results },
      } = await fetchBookLists();
      return results;
    },
    { refetchOnWindowFocus: false, staleTime: Infinity }
  );
};

export const useSearchBook = (searchTerm: string) => {
  const encoded = encodeURIComponent(searchTerm);
  return useQuery(
    [searchTerm],
    async () => {
      const { data } = await searchBook(encoded);
      return data;
    },
    {
      enabled: !!searchTerm,
      select: (data) => {
        const results = data.results.map((book: Book) => ({
          value: book.id,
          option: book.title,
        }));
        return { results, count: data.count };
      },
    }
  );
};
