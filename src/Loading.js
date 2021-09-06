import styled from "styled-components"

export default function Loading() {
    return (
        <LoadingScreen>
            <p>Carregando...</p>
        </LoadingScreen>
    );
}

const LoadingScreen = styled.div`
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    z-index: 2;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    p {
    text-align: center;
    font-size: 25px;
    margin-top: 20px;
    }
    img {
    width: 100px;
    height: 100px;
    margin: 0 auto;
    -webkit-animation:spin 4s linear infinite;
    -moz-animation:spin 4s linear infinite;
    animation:spin 4s linear infinite;
    }
    @-moz-keyframes spin { 100% { -moz-transform: rotate(360deg); } }
    @-webkit-keyframes spin { 100% { -webkit-transform: rotate(360deg); } }
    @keyframes spin { 100% { -webkit-transform: rotate(360deg); transform:rotate(360deg); } 
    }
`;