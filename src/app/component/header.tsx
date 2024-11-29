import Image from "next/image";
import logo from "../../../public/Logo.jpg"
import { Button } from "@/components/ui/button";
import {Sheet, SheetTrigger , SheetContent} from "../../components/ui/sheet";
import { MenuIcon } from "lucide-react";

const Navbar = () =>{
    return(
        <div className="bg-gray-100 bg-fixed flex w-full h-[75px] pt-6 ">
             <div>
              <Image src={logo} alt="logo" className="w-[200px] h-[65px] ml-[50px]  lg:w-[155px] lg:h-[24px] lg:ml-[105px]"/>
             </div>
                <div>
                <ul className="font-normal text-[16px] hidden sm:hidden md:hidden lg:flex lg:ml-72 lg:gap-14">
                    <li>Home</li>
                    <li>Service</li>
                    <li>Feature</li>
                    <li>Product</li>
                    <li>Testimonial</li>
                    <li>FAQ</li>
                </ul>
               </div>
               <div className=" hidden sm:hidden md:hidden lg:flex lg:ml-[200px] lg:gap-4">
                    <Button variant="default" className="w-[75px] h-8  text-green-600 bg-gray-100">Login</Button>
                    <Button variant="default" className="w-[75px] h-8  bg-green-600 text-white">Sign Up</Button>
                </div>

                <div>
                    <Sheet>
                        <SheetTrigger className="ml-[400px] lg:hidden">
                            <MenuIcon/>
                        </SheetTrigger>
                        <SheetContent>
                              <div>
                              <ul className=" font-normal text-[40px] mt-6">
                            <li className="mt-4">Home</li>
                            <li className="mt-4">Service</li>
                             <li className="mt-4">Feature</li>
                             <li className="mt-4">Product</li>
                            <li className="mt-4">Testimonial</li>
                            <li className="mt-4">FAQ</li>
                             </ul>
                              </div>

                              <div className="mt-4 flex gap-6">
                              <Button variant="default" className="w-[300px] h-[75px] text-[40px] text-green-600 bg-gray-100">Login</Button>
                              <Button variant="default" className="w-[300px] h-[75px] text-[40px]  bg-green-600 text-white">Sign Up</Button>
                              </div>
                        </SheetContent>

                    </Sheet>
                </div>
             
        </div>
    );
}

export default Navbar;