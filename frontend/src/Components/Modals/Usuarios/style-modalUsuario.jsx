import {styled, css} from "styled-components";

export const SectionMainContent = styled.section`
    width: 30%;
    height: 80%;
    position: fixed;
    background-color: #2F2841;
    border-radius: 30px;

    ${({isOpen}) => isOpen === true && css`
        animation AnimationOpen 0.4s

        @keyframes AnimationOpen {
            from {
                top: 0;
            }
            to {
                top: 50%;
            }
        }
    `}


`;

export const MainContentbackground = styled.div`
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgb(255,255,255, 0.4);
`;