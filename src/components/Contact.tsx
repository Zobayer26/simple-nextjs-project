import Image from "next/image";
import Link from "next/link";

const Contact = () => {
    return (
        <div className="flex flex-col gap-4 text-center">
            <h1>Contact us</h1>
            <div className="flex mx-auto gap-4">
                <Link href="https://www.facebook.com/zobayerhossain.arif.35">
                    <p className="flex items-center gap-1"> <Image src="/facebook.svg"
                        alt="Facbook_icon" width={20} height={20} /> facbook</p></Link>
                <Link href="https://github.com/Zobayer26">
                    <p className="flex items-center gap-1"> <Image src="/github.svg"
                        alt="Github_icon" width={20} height={20} /> github</p></Link>
                <Link href="https://www.linkedin.com/in/md-zobayer-hossain-899921220/">
                    <p className="flex items-center gap-1"> <Image src="/linkedin (1).svg"
                        alt="Linkedin_icon" width={20} height={20} /> LinkedIn</p> </Link>
            </div>
        </div>
    );
};

export default Contact; 20