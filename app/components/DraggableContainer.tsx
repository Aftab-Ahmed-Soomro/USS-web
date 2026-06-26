"use client";

import React, { useRef, useState, MouseEvent } from "react";

export function DraggableContainer({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDown, setIsDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const onMouseDown = (e: MouseEvent) => {
    if (!scrollRef.current) return;
    setIsDown(true);
    setIsDragging(false);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const onMouseLeave = () => {
    setIsDown(false);
  };

  const onMouseUp = () => {
    setIsDown(false);
  };

  const onMouseMove = (e: MouseEvent) => {
    if (!isDown || !scrollRef.current) return;
    e.preventDefault();
    
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 2; // scroll speed multiplier

    if (Math.abs(walk) > 10) {
      setIsDragging(true);
    }

    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  const onClickCapture = (e: MouseEvent) => {
    // Prevent click events from firing on child links if we just dragged
    if (isDragging) {
      e.preventDefault();
      e.stopPropagation();
    }
  };

  return (
    <div
      ref={scrollRef}
      className={`${className} ${isDown ? "dragging" : ""}`}
      onMouseDown={onMouseDown}
      onMouseLeave={onMouseLeave}
      onMouseUp={onMouseUp}
      onMouseMove={onMouseMove}
      onClickCapture={onClickCapture}
      onDragStart={(e) => e.preventDefault()} // Prevents image ghost dragging
      style={{ 
        userSelect: "none", // Prevents text selection "copying" while interacting
        scrollSnapType: isDown ? "none" : undefined,
        scrollBehavior: isDown ? "auto" : undefined,
      }}
    >
      {children}
    </div>
  );
}
