import React, { useState, useEffect } from "react";
import { Achievement } from "./components/achievement";
import { achievements } from "./constants/achievments";
import { Header } from "./components/header";
import { Clicker } from "./components/clicker";
import { Upgrade } from "./components/upgrade";
import { upgrades } from "./constants/upgrades";
import "./App.css";

const sum = (upgrade: any) => {
  let sum = 0;
  for (let i = 1; i <= 8; i++) {
    sum += upgrade[i].value;
  }
  return sum;
};

const App = () => {
  const [counter, setCounter] = useState(0);
  const [clicker, setClicker] = useState(0);
  const [upgrade, setUpgrade] = useState(upgrades);
  const [achievement, setAchievement] = useState(achievements);
  const [cps, setCps] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(counter, clicker);
      setCounter((counter) => counter + clicker / 30);
      setCps(sum(upgrade));
      if (clicker > 0) {
        setAchievement((achievement) => ({
          ...achievement,
          1: {
            ...achievement[1],
            disabled: false
          }
        }))
      }
    }, 1000 / 30);
    return () => clearInterval(interval);
  });

  const onClickHandler = () => {
    setCounter((counter) => counter + 1);
  };

  const onCursorClickHandler = (upgrades: any) => () => {
    setUpgrade((upgrade) => ({
      ...upgrade,
      [upgrades.id]: {
        ...upgrades,
        count: upgrades.count + 1,
        cost: upgrades.costIncrementer(upgrades.cost),
        value: upgrades.value + upgrades.valueIncrementer,
      },
    }));
    setClicker((clicker) => clicker + upgrades.valueIncrementer);
    setCounter((counter) => counter - upgrades.cost);
  };

  return (
    <div className="game">
      <div className="achievment-section">
        <div className="header">
          <h2 className="header_clicks">Achievements</h2>
        </div>

        <div className="scroll-achievements">
          {Object.entries(achievement).map(([key, value]) => (
            <Achievement
              {...value}
              key={key}
            />
          ))}
        </div>
      </div>

      <div className="clicker-section">
        <Header clicks={counter} cps={cps} />

        <Clicker onClick={onClickHandler} />

        <div className="header">
          <h2 className="header_clicks">Created by</h2>
          <span className="header_cps">Anton Solovyov</span>
        </div>
      </div>

      <div className="upgrade-section">
        <div className="header">
          <h2 className="header_clicks">Upgrades</h2>
        </div>

        <div className="scroll-upgrades">
          {Object.entries(upgrade).map(([key, value]) => (
            <Upgrade
              {...value}
              key={key}
              onClick={onCursorClickHandler(value)}
              disabled={counter < value.cost}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
