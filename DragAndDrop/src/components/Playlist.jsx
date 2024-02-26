import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import React from "react";

const Playlist = ({ playlist }) => {
  const { transform, transition, setNodeRef, attributes, listeners } =
    useSortable({
      id: playlist.id,
    });

  const style = { transition, transform: CSS.Transform.toString(transform) };

  return (
    <div className="border p-2 w-[600px] mt-10 ms-10" style={style}>
      <div className="title font-bold">{playlist.category}</div>
      <div className="flex items-center">
        <div className="icon">
          <svg
            viewBox="0 0 24 24"
            preserveAspectRatio="xMidYMid meet"
            focusable="false"
            className="w-[30px] cursor-grab"
            {...attributes}
            {...listeners}
            ref={setNodeRef}
          >
            <g>
              <path d="M21,10H3V9h18V10z M21,14H3v1h18V14z"></path>
            </g>
          </svg>
        </div>
        <div className="flex gap-2 ms-2 mt-3">
          <div className="videos relative">
            <img src="/1.png" className="w-[70px] h-[50px]" alt="" />
            <span className="absolute right-2 bottom-1 bg-black text-white px-1">
              8:10
            </span>
          </div>
          <div className="videos relative">
            <img src="/2.png" className="w-[70px] h-[50px]" alt="" />
            <span className="absolute right-2 bottom-1 bg-black text-white px-1">
              8:10
            </span>
          </div>
          <div className="videos relative">
            <img src="/3.png" className="w-[70px] h-[50px]" alt="" />
            <span className="absolute right-2 bottom-1 bg-black text-white px-1">
              8:10
            </span>
          </div>
          <div className="videos relative">
            <img src="/4.png" className="w-[70px] h-[50px]" alt="" />
            <span className="absolute right-2 bottom-1 bg-black text-white px-1">
              8:10
            </span>
          </div>
          <div className="videos relative">
            <img src="/5.png" className="w-[70px] h-[50px]" alt="" />
            <span className="absolute right-2 bottom-1 bg-black text-white px-1">
              8:10
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
