export const generarId = () => Math.random().toString(36).substring(2) + Date.now().toString(36)

export const ajustarTextArea = (contenido: string) => {
    const textarea = document.querySelector('textarea')
    if (textarea !== null) {
        textarea.value = contenido
        textarea.textContent = contenido
        textarea.style.height = 'auto'
        textarea.style.height = textarea.scrollHeight + 'px'
    }
}
