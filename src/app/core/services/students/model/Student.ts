export interface Student {
  id: number | string;
  nombre: string;
  apellido: string;
  direccion: string;
  telefono: string;
  email: string;
  status: StudentStatus;
}

export enum StudentStatus {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}

export const studentColumns: string[] = [
    'id',
    'nombre',
    'apellido',
    'direccion',
    'telefono',
    'email',
    'status',
    'actions',
];