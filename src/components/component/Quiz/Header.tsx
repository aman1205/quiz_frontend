import Image from "next/image";
import PortolLogo from '@/app/3 1.png'

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 shadow-xl">
        <div>
            <Image src={PortolLogo} alt="logo" width={200} height={150} />
        </div>
        <div>
            <h3 className="text-[#002C9C]">Quiz Portal 2024-25</h3>
        </div>
    </header>
  );
}

export default Header;