"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(counter + 1);
  };

  const decrease = () => {
    counter > 0 ? setCounter(counter - 1) : 0;
  };

  return (
    <div className="flex items-center justify-center min-h-dvh">
      <div
        className={`w-1/4 border-1  ${
          counter === 0 ? "border-red-500" : "border-gray-300"
        } rounded-lg p-4 flex flex-col gap-3`}
      >
        <p className="text-lg">Counter:</p>
        <p className="text-center text-2xl">{counter}</p>
        <div className="flex item-center gap-2">
          <Button
            variant="default"
            size="sm"
            onClick={increase}
            className="grow-1"
          >
            +
          </Button>
          <Button
            variant="destructive"
            size="sm"
            onClick={decrease}
            className="grow-1"
          >
            -
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setCounter(0)}
            className="grow-1"
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
