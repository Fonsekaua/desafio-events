type props = {
    buttonName:string
    onclick: () => void;
}
function ButtonComponent ({buttonName, onclick}:props) {
    return (
        <button onClick={onclick} className="mt-5 p-4 bg-sky-800 cursor-pointer rounded-lg w-70">
            {buttonName}
        </button>
    )
}

export default ButtonComponent