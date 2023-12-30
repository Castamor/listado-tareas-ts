import { useEffect } from 'react'
import Formulario from './components/Formulario'
import Tareas from './components/Tareas'
import Titulo from './components/Titulo'
import './index.css'
import { useStorage } from './store'

function App () {
    const tareas = useStorage(state => state.tareas)
    const esTemaOscuro = useStorage(state => state.esTemaOscuro)

    const hayTareas = tareas.length > 0

    useEffect(() => {
        const body = document.body
        !esTemaOscuro ? body.classList.toggle('light') : body.classList.remove('light')
    }, [esTemaOscuro])

    return (
        <>
            <div className='carta'>
                <Titulo />
                <Formulario />
                {hayTareas && <Tareas />}
            </div>
        </>
    )
}

export default App
