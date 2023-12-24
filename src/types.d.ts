export interface Tarea {
    id: TareaId
    contenido: TareaContenido
    completado: TareaCompletado
    creado: TareaCreado
}

export type TareaId = string
export type TareaContenido = string
export type TareaCompletado = boolean
export type TareaCreado = number

export type VACIO = ''
