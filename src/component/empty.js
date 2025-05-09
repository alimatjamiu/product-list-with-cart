import Image from "next/image"
import Emptys from "../../public/assets/images/empty.svg"


export default function Empty() {
    return (
        <div className="flex flex-col items-center justify-center ">
           <Image src={Emptys} alt="empty" width={200}/>
            <p className="text-gray-500">Add some products to your cart to get started.</p>
        </div>
    );
}