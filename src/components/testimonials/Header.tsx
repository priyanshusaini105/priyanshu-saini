"use client";
import React, { useEffect, useRef } from "react";
import Matter, { Bodies } from "matter-js";
import p5 from "p5";

const entityTexts = [
  { text: "Whoa", color: "#ffc9c9" },
  { text: "Super!", color: "#fbf3c5" },
  { text: "Fantastic", color: "#c2fdbc" },
  { text: "Amazing!", color: "#b6e4fb" },
  { text: "Mind Blowing", color: "#fbb6cf" },
  { text: "Awesome", color: "#b6e4fb" },
  { text: "Great", color: "#c2fdbc" },
  { text: "Excellent", color: "#fbf3c5" },
  { text: "Incredible", color: "#ffc9c9" },
  { text: "Unbelievable", color: "#fbb6cf" },
];

export const Header = () => {
  const { Engine, Composite, Bodies, MouseConstraint } = Matter;

  const worldRef = useRef<HTMLDivElement | null>(null);
  const engine = useRef<Matter.Engine>(Engine.create());

  let entities = useRef<Body[]>([]);

  useEffect(() => {
    let world: Matter.World = engine.current.world;
    let canvas: p5.Renderer | undefined;
    let boundaries: Matter.Body[] = [];
    const mouse = Matter.Mouse.create(worldRef.current ?? document.body);
    let mouseConstraint = MouseConstraint.create(engine.current, {
      mouse: mouse,
      constraint: {
        render: {
          visible: true,
        },
      },
    });

    const sketch = (p: p5) => {
      // setup
      p.setup = () => {
        const width = p.windowWidth;
        const height = p.windowHeight;
        canvas = p.createCanvas(width, height);
        canvas.parent(worldRef.current ?? document.body);

        boundaries = [
          //ground
          Bodies.rectangle(width / 2, height, width, 50, {
            isStatic: true,
          }),
          Bodies.rectangle(0, height / 2, 5, height, {
            isStatic: true,
          }),
          //right wall
          Bodies.rectangle(width, height / 2, 5, height, {
            isStatic: true,
          }),
          //top wall
          Bodies.rectangle(width / 2, 0, width, 50, {
            density: 100,
            isStatic: true,
          }),
        ];

        entities.current = entityTexts.map((entity, i) => {
          const x = (Math.random() * width) / 2;
          return new Body(100 + x, 100, 100, 50, world, p, entity, false);
        });

        Composite.add(world, boundaries);

        Composite.add(world, mouseConstraint);

        Matter.Runner.run(engine.current);
      };

      p.draw = () => {
        p.background("#fafafa");

        entities.current.forEach((entity) => {
          entity.show();
        });

        p.fill("#000");
        p.textSize(80);
        p.textFont("__Montserrat_3e707a");
        p.textStyle(p.BOLD);
        p.textAlign(p.CENTER, p.CENTER);
        p.text("Trusted by 50+ \nFounders", p.width / 2, p.height / 2);

        const bodiesUnderCursor =
          Matter.Query.point(
            entities.current.map((entity) => entity.body),
            mouseConstraint.mouse.position
          ).length > 0;
        const isDragging = mouseConstraint.mouse.button === 0;

        if (canvas) {
          canvas.elt.style.cursor = isDragging
            ? "grabbing"
            : bodiesUnderCursor
            ? "grab"
            : "default";
        }
      };
    };

    new p5(sketch);

    return () => {
      // Composite.clear(world, false);
      // Engine.clear(engine);
      if (canvas) canvas.remove();
      if (engine) Engine.clear(engine.current);
      if (world) Composite.clear(world, false);
    };
  }, []);
  useEffect(() => {
    if (worldRef.current) {
      worldRef.current.addEventListener("wheel", scrollHandler);
    }

    function scrollHandler(e: WheelEvent) {
      //scroll dociument
      document.documentElement.scrollTop += e.deltaY;
      console.log(e.deltaY);
    }

    return () => {
      if (worldRef.current) {
        worldRef.current.removeEventListener("wheel", scrollHandler);
      }
    };
  }, [worldRef.current]);

  return (
    <section>
      <div className="" ref={worldRef}></div>
    </section>
  );
};

class Body {
  w: number;
  h: number;
  x: number;
  y: number;
  body: Matter.Body;
  p: p5;
  public text: string;
  color: string;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    world: Matter.World,
    p: p5,
    entity: { text: string; color: string },
    isStatic = false
  ) {
    this.w = w;
    this.h = h;
    this.x = x;
    this.y = y;
    this.p = p;
    this.text = entity.text;
    this.w = this.p.textWidth(entity.text) * 2.2 + 20;
    this.color = entity.color;
    this.body = Bodies.rectangle(x, y, this.w, h, {
      isStatic,
      chamfer: { radius: 25 },
    });
    Matter.Composite.add(world, this.body);
  }

  show() {
    let pos = this.body.position;
    let angle = this.body.angle;

    this.p.push();
    this.p.fill(this.color);
    this.p.noStroke();
    this.p.translate(pos.x, pos.y);
    this.p.rotate(angle);
    this.p.rectMode(this.p.CENTER);
    this.p.rect(0, 0, this.w, this.h, 50);

    this.p.fill("#000");
    this.p.textFont("__Montserrat_3e707a");
    this.p.textStyle(this.p.BOLD);
    this.p.textAlign(this.p.CENTER, this.p.CENTER);
    this.p.textSize(20);
    this.p.text(this.text, 0, 0);

    this.p.pop();
  }
}
