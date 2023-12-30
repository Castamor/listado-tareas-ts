import { useEffect, useRef, useState } from 'react'
import { BiCheckbox, BiCheck, BiTrashAlt, BiPencil } from 'react-icons/bi'
import { type DatosType, type Tarea as TareaType } from '../types'
import { useStorage } from '../store'
import { filtrarTareas } from '../helpers'

interface Props {
    setTareasVisibles: React.Dispatch<React.SetStateAction<TareaType[]>>
    tarea: TareaType
}

const Tarea = ({ tarea, setTareasVisibles }: Props) => {
    const { id, contenido, completado } = tarea

    const [tareaCompletada, setTareaCompletada] = useState(completado)
    const parrafoRef = useRef<HTMLParagraphElement>(null)

    const filtro = useStorage(state => state.filtro)
    const orden = useStorage(state => state.orden)
    const tareas = useStorage(state => state.tareas)
    const completarTarea = useStorage(state => state.completarTarea)
    const eliminarTarea = useStorage(state => state.eliminarTarea)
    const setIdTareaEditar = useStorage(state => state.setIdTareaEditar)
    const setContenidoInput = useStorage(state => state.setContenidoInput)
    const setEditando = useStorage(state => state.setEditando)

    useEffect(() => {
        completarTarea(id, tareaCompletada)

        const datos: DatosType = {
            filtro,
            orden,
            tareas,
            setTareasVisibles
        }

        filtrarTareas(datos)
    }, [tareaCompletada])

    // Formatear texto de las tareas
    useEffect(() => {
        if (parrafoRef.current !== null) {
            parrafoRef.current.innerHTML = contenido.replace(/\n/g, '<br>').trim()
        }
    }, [contenido])

    const handleEditar = () => {
        setEditando(true)
        setIdTareaEditar(id)
        setContenidoInput(contenido.trim())
        document.querySelector('textarea')?.focus()
    }

    return (
        <li className='plantilla'>
            <button
                type='button'
                className='boton check'
                title='Completar Tarea'
                onClick={() => { setTareaCompletada(!tareaCompletada) }}
            > {tareaCompletada ? <BiCheck/> : <BiCheckbox/> } </button>

            <p ref={parrafoRef} className={`tarea titulo ${tareaCompletada ? 'subdrayado' : ''}`}>{contenido}</p>

            <button
                type="button"
                className='boton editar'
                title='Editar tarea'
                onClick={handleEditar}
            > <BiPencil/> </button>

            <button
                type='button'
                className='boton basura hover'
                title='Eliminar Tarea'
                onClick={() => { eliminarTarea(id) }}
            > <BiTrashAlt/> </button>
        </li>
    )
}

export default Tarea
