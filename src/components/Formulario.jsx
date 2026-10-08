import { useState, useEffect } from "react"
import Alerta from "./Alerta";
import usePacientes from "../hooks/usePacientes";

const Formulario = () => {

    const [nombre, setNombre] = useState('');
    const [propietario, setPropietario] = useState('');
    const [email, setEmail] = useState('');
    const [fecha, setFecha] = useState('');
    const [sintomas, setSintomas] = useState('');
    const [id, setId] = useState(null);

    const [alerta, setAlerta] = useState({});

    const { guardarPaciente, paciente } = usePacientes();

    useEffect(() => {
        if (paciente?.nombre) {
            setNombre(paciente.nombre);
            setPropietario(paciente.propietario);
            setEmail(paciente.email);
            setFecha(paciente.fecha);
            setSintomas(paciente.sintomas);
            setId(paciente._id);
        }
    }, [paciente])

    const handleSubmit = e => {
        e.preventDefault();

        if ([nombre, propietario, email, fecha, sintomas].includes('')) {
            setAlerta({
                msg: 'Todos los campos son obligatorios',
                error: true
            })
            return;
        }

        guardarPaciente({ nombre, propietario, email, fecha, sintomas, id });
        setAlerta({
            msg: 'Guardado Correctamente'
        })
        setNombre('')
        setPropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }


    const { msg } = alerta;
    return (
        <>
            <h2 className="font-black text-3xl text-center capitalize">Administra tus Pacientes</h2>
            <p className="text-xl mt-5 mb-5 text-center capitalize">Agrega tus pacientes y {''}<span className="font-bold text-indigo-600"> Administralos</span>
            </p>


            <form className="bg-white py-10 px-5 mb-10 lg:mb-0 shadow-md rounded-md"
                onSubmit={handleSubmit}
            >
                <div className="mb-5">
                    <label htmlFor="mascota"
                        className="text-gray-700 uppercase font-bold"
                    >Nombre Mascota</label>
                    <input type="text" id="mascota" placeholder="Nombre de la Mascota"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="propietario"
                        className="text-gray-700 uppercase font-bold"
                    >Nombre Propietario</label>
                    <input type="text" id="propietario" placeholder="Nombre del Propietario"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={propietario}
                        onChange={e => setPropietario(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="email"
                        className="text-gray-700 uppercase font-bold"
                    >Email del Propietario</label>
                    <input type="email" id="email" placeholder="Email"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={email}
                        onChange={e => setEmail(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="fecha"
                        className="text-gray-700 uppercase font-bold"
                    >Fecha</label>
                    <input type="date" id="fecha"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        value={fecha}
                        onChange={e => setFecha(e.target.value)} />
                </div>

                <div className="mb-5">
                    <label htmlFor="sintomas"
                        className="text-gray-700 uppercase font-bold"
                    >Sintomas</label>
                    <textarea name="sintomas" id="sintomas"
                        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
                        placeholder="Describe los sintomas"
                        value={sintomas}
                        onChange={e => setSintomas(e.target.value)}
                    ></textarea>
                </div>

                <input type="submit"
                    className="bg-indigo-600 w-full p-3 text-white font-bold uppercase hover:bg-indigo-800 cursor-pointer transition-colors"
                    value={id ? "Guardar Cambios" : "Agregar Paciente"} />

            </form>

            {msg && <Alerta alerta={alerta} />}
        </>
    )
}

export default Formulario