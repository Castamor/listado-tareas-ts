import { BiFilterAlt, BiSort, BiCheck, BiCheckbox, BiCheckSquare, BiSortDown, BiSortUp } from 'react-icons/bi'

export const SELECTS = [
    {
        titulo: 'Filtrar',
        Icono: BiFilterAlt,
        opciones: [
            {
                titulo: 'Todos',
                Icono: BiCheckSquare
            },
            {
                titulo: 'Completados',
                Icono: BiCheck
            },
            {
                titulo: 'Pendientes',
                Icono: BiCheckbox
            }
        ]
    },
    {
        titulo: 'Ordenar',
        Icono: BiSort,
        opciones: [
            {
                titulo: 'Recientes',
                Icono: BiSortDown
            },
            {
                titulo: 'Antiguos',
                Icono: BiSortUp
            }
        ]
    }
]
