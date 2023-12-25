import { useEffect, useState } from 'react'
import { BiCheckbox, BiCheck, BiTrashAlt, BiPencil } from 'react-icons/bi'
import { type Tarea as TareaType } from '../types'
import { useStorage } from '../store'
import { ajustarTextArea } from '../helpers'

type Props = TareaType

const Tarea = ({ id, contenido, completado }: Props) => {
    const [tareaCompletada, setTareaCompletada] = useState(completado)

    const completarTarea = useStorage(state => state.completarTarea)
    const eliminarTarea = useStorage(state => state.eliminarTarea)
    const setIdTareaEditar = useStorage(state => state.setIdTareaEditar)
    const setContenidoInput = useStorage(state => state.setContenidoInput)
    const setEditando = useStorage(state => state.setEditando)

    useEffect(() => {
        completarTarea(id, tareaCompletada)
    }, [tareaCompletada])

    // Formatear texto de las tareas
    const parrafo = document.querySelector(`#${id}`)
    if (parrafo !== null) { parrafo.innerHTML = contenido.replace(/\n/g, '<br>') }

    const handleEditar = () => {
        setEditando(true)
        setIdTareaEditar(id)
        setContenidoInput(contenido)
        ajustarTextArea(contenido)
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
                type="button"
                className='boton editar apuntar'
                title='Editar tarea'
                onClick={handleEditar}
            > <BiPencil/> </button>

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
