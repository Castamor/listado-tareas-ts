import { SELECTS } from '../data'
import { useStorage } from '../store'
import Boton from './Selects/Boton'
import Opcion from './Selects/Opcion'
import Tarea from './Tarea'

const Tareas = () => {
    const tareas = useStorage(state => state.tareas)

    return (
        <section className='contenido'>
            <header>
                <p className='subtitulo'>Tus tareas</p>

                <div className='selects'>
                    {
                        SELECTS.map(select => (
                            <div key={select.titulo} className='select'>
                                <Boton titulo={select.titulo} Icono={select.Icono}/>
                                <ul className={`select-opciones ${select.titulo}`}>
                                    {
                                        select.opciones.map(opcion => (
                                            <Opcion
                                                key={opcion.titulo}
                                                metodo={select.titulo}
                                                opcionType={{ titulo: opcion.titulo, Icono: opcion.Icono }}
                                            />
                                        ))
                                    }
                                </ul>
                            </div>
                        ))
                    }
                </div>
            </header>

            <ul className='tareas'>
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
