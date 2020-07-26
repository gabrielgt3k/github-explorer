import styled from 'styled-components';
import { shade } from 'polished';

export const Title = styled.h1`
    font-size: 48px;
    color: #3A3A3A;
    max-width: 450px;
    line-height: 56px;

    margin-top: 80px;
`;

export const Form = styled.form`
    display: flex;
    margin-top: 40px;
    max-width: 700px;

    input {
        flex: 1;
        height: 72px;
        border: 0;
        border-radius: 5px 0 0 5px;
        padding: 0 24px;
        color: #3A3A3A;

        &::placeholder {
            color: #a8a8b3;
        }
    }

    button {
        color: #FFF;
        font-weight: bold;
        width: 200px;
        height: 72px;
        border: 0;
        background: #04D361;
        border-radius: 0px 5px 5px 0px;
        transition: background-color 0.2s;

        &:hover {
            background: ${shade(0.2, '#04D361')}
        }
    }
`;

export const Repositories = styled.div`
    margin-top: 80px;
    max-width: 700px;

    a {
        text-decoration: none;
        width: 100%;
        padding: 24px;
        background: #FFF;
        display: block;
        border-radius: 5px;

        display: flex;
        align-items: center;
        transition: transform 0.2s;

        &:hover {
            transform: translateX(10px)
        }

        img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
        }

        & + a {
            margin-top: 18px;
        }

        div {
            flex: 1;
            margin: 8px 16px;
            strong {
                font-size: 24px;
                color: #3D3D4D;
            }

            p {
                font-size: 18px;
                color: #A8A8B3;
                margin-top: 4px;
            }
        }

        svg {
            margin-left: auto;
            color: #CBCBD6;
        }


    }
    

`;
