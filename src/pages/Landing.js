import React from 'react';
import logo from '../assets/oresmp.png';
import sword from '../assets/sword.png';
import pick from '../assets/pick.png';
import axe from '../assets/axe.png';
import shovel from '../assets/shovel.png';
import torch from '../assets/torch.png';
import gradient from '../assets/gradient.png';
import timbo from '../assets/timbo.png';
import clock from '../assets/clock.png';

function Landing() {
    return (
        <>
            <div className="w-full h-[320px] mt-16 flex justify-center relative scale-[.6] sm:scale-75 md:scale-100">
                <div
                    style={{ backgroundImage: `url(${logo})` }}
                    className="w-[420px] h-[320px] z-20"></div>
                <img
                    src={sword}
                    alt="sword"
                    className="w-[176px] h-[176px] absolute bottom-0 transform scale-x-[-1] -rotate-[30deg] -ml-[430px] mb-[23px]"
                />
                <img
                    src={pick}
                    alt="pickaxe"
                    className="w-[176px] h-[176px] absolute bottom-0 transform scale-x-[-1] -rotate-[0deg] -ml-[400px] mb-[100px]"
                />
                <img
                    src={shovel}
                    alt="shovel"
                    className="w-[176px] h-[176px] absolute bottom-0 rotate-[30deg] -mr-[430px] mb-[23px]"
                />
                <img
                    src={axe}
                    alt="shovel"
                    className="w-[156px] h-[156px] absolute bottom-0 rotate-[0deg] -mr-[390px] mb-[100px]"
                />
            </div>
            <div className="w-10/12 mx-auto h-[128px] bg-[#381862] rounded-[9px] opacity-[88%] mt-9 relative grid place-content-center">
                <img
                    src={torch}
                    alt="torch"
                    className="absolute left-0 w-[261px] h-[143px]"
                />
                <img
                    src={torch}
                    alt="torch"
                    className="absolute right-0 w-[261px] h-[143px] transform scale-x-[-1]"
                />
                <p className="w-8/12 mx-auto text-center text-white text-md md:w-full md:text-3xl">
                    Welcome to the ORE SMP Community
                </p>
            </div>
            <div className="w-10/12 mx-auto h-min mt-[40px] grid grid-cols-1 md:grid-cols-12 gap-[40px] grid-rows-2 md:grid-rows-1 mb-32">
                <div className="col-span-full md:col-span-9 h-full bg-[#381862]  rounded-[9px] opacity-[88%]">
                    <div className="w-full h-[175px] relative">
                        <p className="text-white md:text-[25px] text-[20px] p-6 pl-12">
                            Welcome to the Ore smp Website!
                        </p>
                        <div className="flex flex-wrap ml-12">
                            <img src={timbo} alt="timbo's profile picture" />
                            <p className=" w-[200px] h-[30px] flex flex-wrap mt-2 ml-4 text-[#C39CE2]">
                                Tiptow |{' '}
                                <span>
                                    <img
                                        src={clock}
                                        className="w-[24px] h-[24px] mx-2"
                                        alt="clock icon"
                                    />
                                </span>
                                Jul 22, 2023
                            </p>
                        </div>
                        <div className="hidden smlg:block w-[57px] h-full  absolute right-[57px] top-0 text-[#c39ce2] text-[42px]">
                            <div className="absolute top-4">22</div>
                            <div className="text-[26px] absolute top-16 left-1">
                                JUL
                            </div>
                        </div>
                    </div>
                    <img src={gradient} alt="gradient" className="w-full" />
                    <div className="w-full h-min text-[#C39CE2] px-12 md:text-[23px] text-[18px] xl:-mt-14 xl:mb-14 mt-0 mb-20">
                        Welcome to Ore SMP! <br></br> <br></br> This is a
                        content creator /personality server! We hope that each
                        of our members are active and make regular uploads!{' '}
                        <br></br> <br></br>Ok, but what's the twist?? This
                        server adds several new ores!! Each adds new weapons and
                        tools that have special abilities. Like swords that give
                        permanent effects to the player you kill with them! Or
                        an axe that breaks down a whole tree with one hit!{' '}
                        <br></br> <br></br>Glad you stopped by to check out Ore
                        SMP!
                    </div>
                </div>
                <div className="grid h-full grid-cols-2 grid-rows-1 gap-10 md:grid-cols-1 md:grid-rows-2 col-span-full md:col-span-3">
                    <div className="col-span-1 bg-[#381862]  rounded-[9px] opacity-[88%] max-h-[280px]"></div>
                    <div className="col-span-1 bg-[#381862]  rounded-[9px] opacity-[88%] max-h-[280px]"></div>
                </div>
            </div>
        </>
    );
}

export default Landing;
