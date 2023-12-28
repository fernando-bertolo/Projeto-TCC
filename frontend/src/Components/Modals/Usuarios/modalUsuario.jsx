import {
    SectionMainContent,
    MainContentbackground
} from "./style-modalUsuario.jsx"

function ModalUser({isOpen}) {

    if(isOpen){
        return(
            <>
                <MainContentbackground>
                    <SectionMainContent isOpen={isOpen}></SectionMainContent>
                </MainContentbackground>
            </>
        )
    }
};

export default ModalUser;