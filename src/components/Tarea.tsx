import { useEffect, useState } from 'react'
import { BiCheckbox, BiCheck, BiTrashAlt, BiPencil } from 'react-icons/bi'
import { type Tarea as TareaType } from '../types'
import { useStorage } from '../store'

type Props = TareaType

const Tarea = ({ id, contenido, completado, creado }: Props) => {
    const [tareaCompletada, setTareaCompletada] = useState(completado)

    const completarTarea = useStorage(state => state.completarTarea)
    const eliminarTarea = useStorage(state => state.eliminarTarea)

    useEffect(() => {
        completarTarea(id, tareaCompletada)
    }, [tareaCompletada])

    // Formatear texto de las tareas
    const parrafo = document.querySelector(`#${id}`)
    if (parrafo !== null) {
        parrafo.innerHTML = contenido.replace(/\n/g, '<br>')
    }

    return (
        <li className='plantilla'>
            <button
                type='button'
                className='boton check apuntar'
                title='Completar Tarea'
                onClick={() => { setTareaCompletada(!tareaCompletada) }}
            > {tareaCompletada ? <BiCheck/> : <BiCheckbox/> } </button>

            <p id={id} className={`fondo-tarea titulo ${tareaCompletada ? 'subdrayado' : ''}`}></p>

            <button
                type='button'
                className='boton basura apuntar hover'
                title='Eliminar Tarea'
                onClick={() => { eliminarTarea(id) }}
            > <BiTrashAlt/> </button>
        </li>
    )
}

export default Tarea
