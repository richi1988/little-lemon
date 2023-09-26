import React from "react";
import "../../assets/css/ReservationForm.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object({
  name: yup.string().required("El campo nombre es obligatorio."),
  email: yup
    .string()
    .required("El campo email es obligatorio.")
    .email("El email introducido no tiene un formato valido."),

  cellPhone: yup
  .string()
  .required("El campo teléfono movil es obligatorio."),

  guests: yup
    .number()
    .min(1, "Mínimo un comersal.")
    .required("El campo comersales es obligatorio."),
  date: yup.string().required("El campo fecha de la reserva es obligatorio."),

  
});

function ReservationForm() {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const formSubmit = (data) => {
    console.table(data);
  };

  return (
    <form onSubmit={handleSubmit(formSubmit)} className="reservation-form-wrapper">
      <fieldset>
        <div className="field">
          <label htmlFor="name"><span className="icon-obligatorio">*</span> Nombre</label>
          <input
            type="text"
            placeholder="Escribe aquí tu nombre..."
            name="name"
            {...register("name")}
          />
          <span className="error-message">{errors.name?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="email"><span className="icon-obligatorio">*</span> Email</label>
          <input
            type="text"
            placeholder="Escribe aquí tu email..."
            name="email"
            {...register("email")}
          />
          <span className="error-message">{errors.email?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="cellPhone"><span className="icon-obligatorio">*</span> Teléfono movil</label>
          <input
            type="tel"
            placeholder="Escribe aquí tu número de teléfono..."
            name="cellPhone"
            {...register("cellPhone")}
          />
          <span className="error-message">{errors.cellPhone?.message}</span>
        </div>

        <div className="field guest">
          <label htmlFor="comersales"><span className="icon-obligatorio">*</span> Comersales</label>
          <input
            type="number"
            min={1}
            max={20}
            defaultValue={1}
            name="comersales"
            {...register("comersales")}
          />
          <span className="error-message">{errors.comersales?.message}</span>
        </div>

        <div className="field">
          <label htmlFor="date"><span className="icon-obligatorio">*</span> Fecha de la reserva</label>
          <input type="datetime-local" name="date" {...register("date")} />
          <span className="error-message">{errors.date?.message}</span>
        </div>

        <div className="field occasion">
          <label htmlFor="occasion">Ocasión de la reserva</label>
          <div className="options">
            <select name="occasion" {...register("occasion")}>
              <option value="select">Selecciona una ocasión para el evento...</option>
              <option value="aniversario">Aniversario</option>
              <option value="cenaempresa">Cena de empresa</option>
              <option value="cumpleanos">Cumpleaños</option>       
              <option value="otro">Otro</option>
            </select>
          </div>
        </div>

      
        <button className="reservation-form-btn" type="submit">
          RESERVAR MESA
        </button>
      </fieldset>
    </form>
  );
}

export default ReservationForm;
