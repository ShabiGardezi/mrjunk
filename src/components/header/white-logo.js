import Link from "next/link";
import Image from "next/image";

function WhiteLogo() {
  return (
    <Link href="/" className="inline-block align-middle leading-[1] mt-2">
      <Image src="/logos/logo.webp" alt="Logo" width={250} height={150} />
    </Link>
  );
}

export default WhiteLogo;
