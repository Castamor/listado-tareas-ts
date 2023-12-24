import React, { type FormEvent, useState } from 'react'
import { BiPlus } from 'react-icons/bi'
import { useStorage } from '../store'
import { type Tarea } from '../types'
import { generarId } from '../helpers'
import { VACIO } from '../constants'

const Formulario = () => {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)

    const agregarTarea = useStorage(state => state.agregarTarea)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (input === VACIO) {
            setError(true)
            setTimeout(() => { setError(false) }, 2500)
            return
        }

        const nuevaTarea: Tarea = {
            id: generarId(),
            contenido: input,
            completado: false,
            creado: Date.now()
        }

        agregarTarea(nuevaTarea)

        // Ajustar alto del text-area y borrar su contenido
        const textarea = document.querySelector('textarea')
        if (textarea !== null) {
            textarea.style.height = 'auto'
            textarea.value = VACIO
            setInput(VACIO)
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        e.preventDefault()

        const input = e.target
        setInput(input.value.trim())

        // Ajustar alto del text-area automaticamente
        input.style.height = 'auto'
        input.style.height = input.scrollHeight + 'px'
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="titulo" className='label-input negrita'>¿Qué tareas tienes hoy?</label>
            <div className="plantilla input">
                <textarea
                    id="titulo"
                    className="fondo-tarea noSeleccionar bordeOverflow inputFormulario"
                    placeholder="Titulo de la tarea"
                    onChange={handleChange}
                    rows={1}
                />
                <button type="submit" title={'Agregar Tarea'} className="boton plus hover apuntar"><BiPlus/></button>
            </div>
            {error && <span className="error">(Campo Obligatorio)</span>}
        </form>
    )
}

export default Formulario
