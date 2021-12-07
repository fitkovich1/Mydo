import { InfoMessageContainer } from "./styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsShowMessage } from "../../redux/actions";

const InfoMessage = () => {
    const dispatch = useDispatch();
    const infoMessage = useSelector((state) => state.message);

    useEffect(() => {
        const timeOutId = setTimeout(() => dispatch(setIsShowMessage(false)), 3000);

        return () => clearTimeout(timeOutId);
    }, [dispatch]);

    return (
        <InfoMessageContainer>
            {infoMessage && <p>{infoMessage}</p>}
        </InfoMessageContainer>
    );
};

export default InfoMessage;