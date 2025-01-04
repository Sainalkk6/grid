import { useEffect, useState } from "react";
import { Rows } from "../types/rows";



const Version3 = ({rows,setRows,setProceed}:Rows) => {
  const [blocks, setBlocks] = useState<{ x: number; y: number }[]>([]);
  const [activeblocks, setActiveBlocks] = useState<{ x: number; y: number }[]>([]);
  let arr: { x: number; y: number }[] = [];
  const [indexes, setIndexes] = useState<number[]>([]);

  useEffect(() => {
    setBlocks([]);
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < rows; j++) {
        setBlocks((prev) => [...prev, { x: i, y: j }]);
      }
    }
  }, [rows]);

  const handleDoubleclick = (block: { x: number; y: number }) => {

    setActiveBlocks((prev) => (!prev.includes(block)  ? [...prev, block] : prev));

    for (let i = 0; i < rows; i++) {
      arr.push({ x: i, y: block.y });
      arr.push({ x: block.x - i, y: block.y - i });
      arr.push({ x: block.x + i, y: block.y + i });
      arr.push({ x: block.x - i, y: block.y + i });
      arr.push({ x: block.x + i, y: block.y - i });
      arr.push({ x: block.x, y: i });
    }

    const newIndexes = blocks.map((block, index) => (arr.some((nonClickableBlock) => nonClickableBlock.x === block.x && nonClickableBlock.y === block.y) ? index : -1)).filter((index) => index !== -1);
    setIndexes((prev) => [...prev, ...newIndexes]);
  };

  const handleClick = ()=>setProceed(false)

  return (
    <div className="flex flex-col  relative w-full h-screen items-center md:justify-center gap-10 lg:justify-between py-5">
      <div className="flex flex-col gap-14 items-center">
        <button className="flex items-center justify-center bg-green-600 px-5 py-3 text-white rounded-3xl text-xl" onClick={handleClick}>Restart</button>
     
      <div className={`grid gap-3 `} style={{ gridTemplateColumns: `repeat(${rows},1fr)` }}>
        {blocks.map((block, index) => (
          <div onDoubleClick={() => !indexes.includes(index) && handleDoubleclick(block)} className={`md:w-14  md:h-14 lg:w-16 lg:h-16  h-6 w-6 rounded-md border flex items-center justify-center text-white] border-red-600 ${indexes.includes(index) ? "bg-gray-600 cursor-not-allowed" : "cursor-pointer"}  ${activeblocks.includes(block) && "bg-red-600"}`} key={index} />
        ))}
      </div>
      </div>
    </div>
  );
};

export default Version3;
