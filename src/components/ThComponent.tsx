type Props = {
    text:string
}
function ThComponent ({text}:Props) {
    return(
        <th className="bg-gray-900 w-52 text-blue-200 text-center p-5 "> 
            {text}
        </th>
    )
}
export default ThComponent