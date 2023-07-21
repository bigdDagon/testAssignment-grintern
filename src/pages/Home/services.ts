import axiosInstance from "../../axios";

export const fetchBookLists = async () => {
  const response = await axiosInstance.get("/books");
  return response;
};

export const searchBook = async (searchTerm: string) => {
  const response = await axiosInstance.get(`/books?search=${searchTerm}`);
  return response;
};
