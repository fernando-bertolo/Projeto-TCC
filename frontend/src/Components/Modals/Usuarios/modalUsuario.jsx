import {
    SectionMainContent
} from "./style-modalUsuario.jsx"

function ModalUser({isOpen}) {

    if(isOpen){
        return(
            <SectionMainContent></SectionMainContent>
        )
    }
};

export default ModalUser;