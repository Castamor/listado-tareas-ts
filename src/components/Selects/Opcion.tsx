import { useEffect } from 'react'
import { METODOS } from '../../data'
import { removerClaseActive } from '../../helpers'
import { useStorage } from '../../store'
import { type Opcion as OpcionType } from '../../types'

interface Props {
    metodo: string
    opcionType: OpcionType
}

const Opcion = ({ metodo, opcionType }: Props) => {
    const { titulo, Icono } = opcionType

    const filtro = useStorage(state => state.filtro)
    const setFiltro = useStorage(state => state.setFiltro)
    const orden = useStorage(state => state.orden)
    const setOrden = useStorage(state => state.setOrden)

    useEffect(() => {
        const opciones = document.querySelectorAll('.select-opciones li')

        opciones.forEach(opcion => {
            opcion.classList.contains(filtro) && opcion.classList.add('active')
            opcion.classList.contains(orden) && opcion.classList.add('active')
        })
    }, [])

    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const opciones = document.querySelectorAll(`.${metodo} .flex`)
        removerClaseActive(e, opciones)
        e.currentTarget.classList.toggle('active')

        if (metodo === METODOS.filtrar.string) {
            setFiltro(titulo)
        } else {
            setOrden(titulo)
        }
    }

    return (
        <li className={`${metodo} ${titulo} flex`} onClick={handleClick}> <span><Icono/></span>{titulo}</li>
    )
}

export default Opcion
