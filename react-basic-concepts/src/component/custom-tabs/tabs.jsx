import { useState } from "react";

export default function Tabs({ tabsContent, onChange }) {
  const [currentTabeIndex, setCurrentTabeIndex] = useState(0);
  return (
    <div className="wrapper">
      <div className="heading">
        {tabsContent.map((tabItem) => (
          <div key={tabItem.label}>
            <span className="label">{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className="content">
        {tabsContent[currentTabeIndex] && tabsContent[currentTabeIndex].content}
      </div>
    </div>
  );
}
