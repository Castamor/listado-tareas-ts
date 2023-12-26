import { removerClaseActive } from '../../helpers'
import { type Opcion } from '../../types'

const Boton = ({ titulo, Icono }: Opcion) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const selects = document.querySelectorAll('.select')

        removerClaseActive(e, selects)

        const handleClickDocument = (e: MouseEvent) => {
            selects.forEach(select => {
                if (select.classList.contains('active') && !select.contains(e.target as Node)) {
                    select.classList.remove('active')
                    document.removeEventListener('click', handleClickDocument)
                }
            })
        }

        document.addEventListener('click', handleClickDocument)
    }

    return (
        <button type='button' className='select-btn flex' title={titulo} onClick={handleClick}>
            <span><Icono/></span>
            <p>{titulo}</p>
        </button>
    )
}

export default Boton
