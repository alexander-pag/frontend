import { useForm, SubmitHandler } from "react-hook-form";
import { BarberShop, addNewBarberShop } from "../api/barberShopService";
import { Input } from "../components/Input";
import { Button } from "../components/Button";

interface BarberShopFormInputs extends BarberShop {}

export function CreateBarberShop() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BarberShopFormInputs>();

  const onSubmit: SubmitHandler<BarberShopFormInputs> = async (data) => {
    try {
      data.city = "Manizales";
      data.state = "Caldas";
      console.log(data);
      await addNewBarberShop(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <p className="title">Crear Barbería </p>
      <p className="message">Bienvenido, para iniciar crea tu barbería. </p>

      <Input
        type="email"
        placeholder="Correo"
        {...register("email", {
          required: "El correo es requerido.",
          minLength: {
            value: 5,
            message: "El correo debe tener al menos 5 caracteres.",
          },
          maxLength: {
            value: 50,
            message: "El correo debe tener máximo 50 caracteres.",
          },
          pattern: {
            value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
            message: "El correo no es válido.",
          },
        })}
      />
      {errors.email && (
        <p className="text-red-600 text-xs">{errors.email.message}</p>
      )}

      <Input
        type="tel"
        placeholder="Celular"
        {...register("phone", {
          required: "El celular es requerido.",
          minLength: {
            value: 10,
            message: "El celular debe tener al menos 10 caracteres.",
          },
          maxLength: {
            value: 10,
            message: "El celular debe tener máximo 10 caracteres.",
          },
          pattern: {
            value: /^[3]{1}[0-9]{9}$/,
            message: "El celular no es válido.",
          },
        })}
      />
      {errors.phone && (
        <p className="text-red-600 text-xs">{errors.phone.message}</p>
      )}

      <Input
        type="text"
        placeholder="Nombre"
        {...register("name", {
          required: "El nombre es requerido.",
          minLength: {
            value: 5,
            message: "El nombre debe tener al menos 5 caracteres.",
          },
          maxLength: {
            value: 50,
            message: "El nombre debe tener máximo 50 caracteres.",
          },
        })}
      />
      {errors.name && (
        <p className="text-red-600 text-xs">{errors.name.message}</p>
      )}

      <Input
        type="text"
        placeholder="Barrio"
        {...register("neighborhood", {
          required: "El barrio es requerido.",
          minLength: {
            value: 5,
            message: "El barrio debe tener al menos 5 caracteres.",
          },
          maxLength: {
            value: 50,
            message: "El barrio debe tener máximo 50 caracteres.",
          },
        })}
      />
      {errors.neighborhood && (
        <p className="text-red-600 text-xs">{errors.neighborhood.message}</p>
      )}

      <Input
        type="text"
        placeholder="Dirección: ej. Calle 10 #10-10"
        {...register("address", {
          required: "La dirección es requerida.",

          pattern: {
            value:
              /^(Calle|Carrera|Transversal|Avenida|calle|carrera|transversal|avenida) [0-9]+ #[0-9]+-[0-9]+$/,
            message: "La dirección no es válida.",
          },
        })}
      />
      {errors.address && (
        <p className="text-red-600 text-xs">{errors.address.message}</p>
      )}

      <Button
        type="submit"
        className="inline-block px-4 py-2 border text-blue-600 duration-150 font-medium bg-blue-100 rounded-lg hover:bg-blue-200 active:bg-blue-100 md:text-sm"
      >
        Empezar
      </Button>
    </form>
  );
}
