import styled from "styled-components";


export const Container = styled.li`
    //list-style-type: inside;
`;

export const ListBtn = styled.ul`
    overflow: hidden; 
    
    li{
        list-style: inside;
        margin: 0px 11px;
        overflow: hidden;
        background-color: #6a95db;
        display: flex;
        align-items: center;
        padding-left: 5px ;
        
        button{
            height: 100%;
            padding: 5px 20px;
            background:transparent;
            border: none;
            font-size: medium;
            font-weight: 700;
            width:100%;

            &:hover{
                color: var(--blue) !important;
                background-color: #fff;
            }
            transition: all 0.4 ease;
        }

        
        transition: all 0.4 ease;
    }

    transition: all 0.4 ease;
`;