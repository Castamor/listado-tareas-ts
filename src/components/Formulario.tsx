import React, { type FormEvent, useState, type KeyboardEvent } from 'react'
import { BiPlus, BiCheck, BiInfoCircle } from 'react-icons/bi'
import { useStorage } from '../store'
import { type Tarea } from '../types'
import { generarId } from '../helpers'
import { VACIO } from '../data'

const Formulario = () => {
    const [error, setError] = useState(false)

    const agregarTarea = useStorage(state => state.agregarTarea)
    const editarTarea = useStorage(state => state.editarTarea)

    const idTareaEditar = useStorage(state => state.idTareaEditar)
    const setIdTareaEditar = useStorage(state => state.setIdTareaEditar)
    const contenidoInput = useStorage(state => state.contenidoInput)
    const setContenidoInput = useStorage(state => state.setContenidoInput)
    const editando = useStorage(state => state.editando)
    const setEditando = useStorage(state => state.setEditando)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (contenidoInput.trim() === VACIO) {
            setError(true)
            setTimeout(() => { setError(false) }, 2500)
            return
        }

        if (editando) {
            editarTarea(idTareaEditar, contenidoInput.trim())
            setIdTareaEditar('')
            setEditando(false)
            setContenidoInput(VACIO)
            return
        }

        const nuevaTarea: Tarea = {
            id: generarId(),
            contenido: contenidoInput.trim(),
            completado: false,
            creado: Date.now()
        }

        agregarTarea(nuevaTarea)
        setContenidoInput(VACIO)
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()

        const txtInput = e.target.value

        setContenidoInput(txtInput)
    }

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.ctrlKey && e.key === 'Enter') { // Verificar que las teclas clickeadas son Ctrl + Enter
            const formulario = document.querySelector('form')
            if (formulario !== null) {
                formulario.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <label htmlFor="titulo" className='subtitulo'>
                {editando ? 'Cambiar contenido de la tarea...' : '¿Qué tareas tienes hoy?'}
            </label>
            <div className="plantilla input">
                <textarea
                    id="titulo"
                    className="tarea"
                    placeholder="Titulo de la tarea"
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                    value={contenidoInput}
                    rows={1}
                />
                <button
                    type="submit"
                    title={editando ? 'Actualizar Tarea' : 'Agregar Tarea'}
                    className="boton plus hover apuntar"
                >
                    {editando ? <BiCheck /> : <BiPlus/>}
                </button>
            </div>
            {error && <span className="error">(Campo Obligatorio)</span>}
        </form>
    )
}

export default Formulario
