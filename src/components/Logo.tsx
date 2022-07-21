import Image from "next/image";
import clsx from "clsx";
export default function Logo() {
  return (
    <>
      <Image src="/img/Logo.png" width={50} height={50}  />
      <span
        className={clsx(
          "bg-gradient-to-r from-purple-500 to-indigo-800 bg-clip-text align-middle font-black tracking-widest text-transparent ml-1 text-left"
        )}
      >
        BEMFAK SAINTEK
      </span>
    </>
  );
}
