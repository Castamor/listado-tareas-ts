import { BiFilterAlt, BiSort, BiCheck, BiCheckbox, BiCheckSquare, BiSortDown, BiSortUp } from 'react-icons/bi'
import { type Vacio as VacioType } from '../types'

export const VACIO: VacioType = ''

export const METODOS = {
    filtrar: {
        string: 'Filtrar',
        verTodos: 'Todos',
        completados: 'Completadas',
        pendientes: 'Pendientes'
    },
    ordenar: {
        string: 'Ordenar',
        recientes: 'Recientes',
        antiguos: 'Antiguos'
    }
}

export const SELECTS = [
    {
        titulo: METODOS.filtrar.string,
        Icono: BiFilterAlt,
        opciones: [
            {
                titulo: METODOS.filtrar.verTodos,
                Icono: BiCheckSquare
            },
            {
                titulo: METODOS.filtrar.completados,
                Icono: BiCheck
            },
            {
                titulo: METODOS.filtrar.pendientes,
                Icono: BiCheckbox
            }
        ]
    },
    {
        titulo: METODOS.ordenar.string,
        Icono: BiSort,
        opciones: [
            {
                titulo: METODOS.ordenar.recientes,
                Icono: BiSortDown
            },
            {
                titulo: METODOS.ordenar.antiguos,
                Icono: BiSortUp
            }
        ]
    }
]
