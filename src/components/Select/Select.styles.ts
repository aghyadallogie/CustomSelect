import styled, { css } from "styled-components";

export const Container = styled.div`
    width: 160px;
    margin: 5rem auto;
`

export const List = styled.ul<{ visible: boolean }>(
    ({ visible }) => css`
    visibility: ${visible ? 'visible' : 'hidden'};
    display: flex;
    flex-direction: column;
    list-style: none;
    border: 1px solid tomato;
    border-top: none;
    border-bottom-right-radius: 7px;
    border-bottom-left-radius: 7px;
    justify-content: center;
    align-items: center;
    align-content: center;
    padding: .5rem 0;
    margin: 0;
`)

export const Option = styled.li`
    width: 100%;
    padding: .5rem 0;
    cursor: pointer;
    font-size: .8rem;

    &:hover {
    color: #956541;
    background: whitesmoke ;
}
`

export const Button = styled.button`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 160px;
    border: 1px solid tomato;
    padding: .5rem 1rem;
    cursor: pointer;

    &:hover {
     background: whitesmoke ;
    }
`