import { useStorage } from '../store'
import Tarea from './Tarea'

const Tareas = () => {
    const tareas = useStorage(state => state.tareas)
    console.log(tareas)

    return (
        <>
            <div className='parteAbajo-contenedor'>
                <p className='parteAbajo-titulo negrita'>Tus tareas</p>
            </div>

            <ul className="parteAbajo-contenido">
                {tareas.map(tarea => (
                    <Tarea
                        key={tarea.id}
                        {...tarea}
                    />
                ))}
            </ul>
        </>
    )
}

export default Tareas
