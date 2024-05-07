import { useContext } from "react";
import Accordian from "../accordian";
import LightDarkMode from "../light-darck-mode/idex";
import RandomColor from "../random-color";
import TictacToe from "../tic-tac-toe";
import TreeView from "../tree-view";
import { FeatureFlagContext } from "./context";

export default function FeatureFlags() {
  const { loading, enableFlags } = useContext(FeatureFlagContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTictacToeBoard",
      component: <TictacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
      key: "showAccordian",
      component: <Accordian />,
    },
    {
      key: "shoTreeView",
      component: <TreeView />,
    },
  ];

  function checkEnableFlags(getCurrentKey) {
    return enableFlags[getCurrentKey];
  }

  if (loading) return <h1>loading data</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnableFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
