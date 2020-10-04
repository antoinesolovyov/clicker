import mousePointer from '../images/mouse-pointer.svg'
import clock from '../images/clock.svg'
import coffee from '../images/coffee.svg'
import zap from '../images/zap.svg'
import bell from '../images/bell.svg'
import calendar from '../images/calendar.svg'
import box from '../images/box.svg'
import activity from '../images/activity.svg'

export const upgrades = {
  1: {
    id: 1,
    name: "Mouse pointer",
    value: 0,
    cost: 10,
    count: 0,
    valueIncrementer: 1,
    costIncrementer: (cost: number) => 1.15 * cost,
    image: mousePointer
  },
  2: {
    id: 2,
    name: "Clock",
    value: 0,
    cost: 100,
    count: 0,
    valueIncrementer: 10,
    costIncrementer: (cost: number) => 1.15 * cost,
    image: clock
  },
  3: {
    id: 3,
    value: 0,
    name: "Coffee",
    cost: 1000,
    count: 0,
    valueIncrementer: 100,
    costIncrementer: (cost: number) => 1.15 * cost,
    image: coffee
  },
  4: {
    id: 4,
    value: 0,
    name: "Zap",
    cost: 10000,
    count: 0,
    valueIncrementer: 1000,
    costIncrementer: (cost: number) => 1.15 * cost,
    image: zap
  },
  5: {
    id: 5,
    value: 0,
    name: "Bell",
    cost: 100000,
    count: 0,
    valueIncrementer: 10000,
    costIncrementer: (cost: number) => 1.15 * cost,
    image: bell
  },
  6: {
    id: 6,
    value: 0,
    name: "Calendar",
    cost: 1000000,
    count: 0,
    valueIncrementer: 100000,
    costIncrementer: (cost: number) => 1.15 * cost,
    image: calendar
  },
  7: {
    id: 7,
    value: 0,
    name: "Box",
    cost: 10000000,
    count: 0,
    valueIncrementer: 1000000,
    costIncrementer: (cost: number) => 1.15 * cost,
    image: box
  },
  8: {
    id: 8,
    value: 0,
    name: "Activity",
    cost: 100000000,
    count: 0,
    valueIncrementer: 10000000,
    costIncrementer: (cost: number) => 1.15 * cost,
    image: activity
  },
};
