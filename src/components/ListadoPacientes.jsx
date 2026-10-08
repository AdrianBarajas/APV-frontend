import usePacientes from "../hooks/usePacientes"
import Pacientes from "./Pacientes";

const ListadoPacientes = () => {

    const { pacientes } = usePacientes();
    return (
        <>
            {pacientes.length ? (
                <>
                    <h2 className="font-black text-3xl text-center capitalize">Listado de Pacientes</h2>
                    <p className="text-xl mt-5 mb-5 text-center capitalize">
                        Administra tus
                        <span className="font-bold text-indigo-600"> pacientes y citas</span>
                    </p>
                    {pacientes.map( paciente => (
                        <Pacientes
                            key={paciente._id}
                            paciente={paciente}
                        />
                    ))}
                </>
            ) : (
                <>
                    <h2 className="font-black text-3xl text-center capitalize">No hay pacientes</h2>
                    <p className="text-xl mt-5 mb-5 text-center capitalize">
                        Comienza agregando pacientes y apareceran
                        <span className="font-bold text-indigo-600"> aqui</span>
                    </p>
                </>
            )}
        </>
    )
}

export default ListadoPacientes