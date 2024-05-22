import { FormValues } from "@/app/dashboard/interfaces/formValue.interface";
import { StateCreator, create } from "zustand";
import { devtools, persist } from "zustand/middleware";


interface TreeNode {
  id: string;
  name: string;
  children?: TreeNode[];
}

interface TreeState {
  treeData: TreeNode[];
  expandedNodes: { [key: number]: boolean };
  toggleNode: (id: number) => void;
}

interface PermisoState {
  permisos: FormValues[];
  addPermiso: (permiso: FormValues) => void;
  editPermiso: (id: number, updatedPermiso: FormValues) => void;
  deletePermiso: (id: number) => void;
}


const generateUniqueId = (): string => `${Date.now()}-${Math.random()}`;

const storeTree: StateCreator<TreeState> = (set) => ({
  treeData: [
    {
      id: generateUniqueId(),
      name: 'Portal Corredores',
      children: [
        {
          id: generateUniqueId(),
          name: 'Ventas',
          children: [
            { id: generateUniqueId(), name: 'Riesgos generales' },
            { id: generateUniqueId(), name: 'Salud colectiva' },
            { id: generateUniqueId(), name: 'Salud individual' },
            { id: generateUniqueId(), name: 'Vehicular' },
            { id: generateUniqueId(), name: 'Soat' },
            { id: generateUniqueId(), name: 'Vida' }
            
          ]
        },
        {
          id: generateUniqueId(),
          name: 'Operaciones',
          children: [
            { id: generateUniqueId(), name: 'Item' }
          ]
        },
        {
          id: generateUniqueId(),
          name: 'Consultas',
          children: [
            { id: generateUniqueId(), name: 'Polizas' },
            { id: generateUniqueId(), name: 'Clientes' }
          ]
        },
        {
          id: generateUniqueId(),
          name: 'Cobranzas',
          children: [
            { id: generateUniqueId(), name: 'Item' }
          ]
        }
      ]
    },
    {
      id: generateUniqueId(),
      name: 'Portal 2',
      children: [
        {
          id: generateUniqueId(),
          name: 'Subcategory 2',
          children: [
            { id: generateUniqueId(), name: 'Item 2.1' },
            { id: generateUniqueId(), name: 'Item 2.2' }
          ]
        }
      ]
    }
  ],
  expandedNodes: {},
  toggleNode: (id) => set((state) => ({
    expandedNodes: {
      ...state.expandedNodes,
      [id]: !state.expandedNodes[id]
    }
  }))
});

const storePermiso: StateCreator<PermisoState> = (set) => ({
  permisos: [],
  addPermiso: (permiso) => set((state) => ({ permisos: [...state.permisos, permiso] })),

  editPermiso: (id, updatedPermiso) => set((state) => ({
    permisos: state.permisos.map(permiso => 
      permiso.id === id ? { ...permiso, ...updatedPermiso } : permiso
    )
  })),
  
  deletePermiso: (id) => set((state) => ({
    permisos: state.permisos.filter(permiso => permiso.id !== id)
  }))
});

export const usePermisoStore = create<TreeState & PermisoState>()(
  devtools(
    persist((...a) => ({
      ...storeTree(...a),
      ...storePermiso(...a)
    }), { name: "permiso-storage" })
  )
);