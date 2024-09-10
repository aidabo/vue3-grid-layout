export interface PropsChild {
  isDraggable?: boolean | null
  isResizable?: boolean | null
  isBounded?: boolean | null
  static?: boolean
  minH?: number
  minW?: number
  maxH?: number
  maxW?: number
  x: number
  y: number
  w: number
  h: number
  i: string | number
  dragIgnoreFrom?: string
  dragAllowFrom?: string | null
  resizeIgnoreFrom?: string
  preserveAspectRatio?: boolean
  dragOption?: {[key: string]: any}
  resizeOption?: {[key: string]: any}
}

export interface Pos {
  left?: number
  right?: number
  top: number
  width: number
  height: number
}

export interface WH {
  width: number
  height: number
}
