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
