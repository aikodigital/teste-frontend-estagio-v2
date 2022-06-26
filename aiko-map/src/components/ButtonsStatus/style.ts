import styled from "styled-components";


export const Container = styled.li`
    list-style-type: none;
`;

export const ListBtn = styled.ul`
overflow: hidden; 
    
    li{
        
        margin: 0px 11px;
        overflow: hidden;
        background-color: #6a95db;

        button{
            height: 100%;
            padding: 5px 20px;
            background:transparent;
            border: none;
            font-size: medium;
            font-weight: 700;
            width:100%;

            &:hover{
                color: var(--blue);
                background-color: #fff;
            }
            transition: all 0.4 ease;
        }

        transition: all 0.4 ease;
    }

    transition: all 0.4 ease;
`;