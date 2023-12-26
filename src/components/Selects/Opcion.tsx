import { removerClaseActive } from '../../helpers'
import { type Opcion as OpcionType } from '../../types'

interface Props {
    metodo: string
    opcionType: OpcionType
}

const Opcion = ({ metodo, opcionType }: Props) => {
    const { titulo, Icono } = opcionType

    const handleClick = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        const opciones = document.querySelectorAll(`.${metodo} .flex`)
        removerClaseActive(e, opciones)
        e.currentTarget.classList.toggle('active')
    }

    return (
        <li className={`${metodo} flex`} onClick={handleClick}> <span><Icono/></span>{titulo}</li>
    )
}

export default Opcion
