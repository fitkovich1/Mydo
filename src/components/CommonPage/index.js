import { CommonPageContainer } from "./styles";

const CommonPage = (props) => {
    const { contentText } = props;

    return (
        <CommonPageContainer>
            <p>{contentText.replace(/[^a-z]/gi, " ")} page</p>
        </CommonPageContainer>
    );
};

export default CommonPage;
