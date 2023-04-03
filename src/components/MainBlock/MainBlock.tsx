import React, { useState } from "react";
import "./MainBlock.style.css"
//Types
import { IPoint } from "../../types";
//Components
import Point from "../Point/Point";


interface IMainBlockProps {
    changeTheme: () => void,
    theme: string
}

const MainBlock = ({ changeTheme, theme }: IMainBlockProps) => {

    const [points, setPoints] = useState<IPoint[]>([]) //setting the array of points

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        if ((e.target as Element).classList.contains("main-container")) {
            const randomSize = Math.floor(Math.random() * (200 - 50 + 1) + 50);
            const newPoint = {  //creating the Point object
                posX: e.clientX,
                posY: e.clientY,
                isActive: true,
                heightPx: randomSize,
                widthPx: randomSize
            };

            let restOfThePoints = points.map((point: IPoint) => {
                return { ...point, isActive: false }
            })

            setPoints([...restOfThePoints, newPoint]);
        } else {
            let allPoints = points.map((point) => {
                return points.indexOf(point) === parseInt((e.target as Element).id) ? { ...point, isActive: true } : { ...point, isActive: false } //select the clicked circle
            })
            setPoints(allPoints)
        }
    }

    const detectKey = (e: React.KeyboardEvent) => {
        let activePoint: IPoint[] = points.filter((point: IPoint) => {
            return point.isActive === true
        })
        let indexActive = points.indexOf(activePoint[0]) //index of the active point
        let allPoints = points; //copy of all the points

        if (e.key === "ArrowUp" && activePoint[0]?.heightPx < 600) {
            allPoints[indexActive] = { ...activePoint[0], heightPx: activePoint[0]?.heightPx + 5, widthPx: activePoint[0]?.widthPx + 5 }
            setPoints([...allPoints])
        }
        if (e.key === "ArrowDown" && activePoint[0]?.heightPx > 10) {
            allPoints[indexActive] = { ...activePoint[0], heightPx: activePoint[0]?.heightPx - 5, widthPx: activePoint[0]?.widthPx - 5 }
            setPoints([...allPoints])
        }
    }

    return (
        <>
            <div
                className="main-container"
                style={{ backgroundColor: theme === "light" ? "#FFFFFF" : "#000000" }}
                onClick={handleClick}
                onKeyDown={(e) => detectKey(e)}
                tabIndex={-1}
            >
                {
                    points.map((point: IPoint, idx: number) => {
                        return (
                            <Point
                                key={idx}
                                pointData={point}
                                id={`${idx}`}
                                theme={theme}
                            />
                        )
                    })
                }
            </div>
            <button
                onClick={changeTheme}
                className="btn-theme"
            >
                Switch Theme
            </button>
        </>
    )
}

export default MainBlock;