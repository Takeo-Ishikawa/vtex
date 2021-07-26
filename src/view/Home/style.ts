import styled from 'styled-components';

export const Container = styled.div`
    width: 80%;
    margin: auto;

    section {
        height: 100vh;
        width: 100%;
        background: orange;
        display: flex;
        justify-content: space-around;

        .product-content {
            display: grid;
            text-align: center;
            height: 300px;
            background: #fff;
            border-radius: 12px;
            padding: 12px;
        }
    }
`