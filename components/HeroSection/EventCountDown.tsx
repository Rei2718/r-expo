"use client";

import Countdown from 'react-countdown';

const targetDate = new Date("2026-02-11T10:00:00");

const renderer = ({ days, hours, minutes, seconds, completed }: {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}) => {
  if (completed) {
    return <span className="text-primary text-sm tracking-wider">イベント開催中 !</span>;
  } else {
    return (
      <div className="font-mono tracking-tighter">
        <span className="text-xs">残り</span>{' '}
        <span>{days}</span><span className="text-sm">d</span>{' '}
        <span>{hours}</span><span className="text-sm">h</span>{' '}
        <span>{minutes}</span><span className="text-sm">m</span>{' '}
        <span>{seconds}</span><span className="text-sm">s</span>
      </div>
    );
  }
};

export default function EventCountdown() {
  return <Countdown date={targetDate} renderer={renderer} />;
}