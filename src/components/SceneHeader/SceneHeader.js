import React from 'react';
import styled from 'styled-components';

export default function SceneHeader({ title }) {
  return (
    <Header>
      <h3>{title}</h3>
    </Header>
  );
}

const Header = styled.header`
  padding: 20px 0;
  margin-bottom: 30px;
  background-color: #fff;
  box-shadow: 0 0 5px rgba(0, 0, 0, .1);

  & > h3 {
    width: 960px;
    margin:0 auto;
    font-size: 30px;
    line-height: 1;
  }
`;
