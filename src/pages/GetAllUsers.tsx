import { useEffect, useState } from "react";
import { getAllUsers, User } from "../api/userService";

export const GetAllUsers = () => {
  const [users, setUsers] = useState<User[]>([]);

  const fetchUsers = async () => {
    const response = await getAllUsers();
    setUsers(response.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="max-w-screen-md mx-auto px-4 md:px-8">
      <div className="items-start justify-between md:flex">
        <div className="max-w-lg">
          <h3 className="text-gray-800 text-xl font-bold sm:text-2xl">
            Listado de usuarios
          </h3>
        </div>
        <div className="mt-3 md:mt-0">
          <button
            onClick={fetchUsers}
            className="inline-block px-4 py-2 border text-green-600 duration-150 font-medium bg-green-100 rounded-lg hover:bg-green-200 active:bg-green-100 md:text-sm"
          >
            Añadir usuario
          </button>
        </div>
      </div>
      <div className="mt-12 relative h-max overflow-auto">
        <table className="w-full table-auto text-sm text-left">
          <thead className="text-gray-600 font-medium border-b">
            <tr>
              <th className="py-3 pr-6">nombre</th>
              <th className="py-3 pr-6">correo</th>
              <th className="py-3 pr-6">rol</th>
              <th className="py-3 pr-6">celular</th>
              <th className="py-3 pr-6">rol</th>
              <th className="py-3 pr-6"></th>
            </tr>
          </thead>
          <tbody className="text-gray-600 divide-y">
            {users.map((item, idx) => (
              <tr key={idx}>
                <td className="pr-6 py-4 whitespace-nowrap">{item.name}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.email}</td>
                <td className="pr-6 py-4 whitespace-nowrap">
                  <span
                    className={`px-3 py-2 rounded-full font-semibold text-xs ${
                      item.role == "barbero"
                        ? "text-green-600 bg-green-50"
                        : "text-blue-600 bg-blue-50"
                    }`}
                  >
                    {item.role}
                  </span>
                </td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.phone}</td>
                <td className="pr-6 py-4 whitespace-nowrap">{item.role}</td>
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
