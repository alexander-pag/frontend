import { useEffect, useState } from "react";
import { BarberShop, getAllBarberShops } from "../api/barberShopService";

export const ListBarberShop = () => {
  const [barberShops, setBarberShops] = useState<BarberShop[]>([]);

  const fetchBarberShops = async () => {
    const response = await getAllBarberShops();
    setBarberShops(response.data);
  };

  useEffect(() => {
    fetchBarberShops();
  }, []);

  return (
    <div className="max-w-screen-lg mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Barberías
          </h3>
        </div>
        <div className="mt-3 md:mt-0">
          <button
            onClick={fetchBarberShops}
            className="flex items-center px-4 border text-green-600 duration-150 font-medium bg-green-100 rounded-lg hover:bg-green-200 active:bg-green-100 md:text-sm"
          >
            <span className="text-3xl mr-2">+</span>
            <p className="text-center">Añadir barbería</p>
          </button>
        </div>
      </div>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6">nombre</th>
              <th className="py-3 pr-6">correo</th>
              <th className="py-3 pr-6">estado</th>
              <th className="py-3 pr-6">celular</th>
              <th className="py-3 pr-6">departamento</th>
              <th className="py-3 pr-6">ciudad</th>
              <th className="py-3 pr-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {barberShops.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-2.5 py-0.5 rounded-full font-medium text-xs me-2 ${
                      item.subscriptionStatus
                        ? "bg-green-100 text-green-800"
                        : "bg-red-100 text-red-800"
                    }`}
                  >
                    {item.subscriptionStatus ? "Activo" : "Inactivo"}
                  </span>
                </td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.phone}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.state}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.city}</td>
                <td className="text-right whitespace-nowrap">
                  <button className="py-1.5 px-3 text-gray-600 hover:text-gray-500 duration-150 hover:bg-gray-50 border rounded-lg">
                    Manage
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
