import { BiSolidSun, BiSolidMoon } from 'react-icons/bi'
import { useStorage } from '../store'

const Titulo = () => {
    const esTemaOscuro = useStorage(state => state.esTemaOscuro)
    const setTema = useStorage(state => state.setTema)

    return (
        <header className="header">
            <h1><span>TODO</span> APP</h1>
            <h2>Crea y edita tus tareas</h2>

            <button type='button' title='Cambiar Tema' className='tema' onClick={() => { setTema() }}>
                {esTemaOscuro ? <BiSolidMoon className='luna'/> : <BiSolidSun className='sol'/>}
            </button>
        </header>
    )
}

export default Titulo
