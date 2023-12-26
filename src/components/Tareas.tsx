import { useStorage } from '../store'
import Tarea from './Tarea'
import { BiFilterAlt, BiSort } from 'react-icons/bi'

const Tareas = () => {
    const tareas = useStorage(state => state.tareas)

    return (
        <section className='contenido'>
            <header>
                <p className='subtitulo'>Tus tareas</p>

                <div className='botones'>
                    <button className='btn'>
                        <span><BiFilterAlt/></span>
                        Filtrar
                    </button>
                    <button className='btn'>
                        <span><BiSort/></span>
                        Ordenar
                    </button>
                </div>
            </header>

            <ul>
                {tareas.map(tarea => (
                    <Tarea
                        key={tarea.id}
                        {...tarea}
                    />
                ))}
            </ul>
        </section>
    )
}

export default Tareas
