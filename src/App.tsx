import Formulario from './components/Formulario'
import Tareas from './components/Tareas'
import Titulo from './components/Titulo'
import './index.css'
import { useStorage } from './store'

function App () {
    const borrarTareas = useStorage(state => state.borrarTareas)
    const tareas = useStorage(state => state.tareas)

    const hayTareas = tareas.length > 0

    return (
        <>
            <div className='carta'>
                <Titulo />
                <Formulario />
                {hayTareas && <Tareas />}
            </div>

            <button className='' type='button' onClick={borrarTareas}>Borrar todas las tareas</button>
        </>
    )
}

export default App
