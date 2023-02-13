import React from "react";

const Form = () => {
  return (
    <div className="w-1/2">
      <h2 className="text-center font-black text-3xl">Seguimiento </h2>
      <p className="mt-3 text-center">
        {" "}
        añade tus pacientes y {""}
        <span className="text-indigo-600">Administralos</span>
      </p>
      <form className="bg-white shadow-md rounded-lg py-10 px-5 mt-5">
        <div className="mb-5">
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="name-pet"
          >
            Nombre Mascota
          </label>
          <input
            type="text"
            placeholder="Nombre de la mascota"
            className="border-2 mt-1 p-2 w-full rounded-lg placeholder-gray-400"
            id="name-pet"
          />
        </div>
        <div className="mb-5">
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="name-owner"
          >
            Propietario
          </label>
          <input
            type="text"
            placeholder="Nombre del propietario"
            className="border-2 mt-1 p-2 w-full rounded-lg placeholder-gray-400"
            id="name-owner"
          />
        </div>
        <div className="mb-5">
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="email"
          >
            Correo electronico
          </label>
          <input
            type="email"
            placeholder="E-mail"
            className="border-2 mt-1 p-2 w-full rounded-lg placeholder-gray-400"
            id="email"
          />
        </div>
        <div className="mb-5">
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="date"
          >
            Fecha de alta
          </label>
          <input
            type="date"
            className="border-2 mt-1 p-2 w-full rounded-lg placeholder-gray-400"
            id="date"
          />
        </div>
        <div>
          <label
            className="block font-bold text-gray-700 uppercase"
            htmlFor="symptoms"
          >
            Sintomas
          </label>
          <textarea
            className="border-2 mt-4 p-2 w-full rounded-lg placeholder-gray-400"
            placeholder="Ingresa los sintomas "
            id="symptoms"
          />
        </div>
        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 mt-5 text-white font-bold uppercase rounded-md cursor-pointer hover:bg-indigo-800 transition-all"
          value="agregar paciente"
        />
      </form>
    </div>
  );
};

export default Form;
