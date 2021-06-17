import styled from "styled-components";


export const CommonDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    background-color: white;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    font-size: 10px;
    box-shadow: 0 20px 30px #1d1c1c;
`;

export const CardProductos = styled.div`
    text-align: center;
    width: 110px;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    cursor: pointer;

    &:hover {
        border: 1px solid green;
        background-color: #b4cab4;
    }
`;

export const CardCarrito = styled.div`
    text-align: center;
    width: 110px;
    border: 1px solid gray;
    border-radius: 5px;
    padding: 10px;
    margin: 5px;
    cursor: pointer;

    &:hover {
        border: 1px solid red;
        background-color: #cfa6a6;
    }
`;

export const CarritoDivVacio = styled.div`
    text-align: center;
    background-color: white;
    border: 1px solid gray;
    margin: 5px;
    border-radius: 5px;
    height: 100px;
    font-weight: bold;
    box-shadow: 0 20px 30px #1d1c1c;
`;

export const TotalPrice = styled.div`
    width: 100%;
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
    color: white;
    background-color: #2F4F4F;
    border-radius: 5px;
`;

export const Select = styled.div`
    width: 100%;
    margin: 10px;
    font-size: 20px;
    font-weight: bold;
    color: black;
    border-radius: 5px;
`;

export const CommonDiv2 = styled.div`
    display: flex;
    flex-wrap: wrap;
    text-align: center;
    justify-content: center;
    padding: 10px;
    margin: 5px;
    font-size: 10px;
`;

export const TitlePrice = styled.p`
    margin-top: 30px;
    font-size: 20px;
`;

export const PPrice = styled.p`
    font-size: 12px;
    color: green;
`;

export const Img = styled.img`
    width: 60px;
`;

export const Icon = styled.i`
    font-size: 32px;
    color: white;
    align-items: flex-end;

    &:hover {
        color: rgb(163, 159, 159);
    }
`;