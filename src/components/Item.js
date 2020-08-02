import React from "react";
import styled from "styled-components";

const ItemSection = styled.button`
  width: 500px;
  height: 100px;
  border: none;
  color: white;
  text-align: left;
  background-color: transparent;
  cursor: pointer;
  margin: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 20px;
  border-bottom: 1px solid white;
`;

const ItemInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const Info = styled.p`
  font-size: 20px;
`;

const Name = styled.h1`
  color: white;
`;

const PurchasedItem = styled.h1``;

const NumOwned = styled.h1`
  text-align: center;
  margin-left: 20px;
`;

function Item({ name, cost, value, numOwned, handleClick, firstItem }) {
  const itemRef = React.useRef(null);

  React.useEffect(() => {
    if (firstItem) {
      itemRef.current.focus();
    }
  }, []);

  return (
    <ItemSection ref={itemRef} onClick={handleClick} value={name}>
      <ItemInfo>
        <Name>{name}</Name>
        <Info>
          {value > 1
            ? `Cost: ${cost} cookies. Produces ${value} cookies/second.`
            : `Cost: ${cost} cookies. Produces ${value} cookie/second.`}
        </Info>
      </ItemInfo>
      <NumOwned>{numOwned}</NumOwned>
    </ItemSection>
  );
}

export default Item;
