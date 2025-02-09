import axios from "axios";

export interface User {
  id: string;
  email: string;
  role: string;
  name: string;
  phone: string;
  barberShopId: string;
}

const barberShopId = "29e2cf6c-168d-459b-9443-fccf5bc0ecf0";

export const getAllUsers = async () => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/user/barber-shop/${barberShopId}`
    );
    return data;
  } catch (error) {
    console.error(error);
  }
};
