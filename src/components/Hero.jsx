import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setFirstInput,
  setResult,
  setSecondInput,
  putSign,
  setTotal,
} from "../features/inputSlice";

const Hero = () => {
  const dispatch = useDispatch();
  const { firstInput, secondInput, result, sign, operationCount } = useSelector(
    (state) => state.inputs
  );

  useEffect(() => {
    if (firstInput && secondInput) {
      dispatch(setResult(sign));
    }
    if (!secondInput) {
      dispatch(setResult(""));
    }
  }, [firstInput, secondInput, sign, result]);

  const handleReset = () => {
    dispatch(setFirstInput(""));
    dispatch(setSecondInput(""));
    dispatch(setResult(""));
    dispatch(putSign("+"));
  };
  const operationHandler = (operator) => {
    dispatch(putSign(operator));
    if (sign !== operator) {
      dispatch(setTotal());
    }
  };
  return (
    <>
      <div className="h-screen w-full bg-violet-200 flex  justify-center">
        <div className="pt-20 border-2 border-gray-400 rounded-xl w-[600px] h-[500px] mt-20 flex flex-col flex-shrink overflow-hidden">
          <div className="border border-black w-40 pl-2 py-1 rounded-md ml-12">
            <p className="">
              Total operation: <span>{operationCount}</span>
            </p>
          </div>

          <div className="flex  flex-col gap-2 md:flex-row justify-around md:gap-0 items-center mt-8 only:">
            <input
              className="input-box"
              type="number"
              value={firstInput}
              onChange={(e) => {
                dispatch(setFirstInput(e.target.value));
              }}
            />
            <div className="circle">
              <p className="circle-text">{sign}</p>
            </div>
            <input
              className="input-box"
              type="number"
              value={secondInput}
              onChange={(e) => {
                dispatch(setSecondInput(e.target.value));
              }}
            />
          </div>
          <div className="mt-10 font-semibold text-[18px] flex justify-evenly items-center">
            <button onClick={() => operationHandler("-")} className="circle">
              -
            </button>
            <button onClick={() => operationHandler("+")} className="circle">
              +
            </button>
            <button onClick={() => operationHandler("/")} className="circle">
              /
            </button>
            <button onClick={() => operationHandler("*")} className="circle">
              *
            </button>
          </div>
          <div className="flex justify-between mx-16 mt-16">
            <button
              onClick={handleReset}
              className="border border-black  px-2 rounded-md"
            >
              Reset
            </button>
            <p>
              Result: <span>{result}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
