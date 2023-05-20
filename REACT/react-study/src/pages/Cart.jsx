import React from 'react';
import styled from 'styled-components';

export default function Cart() {
    return (
        <>
            <Heading>장바구니</Heading>

            <ItemWrapper></ItemWrapper>

            <TotalPriceWrapper>
                <ColumnWrapper>
                    <span>총 갯수</span>
                    <Heading></Heading>
                </ColumnWrapper>
                <ColumnWrapper>
                    <span>총 가격</span>
                    <Heading></Heading>
                </ColumnWrapper>
            </TotalPriceWrapper>
        </>
    );
}

const ColumnWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
`;

const Heading = styled.span`
    font-size: 20px;
    font-weight: var(--bold);
`;
const ItemWrapper = styled.ul`
    display: flex;
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 300px);
    gap: 8px;
    flex-direction: column;
`;
const TotalPriceWrapper = styled.div`
    padding: 16px;
    height: 150px;
    width: 100%;
    max-width: 1024px;
    border: 1px solid var(--line-gray);
    & span {
        text-align: right;
    }
`;
const NoItems = styled.div`
    padding: 8px;
    width: fit-content;
    margin: 0 auto;
    border-radius: 4px;
    text-align: center;
    border: 1px solid var(--line-gray);
`;
