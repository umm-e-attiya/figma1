import Image from "next/image";
import photo1 from "../../public/Illustration.jpg"
import photo2 from "../../public/Logo1.jpg"
import photo3 from "../../public/Logo2.jpg"
import photo4 from "../../public/Logo3.jpg"
import photo5 from "../../public/Logo4.jpg"
import photo6 from "../../public/Logo5.png"
import photo7 from "../../public/Logo6.jpg"
import photo8 from "../../public/Logo7.jpg"
import photo9 from "../../public/Membership Organizatios.jpg"
import photo10 from "../../public/National Associations.jpg"
import photo11 from "../../public/clubsandgroups.jpg"
import photo12 from "../../public/Frame.jpg"
import photo13 from "../../public/1.png"
import photo14 from "../../public/2.png"
import photo15 from "../../public/3.png"
import photo16 from "../../public/4.png"
import photo17 from "../../public/pana.jpg"
import photo18 from "../../public/image 9.jpg"
import photo19 from "../../public/p1.png"
import photo20 from "../../public/p2.png"
import photo21 from "../../public/p3.png"
import photo22 from "../../public/footer.png"


export default function Home() {
  return (
    <div>
      <div className="bg-gray-100 bg-fixed w-full  h-[900px] lg:h-[599px] pl-[50px] lg:pl-56 lg:flex">
        <div className=" w-[657px]">
          <h1 className="font-semibold text-[64px] pt-[76px] lg:pt-[76px] ">Lessons and insights <span className="text-green-600">from 8 years</span></h1>
          <p className="font-normal text-gray-600 text-[16px] pt-[24px]">Where to grow your business as a photographer: site or social media?</p>
          <button className="w-[128px] h-[52px] rounded-sm mt-5 pt-[14px] pr-[32px] pb-[14px] pl-[32px] bg-green-600 text-white">Register</button>
        </div>
        <div>
          <Image src={photo1} alt="illustration" className="w-[500px] h-[400px] ml-[100px] pt-14 lg:w-[391px] lg:h-[407px] lg:pt-7 lg:ml-[150px] " />
        </div>
        
    
</div>


      
      
      <div className="w-[1440px] h-[190px] gap-[8px]">
        <div className="w-[1110px] h-[766px]  mt-10 lg:text-center">
            <h1 className="font-semibold  text-gray-600 ml-[250px] text-[60px] lg:text-[36px] lg:ml-[600px] ">Our Clients</h1>
            <p className="font-normal  pt-[24px] ml-[180px] text-[20px] lg:text-[16px] lg:ml-[600px] text-gray-600">We have been working with some Fortune 500+ clients</p>
        </div>
      </div>

        <div className="w-[1152px] h-[98px] ml-[380px] lg:flex lg:justify-between lg:ml-80">
          <div>
              <Image src={photo2} alt="photo2" className="w-[48px] h-[48px] mt-7 " />
          </div>
          
          <div>
              <Image src={photo3} alt="photo3" className="w-[48px] h-[48px] mt-7" />
          </div>

          <div>
              <Image src={photo4} alt="photo4" className="w-[48px] h-[48px] mt-7 " />
          </div>

          <div>
              <Image src={photo5} alt="photo5" className="w-[48px] h-[48px] mt-7 " />
          </div>

          <div>
              <Image src={photo6} alt="photo6" className="w-[48px] h-[48px] mt-7" />
          </div>

          <div>
              <Image src={photo7} alt="photo6" className="w-[48px] h-[48px] mt-7" />
          </div>
          
          <div>
              <Image src={photo8} alt="photo8" className="w-[48px] h-[48px] mt-7" />
          </div>
         </div>

         
         
         <div className="w-[1440px] h-[416px] mt-[500px]">
          <div className="w-[1440px] h-[120px] lg:text-center  ">
            <h1 className="w-[542px] h-[88px] ml-[200px] font-semibold text-[36px] text-gray-600 lg:ml-[600px]">Manage your entire community in a single system</h1>
            <p className=" mt-7 ml-[210px] font-normal text-gray-600 text-[30px] lg:text-[16px] lg:ml-[300px]">Who is Nextcent suitable for?</p>
          </div>
               <div className="mt-10 ml-[200px] lg:flex lg:justify-between  lg:mt-7 ">
                  <div>
                    <Image src={photo9} alt="photo9" className="w-[299px] h-[260px] lg:ml-40" />
                  </div>
                  <div>
                    <Image src={photo10} alt="photo10" className="w-[299px] h-[260px] lg:ml-56" />
                  </div>

                  <div>
                    <Image src={photo11} alt="photo11" className="w-[299px] h-[260px] lg:ml-56" />
                  </div>
               </div>
         </div>

         
         
         <div className="w-[1440px] h-[433]">
               <div className="mt-[600px] ml-[100px] lg:flex lg:justify-between lg:pr-[144px] lg:pl-[144px] lg:ml-52 lg:mt-36">
                    <div>
                        <Image src={photo12} alt="photo12" className="w-[500px] h-[400] lg:w-[422px] lg:h-[433]" />
                    </div>

                    <div className=" ml-[20px] gap-[32px] lg:ml-[20px] w-[661px] h-[268px] ">
                        <h1 className="w-[500px] h-[88px] lg:w-[601px] lg:h-[88px] text-gray-600 font-semibold text-[40px] lg:text-[36px] pt-[44px]">The unseen of spending three years at Pixelgrade</h1>
                         <p className="w-[500px] h-[88px] lg:w-[601px] lg:h-[80px] font-semibold text-[20px] lg:text-[14px] mt-[70px] text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.</p>

                         <button className="w-[151px] h-[52px] rounded-sm mt-[120px] lg:mt-[30px] pt-[14px] pr-[32px] pb-[14px] pl-[32px] bg-green-600 text-white">Learn More</button>
                    </div>
                    </div>
                    </div>

                    <div className="bg-gray-100 mt-52 lg:mt-10 w-full h-[560px] lg:h-[288px] lg:flex lg:justify-between  pt-[64px] pr-[144px] pb-[64px] pl-[144px]">
                      <div className="w-[540px] h-[120px] gap-[8px]">
                        <h1 className="w-[408px] h-[88px] text-gray-600 font-semibold text-[36px] pt-[44px]">Helping a local <span className="text-green-600"> business reinvent itself</span></h1>
                        <p className="w-[557px] h-[24px] text-black text-[16px] pt-[60px]">We reached here with our hard work and dedication</p>
                     </div>
                     <div className="w-[540px] h-[160px] mt-[100px] lg:flex gap-[40px] items-center  lg:pb-[300px] lg:ml-[200px]">
                        <div className="grid-rows-2">
                              <Image src={photo13} alt="photo13" className="w-[255px] h-[60px]" />
                              <Image src={photo14} alt="photo14" className="w-[255px] h-[60px]" />
                        </div>

                        <div className="grid-rows-2">
                              <Image src={photo15} alt="photo15" className="w-[255px] h-[60px]" />
                              <Image src={photo16} alt="photo16" className="w-[255px] h-[60px]" />
                        </div>
                        </div>
                     </div>

                    
                    
                     <div className="w-[1440px] h-[433] ml-[100px] lg:flex mt-40 lg:items-center  lg:ml-52 ">
                           <div>
                             <Image src={photo17} alt="photo17" className=" w-[600px] h-[500px] lg:w-[441px] lg:h-[433px]" />
                           </div>

                           <div  className="w-[661px] h-[308px] gap-[32px]">
                            <h1 className="w-[601px] h-[88px] font-semibold text-gray-600 text-[36px]">How to design your site footer like we did</h1>
                            <p className="lg:w-[601px] w-[600px] h-[120px] font-normal text-gray-600 text-[20px] lg:text-[14px] mt-8">Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.</p>
                            <button className="w-[151px] h-[52px] rounded-sm mt-36 pt-[14px] pr-[32px] pb-[14px] pl-[32px] text-white bg-green-600">Learn More</button>
                            </div>
                            </div>

                         
                         
                         <div className="w-full h-[1100px] lg:h-[390px] bg-gray-100 pt-[32px] pr-[144px] pb-[32px] pl-[100px]  lg:pl-[144px] mt-52 lg:flex">
                           <div>
                             <Image src={photo18} alt="photo17" className=" w-[326px] h-[326px]" />
                          </div>
                          <div className="w-[400px]  lg:w-[748px] h-[324px] gap-[32px]  lg:ml-[100px]">
                            <p className="font-medium text-[20px] lg:text-[16px] mt-[24px] text-gray-600">Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.</p>
                            <h4 className="font-semibold text-[20px] mt-[20px] text-green-600">Tim Smith</h4>
                            <p className="font-normal text-[16px] mt-[24
                            px] text-gray-500">British Dragon Boat Racing Association</p>
                             <div className="flex mt-7 gap-7">
                            <Image src={photo2} alt="photo2" className="w-[48px] h-[48px]"/>
                            <Image src={photo3} alt="photo2" className="w-[48px] h-[48px]"/>
                            <Image src={photo4} alt="photo2" className="w-[48px] h-[48px]"/>
                            <Image src={photo5} alt="photo2" className="w-[48px] h-[48px]"/>
                            <Image src={photo6} alt="photo2" className="w-[48px] h-[48px]"/>
                            <Image src={photo7} alt="photo2" className="w-[48px] h-[48px]"/>
                            <p className="text-green-600 pt-4">Meet all customer </p>
                            </div>
                            </div>
                            </div>

                            <div className="w-[1440px] h-[506px] gap-[16px]">
                              <div className="w-[1110px] h-[124px] gap-[8px]">
                                <h2 className="w-[1110px] h-[44px] font-semibold mt-[44px]  text-[36px]  ml-[100px] lg:text-center lg:ml-[350px] text-gray-600">Caring is the new marketing</h2>
                                <p className="w-[628px] h-[72px] font-normal text-[20px] 
                                lg:text-[16px] mt-[24px] lg:text-center ml-[100px] lg:ml-[580px] text-gray-600">The Nexcent blog is the best place to read about the latest membership insights, trends and more. See whos joining the community, read about how our community are increasing their membership income and lots more.​</p>
                              </div>
                              <div className="  w-[1440px] h-[366px] ml-[200px] mt-32 lg:ml-[120px] lg:pr-[144px] lg:pl-[144px] lg:mt-10 lg:flex lg:justify-between">
                                <div>
                                  <Image src={photo19} alt="photo19" className="w-[368] h-[366px]" />
                                </div>

                                <div>
                                  <Image src={photo20} alt="photo20" className="w-[368] h-[366px]" />
                                </div>

                                <div>
                                  <Image src={photo21} alt="photo21" className="w-[368] h-[366px]" />
                                </div>

                              </div>
                              </div>
         
                              <div className="bg-gray-100 w-dvw mt-[900px] lg:mt-11 h-[400px] pt-[32px] pb-[32px]
                              gap-[32px]">
                                <div>
                                  <h1 className="w-[887px] h-[152px] font-semibold  mt-[76px] text-[34px] ml-[20px] lg:ml-[450px] lg:text-[64px] lg:text-center">Pellentesque suscipit fringilla libero eu.</h1>
                                  <button className="w-[178px] h-[52px] rounded-sm pt-[14px] pr-[32px] pb-[14px] pl-[32px] ml-[300px] lg:ml-[790px] mt-8 bg-green-600 text-white">Get a demo</button>
                                  </div>
                                </div>

                                
                                    <div className="mt-28">
                                    <Image src={photo22} alt="footer" className="w-full lg:w-[1800px] lg:h-[300px]"/>
                                    </div>
                                  
    </div>
  )
}
