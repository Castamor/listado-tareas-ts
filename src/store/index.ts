import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { type TareaContenido, type Tarea, type TareaId } from '../types'

interface StorageTipos {
    esTemaOscuro: boolean
    setTema: () => void
    contenidoInput: string
    setContenidoInput: (nuevoContenido: string) => void
    editando: boolean
    setEditando: (valor: boolean) => void
    idTareaEditar: TareaId
    setIdTareaEditar: (nuevoId: TareaId) => void

    tareas: Tarea[]
    borrarTareas: () => void
    agregarTarea: (tarea: Tarea) => void
    eliminarTarea: (id: TareaId) => void
    completarTarea: (id: TareaId, completado: boolean) => void
    editarTarea: (id: TareaId, contenido: TareaContenido) => void
}

export const useStorage = create<StorageTipos>()(persist(
    (set, get) => ({
        esTemaOscuro: true,
        setTema: () => {
            set((state) => ({ esTemaOscuro: !state.esTemaOscuro }))
        },
        contenidoInput: '',
        setContenidoInput: (nuevoContenido) => {
            const textarea = document.querySelector('textarea')
            if (textarea !== null) {
                textarea.value = nuevoContenido
                textarea.textContent = nuevoContenido
                textarea.style.height = 'auto'
                textarea.style.height = textarea.scrollHeight + 'px'
            }

            set({ contenidoInput: nuevoContenido })
        },
        editando: false,
        setEditando: (valor) => { set({ editando: valor }) },
        idTareaEditar: '',
        setIdTareaEditar: (nuevoId) => { set({ idTareaEditar: nuevoId }) },

        tareas: [],
        borrarTareas: () => { set({ tareas: [] }) },
        agregarTarea: (tarea) => {
            set({ tareas: [tarea, ...get().tareas] })
        },
        eliminarTarea: (id) => {
            set(state => ({ tareas: state.tareas.filter(tarea => tarea.id !== id) }))
        },
        completarTarea: (id, completado) => {
            set(state => ({
                tareas: state.tareas.map(tarea => {
                    return tarea.id === id ? { ...tarea, completado } : tarea
                })
            }))
        },
        editarTarea: (id, contenido) => {
            set(state => ({
                tareas: state.tareas.map(tarea => {
                    return tarea.id === id ? { ...tarea, contenido } : tarea
                })
            }))
        }
    }),

    {
        name: 'todoapp',
        partialize: state => Object.fromEntries(
            Object.entries(state).filter(([key]) => !['input', 'editando', 'idTareaEditar', 'contenidoInput'].includes(key))
        )
    }
))
