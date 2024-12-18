import react from "react";
import { useDrag } from "react-dnd";
const [drag,setDrag] = useDrag("")
const drag = () =>{
    const dragview(){
        useDrag("")
    }
    return(
        <button onChange={dragview}>Drag<button/>
    )
}
export default drag;