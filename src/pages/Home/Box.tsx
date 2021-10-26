import styled from "styled-components"

const BoxContainer = styled.div`
    margin: 20px;
    width: 330px;
    height: 240px;
    background-repeat:no-repeat;
    background-position: center center;
    background-size: cover;
    background-color: lime;
    box-shadow: 0 20px 30px rgba(0,0,0,0.2);
    border-radius: 7px;
`
const Overlay = styled.div`
    border-radius: 7px;
    width: 330px;
    height: 240px;
    position: relative;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    background-color: rgba(0,0,0,0.5);
    transition: 300ms ease;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
`


interface IProps {
    title?: string
    link?: string
    backgroundImage?: string

}

export default function Box({ title, link, backgroundImage }: IProps) {
    const redirect = () => { 
        if (link) {
            window.location.href = link
        }   
    };
    return (
        <BoxContainer style={{ backgroundImage: `url(${backgroundImage})`}}>
            <Overlay onClick={redirect}>
                <h5 className="text-white">{ title }</h5>
            </Overlay>
        </BoxContainer>
    )
}