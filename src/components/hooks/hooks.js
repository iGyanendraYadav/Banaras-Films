import { useEffect } from "react";
import { useLocation } from 'react-router-dom';



export const useDocumentTitle = (title) => {


    const location = useLocation();

    useEffect(() => {
        
        document.title = (location.pathname === '/') ? "Banaras Films" : `${title} | Banaras Films`;

    }, [title, location.pathname]);

    return null;
}
