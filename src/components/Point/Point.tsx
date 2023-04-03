import React from "react";
import { IPoint } from "../../types";



interface IPointProps {
    pointData: IPoint,
    id: string,
    theme: string
}

const Point = ({ pointData, id, theme }: IPointProps) => {
    const {
        widthPx,
        heightPx,
        posX,
        posY,
        isActive
    } = pointData

    return (
        <div
            id={id}
            style={{
                width: `${widthPx}px`,
                height: `${heightPx}px`,
                position: "absolute",
                left: `${posX - heightPx / 2}px`,
                top: `${posY - widthPx / 2}px`,
                backgroundColor: isActive ? "#FF0000" : theme === "light" ? "#000000" : "#FFFFFF",
                borderRadius: "50%",
                border: "1px solid #000000"
            }}
        >
        </div>
    )
}

export default Point;