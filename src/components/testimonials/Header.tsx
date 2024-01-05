"use client";
import React, { useEffect, useRef } from "react";
import Matter, { Bodies, Body, Runner } from "matter-js";

export const Header = () => {
  const {
    Engine,
    World,
    Bodies,
    Constraint,
    Composites,
    Events,
    MouseConstraint,
    Render,
    Composite,
    Common,
    Mouse,
  } = Matter;

  var world: Matter.World;

  const worldRef = useRef<HTMLDivElement | null>(null);
  const engine = useRef(Engine.create());
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const isPressed = useRef(false);
  const boxRef = useRef<HTMLSpanElement | null>(null);

  // let vector = new Two.Vector();
  let entities = [];

  const bodyText = [
    "Idea",
    "Idea",
    "Idea",
    "Money",
    "Money",
    "Tech",
    "Concept",
  ];

  useEffect(() => {
    if (!worldRef.current) return;
    world = engine.current.world;
    engine.current.gravity.y = 1;

    const width = 1000;
    const height = 600;

    // const render = Render.create({
    //   element: worldRef.current,
    //   engine: engine.current,
    //   options: {
    //     width: width,
    //     height: height,
    //     wireframes: false,
    //     background: "transparent",
    //   },
    // });



    const bodies = bodyText.map((text, i) => {
      const x = Math.random() * width;
      const y = Math.random() * height;
      const w = 100;
      const h = 50;
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      const body = new Box(x, y, w, h, {
        worldRef,
        classList:[ "absolute","bg-slate-600","select-none","cursor-grab","rounded-full",'text-center',"z-[-1]"],
        color,
        text,
      });
      entities.push(body);
      return body;
    });

    const ground = Bodies.rectangle(width / 2, height, width, 1, {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        visible: false,
      },
    });
    const leftWall = Bodies.rectangle(0, height / 2, 1, height, {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        visible: false,
      },
    });
    const rightWall = Bodies.rectangle(width, height / 2, 1, height, {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        visible: false,
      },
    });
    const topWall = Bodies.rectangle(width / 2, 0, width, 1, {
      isStatic: true,
      render: {
        fillStyle: "transparent",
        visible: false,
      },
    });

    

    World.add(world, [
      ...bodies.map((body) => body.body),
      ground,
      leftWall,
      rightWall,
      topWall,
    ]);

    var mouse = Mouse.create(render.canvas),
      mouseConstraint = MouseConstraint.create(engine.current, {
        mouse: mouse,
        constraint: {
          stiffness: 0.2,
          render: {
            visible: false,
          },
        },
      });

    Composite.add(world, mouseConstraint);

    render.mouse = mouse;

    // Runner.run(engine.current);
    // Render.run(render);

    const render = () => {
      bodies.forEach((body) => {
         body.render();
      });
      Engine.update(engine.current);
      requestAnimationFrame(render);
   };

   requestAnimationFrame(render);

    Events.on(engine, 'tick', () => {
      console.log('tick');
    });

    // var runner= Runner.create();
    // Runner.run(runner, engine.current);

    return () => {
      Render.stop(render);
      World.clear(engine.current.world, false);
      Engine.clear(engine.current);
      render.canvas.remove();
    };
  }, []);

  const handleDown = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    isPressed.current = true;
  };

  const handleUp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    isPressed.current = false;
  };

  const handleAddCircle = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (isPressed.current) {
      const ball = Bodies.circle(
        e.clientX,
        e.clientY,
        10 + Math.random() * 30,
        {
          mass: 10,
          restitution: 0.9,
          friction: 0.005,
          render: {
            fillStyle: "#0000ff",
          },
        }
      );
      World.add(engine.current.world, [ball]);
    }
  };

  return (
    <section>
      <div
        className=""
        onMouseDown={handleDown}
        onMouseUp={handleUp}
        // onMouseMove={handleAddCircle}
        ref={worldRef}
      ></div>
      <canvas ref={canvasRef}></canvas>
      <span ref={boxRef} className="absolute bg-slate-600">
        asdf
      </span>
    </section>
  );
};



class Box {
  body: Body;
  ele: HTMLSpanElement;
  w: number;
  h: number;

  constructor(
    x: number,
    y: number,
    w: number,
    h: number,
    options: {
      worldRef: React.MutableRefObject<HTMLDivElement | null>;
      classList: string[] | string;
      color: string;
      text: string;
    }
  ) {
    this.w = w;
    this.h = h;
    const { worldRef, classList, text, color } = options;

    this.body = Bodies.rectangle(x, y, w, h, {
      render: {
        fillStyle: "transparent",
      },
    });

    this.ele =
      worldRef.current?.appendChild(document.createElement("span")) ??
      document.createElement("span");

    this.ele.classList.add(
      ...(Array.isArray(classList) ? classList : [classList])
    );

    this.ele.style.width = `${w}px`;
    this.ele.style.height = `${h}px`;
    this.ele.style.backgroundColor = color;
    this.ele.innerText = text;
    this.ele.style.position = "absolute";
  }

  render() {
    const pos = this.body.position;
    this.ele.style.top = `${pos.y - this.h/2}px`;
    this.ele.style.left = `${pos.x - this.w/2}px`;
    this.ele.style.transform = `rotate(${this.body.angle}rad)`;
  }
}
