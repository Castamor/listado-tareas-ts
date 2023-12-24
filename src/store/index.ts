import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Tarea, type TareaId } from '../types'

interface StorageTipos {
    esTemaOscuro: boolean
    cambiarTema: () => void

    tareas: Tarea[]
    borrarTareas: () => void
    agregarTarea: (tarea: Tarea) => void
    eliminarTarea: (id: TareaId) => void
    completarTarea: (id: TareaId, completado: boolean) => void
    // actualizarTarea: () => void
}

export const useStorage = create<StorageTipos>()(persist(
    (set, get) => ({
        esTemaOscuro: true,
        cambiarTema: () => {
            set((state) => ({ esTemaOscuro: !state.esTemaOscuro }))
        },

        tareas: [],
        agregarTarea: (tarea) => {
            set({ tareas: [tarea, ...get().tareas] })
        },
        eliminarTarea: (id) => {
            set(state => ({ tareas: state.tareas.filter(tarea => tarea.id !== id) }))
        },
        borrarTareas: () => { set({ tareas: [] }) },
        completarTarea: (id, completado) => {
            set(state => ({
                tareas: state.tareas.map(tarea => {
                    return tarea.id === id ? { ...tarea, completado } : tarea
                })
            }))
        }
    }),

    { name: 'todoapp' }
))
