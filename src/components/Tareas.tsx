import { useEffect, useState } from 'react'
import { SELECTS } from '../data'
import { useStorage } from '../store'
import Boton from './Selects/Boton'
import Opcion from './Selects/Opcion'
import Tarea from './Tarea'
import { filtrarTareas } from '../helpers'
import { type DatosType } from '../types'

const Tareas = () => {
    const tareas = useStorage(state => state.tareas)
    const filtro = useStorage(state => state.filtro)
    const orden = useStorage(state => state.orden)

    const [tareasVisibles, setTareasVisibles] = useState(tareas)

    useEffect(() => {
        const datos: DatosType = {
            filtro,
            orden,
            tareas,
            setTareasVisibles
        }

        filtrarTareas(datos)
    }, [tareas, filtro, orden])

    return (
        <section className='contenido'>
            <header>
                <p className='subtitulo'>Tus tareas</p>

                <div className='selects'>
                    {SELECTS.map(select => (
                        <div key={select.titulo} className='select'>
                            <Boton titulo={select.titulo} Icono={select.Icono}/>
                            <ul className={`select-opciones ${select.titulo}`}>
                                {select.opciones.map(opcion => (
                                    <Opcion
                                        key={opcion.titulo}
                                        metodo={select.titulo}
                                        opcionType={{ ...opcion }}
                                    />
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </header>

            {tareasVisibles.length === 0
                ? (<p className='info'>( No hay ninguna tarea <span>{filtro.slice(0, -1).toLowerCase()}</span> )</p>)
                : (<ul className='tareas'>
                    {tareasVisibles.map(tarea => (
                        <Tarea
                            key={tarea.id}
                            setTareasVisibles={setTareasVisibles}
                            tarea={tarea}
                        />
                    ))}
                </ul>)}
        </section>
    )
}

export default Tareas
