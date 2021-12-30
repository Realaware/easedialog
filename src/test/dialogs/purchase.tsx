import React from 'react';
import styled from 'styled-components';
import { RGB } from '../..';

const GridView = styled.div`
  width: 500px;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1px;
`;

const ProductItemContainer = styled.div`
  padding: 15px;
  background-color: rgb(15, 15, 17);
  display: flex;
  border-radius: 5px;
`;

const Right = styled.div`
  display: flex;
  flex: 1 0;
  justify-content: flex-end;
`;

const ProductCardContainer = styled.div`
  padding: 20px;
  background-color: rgba(15, 15, 15, 0.5);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 150px;
  transition: all 0.1s;
  min-height: 150px;

  &:hover {
    background-color: rgba(25, 25, 25, 0.5);
  }
`;

function ProductItem({ name, price }: { name: string; price: number }) {
  return (
    <ProductItemContainer>
      <h4 style={{ margin: 0, fontSize: '13px' }}>{name}</h4>
      <Right>
        <h4 style={{ fontWeight: 600, margin: 0, fontSize: '13px' }}>
          Price: {price}
        </h4>
      </Right>
    </ProductItemContainer>
  );
}

function ProductCard({ desc, title }: { desc: string; title: string }) {
  return (
    <ProductCardContainer>
      <h3
        style={{
          fontSize: '15px',
          color: new RGB(170, 170, 170).getRgbString(),
          fontWeight: 600,
          margin: 0,
        }}
      >
        {title}
      </h3>
      <span>{desc}</span>
    </ProductCardContainer>
  );
}

function Purchase() {
  return (
    <div>
      <h1>Welcome, Guest !</h1>
      <GridView>
        <ProductCard title="Pineapple" desc="sweet and delicious fruit." />
        <ProductCard title="Watermelon" desc="yeah !" />
      </GridView>

      <h1>Best Products</h1>
      <Column>
        <ProductItem name="Television" price={1000} />
        <ProductItem name="Keyboard" price={100} />
      </Column>
    </div>
  );
}

export default Purchase;
