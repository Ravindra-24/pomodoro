import React, { useState, useEffect } from "react";
import withPrivate from "../../hoc/withPrivate";

const PomodoroMain = () => {
    const [time, setTime] = useState(1500);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    useEffect(() => {
        let interval = null;

        if (isActive && time > 0) {
            interval = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            clearInterval(interval);
            if (!isBreak) {
                setTime(300); // 5 minutes break time
                setIsBreak(true);
                setIsActive(true);
            } else {
                setTime(1500); // 25 minutes work time
                setIsBreak(false);
            }
        }

        return () => clearInterval(interval);
    }, [isActive, time, isBreak]);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = time % 60;
        return `${minutes.toString().padStart(2, "0")}:${seconds
            .toString()
            .padStart(2, "0")}`;
    };

    const toggleTimer = () => {
        setIsActive(!isActive);
    };

    const resetTimer = () => {
        setTime(1500);
        setIsActive(false);
        setIsBreak(false);
    };

    const pauseTimer = () => {
        setIsActive(false);
    };

    return (
        <div className={"flex flex-col items-center justify-center h-screen"}>
            <h1 className={"text-4xl text-white font-bold mb-4"}>
                {isBreak ? "Break Time" : "Work Time"}
            </h1>
            <div className={"text-6xl text-white font-bold mb-8"}>
                {formatTime(time)}
            </div>
            <div className={"flex space-x-4"}>
                {!isActive && (
                    <button
                        className={"px-4 py-2 bg-green-500 text-white rounded start-button animate-pulse "}
                        onClick={toggleTimer}
                        disabled={isActive}
                    >
                        Start
                    </button>
                )}

                {isActive && (
                    <button
                        className={"px-4 py-2 bg-yellow-500 text-white rounded pause-button transition duration-300 ease-in-out hover:bg-yellow-600"}
                        onClick={pauseTimer}
                    >
                        Pause
                    </button>
                )}
                <button
                    className={"px-4 py-2 bg-red-500 text-white rounded reset-button transition duration-300 ease-in-out hover:bg-red-600"}
                    onClick={resetTimer}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};

export default withPrivate(PomodoroMain);
