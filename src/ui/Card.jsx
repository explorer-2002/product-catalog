import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  max-width: 300px;
  margin: 20px;
  overflow: hidden;
  transition: transform 0.2s;

  display:flex;
  flex-direction:column;
  justify-content: space-between;
  
  &:hover {
    transform: scale(1.05);
  }
`;
