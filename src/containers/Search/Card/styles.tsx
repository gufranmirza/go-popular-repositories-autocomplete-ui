import styled from 'styled-components';

export const Root = styled.div`
  padding: 20px;
  width: 768px;

  background: #fff;
  box-shadow: 0 2px 5px 0 rgba(32, 33, 36, 0.05),
    0 19px 38px 0 rgba(32, 33, 36, 0.04);
  position: relative;
  transition: background 0.4s, box-shadow 0.4s;

  &:hover {
    background: #f8f9fa;
    box-shadow: 0 2px 16px 0 rgba(32, 33, 36, 0.07),
      0 26px 38px 0 rgba(32, 33, 36, 0.09);
    position: relative;
  }
`;

export const Header = styled.div``;

export const Icons = styled.div`
  svg {
    font-size: 22px;
    display: inline-block;
    font-size: 18px;
    color: rgba(0, 0, 0, 0.75);
  }

  span {
    display: inline-block;
    vertical-align: super;
    font-size: 18px;
    padding-left: 5px;
    color: rgba(0, 0, 0, 0.75);
    margin-right: 20px;
  }
`;
