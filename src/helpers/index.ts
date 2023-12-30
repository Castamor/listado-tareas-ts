import { METODOS } from '../data'
import { type Tarea, type DatosType } from '../types'

export const generarId = () => Math.random().toString(36).substring(2) + Date.now().toString(36)

export const removerClaseActive = (e: React.MouseEvent<EventTarget>, elementos: NodeListOf<Element>) => {
    const currentTarget = e.currentTarget as Element

    elementos.forEach(elemento => {
        if (elemento.classList.contains('active') && elemento !== currentTarget.parentElement) {
            elemento.classList.remove('active')
        }
    })

    currentTarget.parentElement?.classList.toggle('active')
}

export const filtrarTareas = ({ filtro, orden, tareas, setTareasVisibles }: DatosType) => {
    let tareasFiltradas = tareas

    if (filtro === METODOS.filtrar.completados) {
        tareasFiltradas = tareas.filter(tarea => tarea.completado)
    } else if (filtro === METODOS.filtrar.pendientes) {
        tareasFiltradas = tareas.filter(tarea => !tarea.completado)
    }

    let tareasOrdenadas = [...tareasFiltradas]

    if (orden === 'Recientes') {
        tareasOrdenadas = tareasOrdenadas.sort((a, b) => b.creado - a.creado)
    } else if (orden === 'Antiguos') {
        tareasOrdenadas = tareasOrdenadas.sort((a, b) => a.creado - b.creado)
    }

    setTareasVisibles(tareasOrdenadas)
}
