import usePacientes from "../hooks/usePacientes"

const Pacientes = ({paciente}) => {
    const {email, fecha, nombre,propietario, sintomas, _id} = paciente

    const { setEdicion, eliminarPaciente} = usePacientes();
  return (
        <div className="mx-5 my-10 bg-white shadow-md px-5 py-10 rounded-xl">
            <p className="font-bold uppercase">Nombre:
                <span className="font-normal normal-case"> {nombre}</span>
            </p>
            <p className="font-bold uppercase">Propietario:
                <span className="font-normal normal-case"> {propietario}</span>
            </p>
            <p className="font-bold uppercase">Propietario Email:
                <span className="font-normal normal-case"> {email}</span>
            </p>
            <p className="font-bold uppercase">Fecha:
                <span className="font-normal normal-case"> {fecha}</span>
            </p>
            <p className="font-bold uppercase">Sintomas:
                <span className="font-normal normal-case"> {sintomas}</span>
            </p>

            <div className="flex gap-3 my-5">
                <button 
                    type="button"
                    className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white uppercase font-bold rounded-lg cursor-pointer"
                    onClick={() => setEdicion(paciente)}
                >
                    Editar
                </button>

                <button 
                    type="button"
                    className="py-2 px-10 bg-red-400 hover:bg-red-800 text-white uppercase font-bold rounded-lg cursor-pointer"
                    onClick={() => eliminarPaciente(paciente._id)}
                >
                    Eliminar
                </button>

            </div>
        </div>
  )
}

export default Pacientes