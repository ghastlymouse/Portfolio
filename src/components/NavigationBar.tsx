const NavigationBar = () => {
  return (
    <nav className="w-full h-[100px] text-2xl flex items-center justify-around bg-gray-400">
      <span className="cursor-pointer">{"GhastlyMouse's Portfolio"}</span>
      <ul className="flex gap-10">
        <li className="cursor-pointer">About me</li>
        <li className="cursor-pointer">Skills</li>
        <li className="cursor-pointer">Projects</li>
        <li className="cursor-pointer">Contact</li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
