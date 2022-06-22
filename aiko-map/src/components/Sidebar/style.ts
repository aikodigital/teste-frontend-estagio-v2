import styled from "styled-components";


export const Container = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    height: 100%;
    z-index:10;
    background: var(--blue);
    padding: 6px 14px;

    &.aberto{
        width: 278px;
    }

    &.fechado{
        width: 78px;
    }

    span{
        &.aberto{
            font-size: x-large;
        }
    }
`;


export const Content = styled.div`  
    ul{
        margin-top:20px;

        li{ 
            position: relative;
            height: 50px;
            width: 100%;
            margin-left: 0 5px;
            margin-bottom: 20px;
            list-style: none;
            line-height: 50px;

            span{

                &.tooltip{
                    position: absolute;
                    left: 70px;
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
                        top: 46%;
                        transition: all 0.5s ease;
                        opacity: 1;
                    }
                }  
            }




            a{
                height: 50px;
                color: #fff;
                display: flex;
                align-items: center;
                text-decoration: none;
                transition: all 0.4s ease;
                border-radius: 12px;

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
        }
    }
`;

export const ButaoExpand = styled.div`
    margin-top: 1rem;
    height: 50px;
    width: 100%;
    margin-left: 0 5px;
    margin-bottom: 20px;
    list-style: none;
    line-height: 50px;
  

    button{
        color: #fff;
        height:50px;
        display: flex;
        width:100%;
        align-items: center;
        text-decoration: none;
        transition: all 0.4s ease;
        border-radius: 12px;
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


export const ButaoSair = styled.div`
    position: absolute;
    height: 50px;
    width: 90%;
    margin-left: 0 5px;
    margin-bottom: 80px;
    list-style: none;
    line-height: 50px;
    bottom: 0;
    padding-top: 1rem;

    span{

        &.tooltip{
            position: absolute;
            left: 70px;
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

    button{
        color: #fff;
        height:50px;
        width:75%;
        display: flex;
        align-items: center;
        text-decoration: none;
        transition: all 0.4s ease;
        border-radius: 12px;
        border: none;
        background-color:transparent;


        &:hover{
            color: var(--blue);
            background-color: #fff;

            span{
                &.tooltip{
                    top: 175%;
                    transition: all 0.5s ease;
                    opacity: 1;
                }
            }  
        }

        &.aberto{
            width:100%;
        }
        svg{
            height: 30px;
            min-width: 50px;
            border-radius: 12px;
            line-height: 50px;
        }
    }

    
`;

export const UserInfo = styled.div`
    width: 100%;
    color: white;
    margin-bottom: 20px;
    display: flex;

    svg{
        height: 30px;
        min-width: 50px;
        border-radius: 12px;
        line-height: 50px;
    }

    div{
        margin:0;
        
        p{
            line-height: 20px;
        
            &.nameUser{
                font-size:x-large;
            }

            &.emailUser{
                font-size: smaller;
            }
        }
    }
`;