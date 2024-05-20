import '../styles.css'
import { useState } from "react";

export const ShowHideAdd = () => {
    const [mostrarComponente, setMostrarComponente] = useState(false);
    
    return {
        mostrarComponente,
        setMostrarComponente
    }
}
