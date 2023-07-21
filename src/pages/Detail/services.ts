import axiosInstance from "../../axios";

export const fetchBook = async (id: string | undefined) => {
  const data = await axiosInstance.get(`/books?ids=${id}`);
  return data;
};
