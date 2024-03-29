import { useState } from "react";
import MenuList from "./menu-list";
import {FaMinus,FaPlus} from 'react-icons/fa'

export default function MenuItem({ item }) {
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});
  function handleToggelChildren(getCurrentLabel) {
    setDisplayCurrentChildren({
      ...displayCurrentChildren,
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel],
    });
  }
  return (
    <li >
      <div className="menu-item">
        <p>{item.label}</p>
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggelChildren(item.label)}>
            {
                displayCurrentChildren[item.label]? <FaMinus color="white" size={25}/> : <FaPlus color="white" size={25}/>
            }
          </span>
        ) : null}
      </div>

      {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label]? (
        <MenuList list={item.children} />
      ) : null}
    </li>
  );
}
