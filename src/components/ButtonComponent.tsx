import { MouseEvent } from "react";

type Props = {
  buttonName: string;
  
};

function ButtonComponent({ buttonName}: Props) {
  return (
    <button
      type="submit"
      className="mt-5 p-4 bg-sky-800 cursor-pointer rounded-lg w-70"
    >
      {buttonName}
    </button>
  );
}

export default ButtonComponent;
