import axios from "axios";

export interface BarberShop {
  name: string;
  phone: string;
  email: string;
  address: string;
  neighborhood: string;
  subscriptionStatus: boolean;
  city: string;
  state: string;
}

export const addNewBarberShop = async (barberShop: BarberShop) => {
  try {
    const { data } = await axios.post(
      "http://localhost:3000/barber-shop",
      barberShop
    );
    console.log(data);
    return data;
  } catch (error) {}
};

export const getAllBarberShops = async () => {
  try {
    const { data } = await axios.get("http://localhost:3000/barber-shop");
    return data;
  } catch (error) {
    console.log(error);
  }
};
