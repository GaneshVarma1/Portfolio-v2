import { Gravity, MatterBody } from "./ui/gravity";

function Preview() {
  return (
    <section
      id="playground"
      className="w-full h-[500px] relative bg-white dark:bg-gray-900 z-0 overflow-hidden"
    >
      <div className="w-[98%] h-[98%] mx-auto relative">
        <Gravity
          gravity={{ x: 0, y: 1 }}
          className="w-full h-full"
          grabCursor={true}
          debug={false}
          addTopWall={true}
        >
          {technologies.map((tech) => (
            <MatterBody
              key={tech.name}
              matterBodyOptions={{
                restitution: 0.8,
                friction: 0.01,
                density: 0.001,
              }}
              isDraggable={true}
              x={tech.x}
              y={tech.y}
              angle={tech.angle}
            >
              <div
                className={`${tech.size} hover:cursor-grab active:cursor-grabbing`}
              >
                {tech.name}
              </div>
            </MatterBody>
          ))}
          <MatterBody
            matterBodyOptions={{
              restitution: 0.8,
              friction: 0.01,
              density: 0.001,
            }}
            isDraggable={true}
            x="60%"
            y="50%"
          >
            <img
              src="https://i.postimg.cc/svvKttzJ/image.png"
              alt="My Memoji"
              className="w-40 h-40 object-contain hover:cursor-grab active:cursor-grabbing"
              style={{
                imageRendering: "auto",
                WebkitBackfaceVisibility: "hidden",
                backfaceVisibility: "hidden",
              }}
              loading="eager"
            />
          </MatterBody>
        </Gravity>
      </div>
    </section>
  );
}

const technologies = [
  {
    name: "🗽",
    x: "30%",
    y: "10%",
    size: "text-8xl sm:text-9xl md:text-[10rem]",
  },
  {
    name: "💻",
    x: "30%",
    y: "30%",
    size: "text-7xl sm:text-8xl md:text-9xl",
  },
  {
    name: "🚀",
    x: "40%",
    y: "20%",
    angle: 10,
    size: "text-7xl sm:text-8xl md:text-9xl",
  },
  {
    name: "🛩️",
    x: "75%",
    y: "10%",
    size: "text-7xl sm:text-8xl md:text-9xl",
  },
  {
    name: "⚽️",
    x: "65%",
    y: "25%",
    size: "text-7xl sm:text-8xl md:text-9xl",
  },
  {
    name: "⚾️",
    x: "45%",
    y: "15%",
    size: "text-7xl sm:text-8xl md:text-9xl",
  },
  {
    name: "🏀",
    x: "45%",
    y: "15%",
    size: "text-7xl sm:text-8xl md:text-9xl",
  },
  {
    name: "🏈",
    x: "45%",
    y: "15%",
    size: "text-7xl sm:text-8xl md:text-9xl",
  },
];

export { Preview };
