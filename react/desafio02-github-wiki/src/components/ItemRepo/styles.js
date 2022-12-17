import styled from "styled-components";

export const ItemContainer = styled.div`

    width: 80%;
    margin-top: 15px;
    
    h3 {
        font-size: 32px;
        color: #FAFAFA;
    }

    p {
        font-size: 16px;
        color: #FAFAFA60;
        margin-bottom: 20px;
    }

    a {
        text-decoration: none;
        color: #FFFFFF;
    }

    a.verRepo {
        background-color: #238636;
        padding: 7px;
        border-radius: 10px;

        &:hover {
            background-color: #23863690;
        }
    }

    a.remover {
        background-color: #da3634;
        padding: 5px;
        border-radius: 10px;
        margin-top: 20px;

        &:hover {
            background-color: #da363490;
        }
    }

    hr {
        color: #FAFAFA60;
        margin: 20px 0;
    }

`