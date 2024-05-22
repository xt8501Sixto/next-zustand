import { StateStorage, createJSONStorage } from "zustand/middleware";

const firebaseUrl = "https://zustand-next-default-rtdb.firebaseio.com/app"

const firebaseApi: StateStorage = {
    getItem: async function (name: string): Promise<string | null> {
      try {
        const data = await fetch(`${firebaseUrl}/${name}.json`).then((res) => res.json());
  
        return JSON.stringify(data);
      } catch (error) {
          throw error
      }
    },
    setItem: async function (name: string, value: string): Promise<void> {
      const data = await fetch(`${firebaseUrl}/${name}.json`, {
        method: 'PUT',
        body: value
      }).then((res) => res.json());
      return data
      
    },
    removeItem: function (name: string): void | Promise<void> {
      console.log('removeItem', name)
      return
    }
  }

  export const firebaseStorage = createJSONStorage( () => firebaseApi)