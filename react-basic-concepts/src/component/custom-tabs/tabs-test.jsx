import Tabs from "./tabs";
import './tabs.css'

function RandomComponent() {
  return <h1>Some Randome content</h1>;
}

export default function TabTest() {
  const tabs = [
    {
      label: "Tab 1",
      content: <div>This is content for Tab 1</div>,
    },
    {
      label: "Tab 2",
      content: <div>This is content for Tab 2</div>,
    },
    {
      label: "Tab ",
      content: <RandomComponent />,
    },
  ];
  function handelChange(currentTabIndex) {
    console.log(currentTabIndex);
  }
  return <Tabs tabsContent={tabs} onChange={handelChange} />;
}
