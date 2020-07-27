import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
        text-decoration: none;
        display: flex;
        flex-direction: row;
        color: #A8A8B3;
        transition: color 0.3s;

        &:hover {
            color: #666;
        }

        svg {
            margin-right: 4px;
        }
    }
`;

export const AuthorDetails = styled.div`
    max-width: 500px;
    margin-top: 80px;
    display: flex;
    align-items: center;

    img {
        width: 128px;
        height: 128px;
        border-radius: 50%;
    }

    div {
        flex: 1;
        margin-left: 24px;
        strong {
            font-size: 36px;
            color: #3D3D4D;
        }
        p {
            font-size: 18px;
            color: #A8A8B3;
            margin-top: 4px;
        }
    }
`;

export const Statistics = styled.div`
    max-width: 500px;
    margin-top: 40px;
    display: flex;
    flex-direction: row;

    div {
        flex-direction: column;
        & + div {
            margin-left: 80px;
        }
        strong {
            font-size: 36px;
            font-weight: bold;
            color: #3D3D4D;
        }
        p {
            font-size: 20px;
            color: #A8A8B3; 
        }
    }
`;

export const Issues = styled.div`
    margin-top: 80px;

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
