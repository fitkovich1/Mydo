import styled from "styled-components";


const ScanQRCodePageContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1 1 auto;
`;


const ScanQRCodePage = () => {
    return (
        <ScanQRCodePageContainer>
            <p>ScanQRCodePage</p>
        </ScanQRCodePageContainer>
    );
};

export default ScanQRCodePage;