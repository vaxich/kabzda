import { useState } from "react";
import Rating from "./Raiting";
import { RaitingValueType } from "../../App";


export default {
    title: "Rating stiries",
    component: Rating
}

export const EmptyStars = () => <Rating value={0} onClick={x=>x}/>
export const Rating1 = () => <Rating value={1} onClick={x=>x}/>
export const Rating2 = () => <Rating value={2} onClick={x=>x}/>
export const Rating3 = () => <Rating value={3} onClick={x=>x}/>
export const Rating4 = () => <Rating value={4} onClick={x=>x}/>
export const Rating5 = () => <Rating value={5} onClick={x=>x}/>
export const RatingChanging = () => {
    const [raiting, setRaiting] = useState<RaitingValueType>(0)
    return <Rating value={raiting} onClick={setRaiting}/>
}