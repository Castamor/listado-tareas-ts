import React, { type FormEvent, useState } from 'react'
import { BiPlus } from 'react-icons/bi'

const Formulario = () => {
    const [input, setInput] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (input === '') {
            setError(true)
            setTimeout(() => { setError(false) }, 2500)
            return
        }

        document.querySelector('form')?.reset()
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
