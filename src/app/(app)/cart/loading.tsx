import {LineItem as LineItemType} from "@/modules/types";
import LineItem from "@/components/sckeleton/LineItem";
import React from "react";

const skeletonArray=  [1,2,3,4]
export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (

        <div>

            <h2>Your Cart</h2>
            {skeletonArray.map((lineItem, index) =>  <LineItem key={index}/>)}

        </div>

    )
}