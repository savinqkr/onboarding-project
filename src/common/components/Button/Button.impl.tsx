import VButton from "./Button.view";
import { IButton } from "./Button.interface";

const Button: React.FC<IButton.IProps> = props => {
    return (
        <VButton
            {...props}
            //  onClick={() => alert("버튼 클릭!!")}
        />
    );
};
export default Button;
