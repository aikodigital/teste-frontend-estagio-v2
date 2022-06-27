import styled from "styled-components";


export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index:10;
    background: var(--blue);
    padding: 6px 14px;
    //padding-right: 0;


    &.aberto{
        width: 278px;
    }

    &.fechado{
        width: 78px;
    }
    transition: width .2s ease-out;
    span{
        &.aberto{
            font-size: x-large;
        }
    }
`;


export const Content = styled.div`  
    height: 100%;
    
    grid-template-rows: 40%  60%;
    
    ul{
        max-height: 60%;
        overflow: auto;  
        ::-webkit-scrollbar{
            width: 12px;
	        background-color: #bbb5b5;
            border-radius: 10px;
        }
        ::-webkit-scrollbar-thumb{
            border-radius: 10px;
	        -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
	        background-color: #555;
        }  
    }
`;

export const ButaoExpand = styled.div`
    margin-top: 1rem;
    height: 50px;
    width: 100%;
    margin-left: 0 5px;
    margin-bottom: 20px;

    button{
        color: #fff;
        height:50px;
        display: flex;
        width:100%;
        align-items: center;
        text-decoration: none;
        transition: all 0.4s ease;
        border-radius: 4px;
        border: none;
        background-color:transparent;

        &:hover{
            color: var(--blue);
            background-color: #fff;
        }

        svg{
            height: 30px;
            min-width: 50px;
            border-radius: 12px;
            line-height: 50px;
        }
    }

    span{

        &.tooltip{
            position: absolute;
            left: 85px;
            top: 0;
            transform: translateY(-50%);
            border-radius: 6px;
            height: 6px;
            height: 35px;
            width: 122px;
            background: #fff;
            color: var(--blue);
            line-height: 35px;
            text-align: center;
            box-shadow: 0 5px 10px rgb(0,0,0,0.2);
            transition: 0s;
            pointer-events: none;
            opacity: 0;
        }
    }

    &:hover{
        span{
            &.tooltip{
                top: 2.8rem;
                transition: all 0.5s ease;
                opacity: 1;
            }
        }  
    }

`;

export const Titulo = styled.p`
    color: #fff;
    height:20px;
    display: flex;
    width:100%;
    padding: 20px 10px;
    font-size: x-large;
    align-items: center;
    font-weight: 500;
`;