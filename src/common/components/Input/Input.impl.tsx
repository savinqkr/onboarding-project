import VInput from "./Input.view";
import { IInput } from "./Input.interface";

const Input: React.FC<IInput.IProps> = props => {
    return <VInput {...props} />;
};

export default Input;
