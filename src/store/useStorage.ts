import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type Tarea, type TareaId } from '../types'

interface StorageTipos {
    esTemaOscuro: boolean
    cambiarTema: () => void

    tareas: Tarea[]
    agregarTarea: (tarea: Tarea) => void
    eliminarTarea: (id: TareaId) => void
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
        }
    }),

    { name: 'todoapp' }
))
