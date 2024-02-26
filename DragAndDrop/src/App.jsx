import React, { useState } from "react";
import Playlist from "./components/Playlist";
import { data } from "./data.json";
import {
  SortableContext,
  arrayMove,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { DndContext, closestCenter } from "@dnd-kit/core";

const App = () => {
  return (
    <div>
      <DndContext onDragEnd={onDragEnd} collisionDetection={closestCenter}>
        <SortableContext
          strategy={verticalListSortingStrategy}
          items={playlist}
        >
          {playlist.map((playlist) => (
            <Playlist playlist={playlist} key={playlist.id}></Playlist>
          ))}
        </SortableContext>
      </DndContext>
    </div>
  );
};

export default App;
