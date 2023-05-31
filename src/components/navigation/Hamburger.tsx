export default function Hamburger({
  isDrawerOpened,
  onClick,
}: {
  isDrawerOpened: boolean;
  onClick: () => any;
}) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center w-16 h-16 bg-transparent rounded-full cursor-pointer"
    >
      <span
        className={`inline-block relative w-8 h-1 rounded-lg ${
          isDrawerOpened ? "bg-transparent" : "bg-neutral-400"
        }`}
      >
        <span
          className={`absolute left-0 transition-all duration-200 w-full h-1 bg-neutral-400 rounded-lg ${
            isDrawerOpened ? "top-0 transform rotate-45" : "top-[-0.6rem]"
          }`}
        ></span>
        <span
          className={`absolute left-0 transition-all duration-200 w-full h-1 bg-neutral-400 rounded-lg ${
            isDrawerOpened ? "top-0 transform -rotate-45" : "top-[0.6rem]"
          }`}
        ></span>
      </span>
    </button>
  );
}
