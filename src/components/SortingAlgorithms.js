import React from 'react';
import { useState, useReducer, useEffect, useRef, useCallback } from 'react';

import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider'
import useWindowDimensions from './useWindowDimensions.js';
import { mergeSortAnimations } from './algorithms/mergeSort.js';
import { quickSort } from './algorithms/quickSort.js';
import { useSortingVisualizer } from './sortingVisualizer.js';
import './animation.css';

const SortingAlgorithms = () => {

    const [array, setArray] = useState([]);
    const [speed, setSpeed] = useState(50);
    const { height, width } = useWindowDimensions();
    //  const { refresh, setRefresh } = useState(false)
    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const genArray = () => {
        reset();
        const array = [];
        let arraySize = width <= 500 ? 25 : (width / 10);
        arraySize = width <= 400 ? 18 : (width / 10) - 1;
        if (width < 500 && width > 400) {
            arraySize = 25;
        } else if (width >= 300 && width <= 400) {
            arraySize = 14;
        } else if (width >= 350 && width <= 400) {
            arraySize = 20;
        } else if (width === 375) {
            arraySize = 25;
        } else if (width <= 800 && width >= 700) {
            arraySize = 70;
        } else if (width <= 600 && width >= 500) {
            arraySize = 40;
        }
        for (let i = 0; i < arraySize; i++) {
            array.push(randomInt(5, 750))
        }; 
        setArray(array);
       //return array;
    };

    // const changeFunction = (e) => {
    //     const newSpeed = forceNumber(e.target.value);
    // }

    const mergeSort = () => {
        const animations = mergeSortAnimations(array);
        for (let i = 0; i < animations.length; i++) {
            const arrayBars = document.getElementsByClassName('array-bar');
            const colorChange = i % 3 !== 2;
            if (colorChange) {
                const [firstBarIndex, secondBarIndex] = animations[i];
                const firstBarStyle = arrayBars[firstBarIndex].style;
                const secondBarStyle = arrayBars[secondBarIndex].style;
                const barColor = i % 3 === 0 ? 'red' : 'teal';
                setTimeout(() => {
                    firstBarStyle.backgroundColor = barColor;
                    secondBarStyle.backgroundColor = barColor;
                }, i * speed);
            } else {
                setTimeout(() => {
                    const [firstBarIndex, updatedHeight] = animations[i];
                    const firstBarStyle = arrayBars[firstBarIndex].style;
                    firstBarStyle.height = `${updatedHeight}px`;
                }, i * speed);
            }
        }
        console.log(animations);
    }

    const [baseArray, setBaseArray] = useState([]);

    function makeArray() /*: number[] */ {
        const array = [];
        let arraySize = width <= 500 ? 25 : (width / 10);
        arraySize = width <= 400 ? 18 : (width / 10) - 1;
        if (width < 500 && width > 400) {
            arraySize = 25;
        } else if (width >= 300 && width <= 400) {
            arraySize = 14;
        } else if (width >= 350 && width <= 400) {
            arraySize = 20;
        } else if (width === 375) {
            arraySize = 25;
        } else if (width <= 800 && width >= 700) {
            arraySize = 70;
        } else if (width <= 600 && width >= 500) {
            arraySize = 40;
        }
        for (let i = 0; i < arraySize; i++) {
            array.push(randomInt(5, 750))
        };
       
        // for(let i = 0; i < arraySize; i++) {
        //     array.push(i);
        // }
        // array.sort(() => Math.random() < 0.5 ? 1 : -1);
        // array.sort(() => Math.random() < 0.5 ? 1 : -1);
        setBaseArray(array);
    }

    
    const [algoritm, setAlgoritm] = useState(() => quickSort);
    const {
        displayedArray,
        done,
        step,
        reset,
        barEffects,
        stats,
    } = useSortingVisualizer(array, algoritm);
    const [playing, setPlay] = useState(false);
    useEffect(() => {
        if (!done && playing) {
            let taskId = window.setInterval(() => {
                step();
            }, speed)
            return () => window.clearInterval(taskId);
        }
    }, [done, step, playing])


    // const bubbleSort = () => {

    // }

    // const heapSort = () => {

    // } 

    // const insertionSort = () => {

    // }

    return (
        <div className="ui segment primary">
            <center style={{ backgroundColor: 'teal', color: 'teal' }}>
                <div
                    className="ui grid"
                    style={{ backgroundColor: 'teal' }}>
                    <div className="sixteen wide column" style={{ backgroundColor: 'teal' }}>
                        <div className="ui huge header" style={{ marginTop: '10px' }}>
                            <b>Sorting Algorithms</b>
                        </div>
                    </div>
                </div>
            </center>
            <div className="container-array">
                
                {displayedArray.map((value, index) => (
                    <div
                        key={`${value}`}
                        className="array-bar"
                        style={{
                            height: `${(value)}px`,
                            backgroundColor: barEffects[index],
                        }}
                        title={`Value: ${value}`}
                    ></div>
                ))}
                
                <br />
                <center>
                    <div className="fluid button-container">
                        <button className="big ui basic button" onClick={reset, () => genArray()} >Generate Array</button>
                        <button className="big ui basic button" onClick={() => mergeSort()}>Merge Sort</button>
                        <button className="big ui basic button" onClick={() => setPlay(playing => !playing)}>Quick Sort</button>
                        <button className="big ui basic button" onClick={() => mergeSort()}>Bubble Sort</button>
                        <button className="big ui basic button" onClick={() => mergeSort()}>Heap Sort</button>
                        <button className="big ui basic button" onClick={() => mergeSort()}>Insertion Sort</button>
                    </div>

                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <div className="ui hidden divider"></div>
                    <h3 className="ui header">Select Speed</h3>


                    <div>
                        <RangeSlider
                            value={speed}
                            onChange={e => { setSpeed(e.target.value); console.log(speed) }} />
                    </div>


                </center>
            </div>
        </div>
    )
}

export default SortingAlgorithms;


// {array.map((value, i) => (
//     <div
//         className="array-bar"
//         key={i}
//         style={{
//             height: `${value}px`,
//             backgroundColor: 'teal'
//         }}
//     >
//     </div>
// ))}