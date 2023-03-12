import Image from "next/legacy/image";

export default function NavBar() {
  return (
    <nav className="w-full h-[88px] shadow flex flex-row justify-between items-center">
      <div className="h-4/5 w-52 mx-4 relative">
        <Image
          priority
          src="/img/sogeti-logo.svg"
          alt="Sogeti's logo"
          layout="fill"
          objectFit="contain"
        />
      </div>
      <div className="flex flex-row justify-start h-full mx-auto items-center">
        <p className="text-primary-500 text-3xl font-bold">MY TODO LIST</p>
      </div>
    </nav>
  );
}
