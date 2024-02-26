import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { RxDragHandleHorizontal } from "react-icons/rx";

function AddDynamicInput() {
  const [values, setValues] = useState([{ note: "Note Name" }]);
  const [content, setContent] = useState([{ text: "Write your content here" }]);

  const handleAdd = () => {
    const newValues = [...values, { note: "Note Name" }];
    setValues(newValues);
    const newContent = [...content, { text: "Write your content here" }];
    setContent(newContent);
  };

  const handleChange = (newValue, i) => {
    const newValues = [...values];
    newValues[i].note = newValue;
    setValues(newValues);
  };

  const contentChange = (newValue, i) => {
    const newContent = [...content];
    newContent[i].text = newValue;
    setContent(newContent);
  };

  const handleDelete = (i) => {
    const newValues = [...values];
    newValues.splice(i, 1);
    setValues(newValues);
    const newContent = [...content];
    newContent.splice(i, 1);
    setContent(newContent);
  };

  return (
    <>
      <aside
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-4 bg-gray-50 dark:bg-gray-800">
          <div className="flex items-center justify-center mb-4">
            <button onClick={handleAdd} className="text-white ">
              <FaPlus />
            </button>
          </div>

          <ul className="space-y-2 font-medium">
            <li>
              {values.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <RxDragHandleHorizontal
                    size={30}
                    className="cursor-grab text-white"
                  />
                  <p
                    className="text-white w-full border m-2 p-2 rounded"
                    contentEditable={true}
                    onBlur={(e) => handleChange(e.target.textContent, i)}
                  >
                    {item.note}
                  </p>
                  <button
                    onClick={() => handleDelete(i)}
                    className="text-white ps-1"
                  >
                    <MdDelete size={20} />
                  </button>
                </div>
              ))}
            </li>
          </ul>
        </div>
      </aside>

      <div className="sm:ml-64">
        <div>
          <div className="flex items-center justify-center flex-wrap">
            {content.map((item, i) => (
              <>
                <div
                  key={i}
                  className="p-2 w-[400px] h-[200px] m-2 bg-gray-300"
                  onBlur={(e) => contentChange(e.target.textContent, i)}
                  contentEditable={true}
                >
                  <div
                    className="flex items-center gap-2"
                    contentEditable={false}
                  >
                    <RxDragHandleHorizontal
                      size={30}
                      className="cursor-grab text-gray-500"
                    />
                    <p className="font-bold">Note Name</p>
                  </div>
                  {item.text}
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddDynamicInput;
