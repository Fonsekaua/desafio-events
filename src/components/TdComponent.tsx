type Props = {
    text:string | number
}
function TdComponent ({text}:Props) {
    return(
        <td className="bg-gray-800 mb-1 w-52 text-blue-200 text-center p-5">
            {text}
        </td>
    )
}
export default TdComponent