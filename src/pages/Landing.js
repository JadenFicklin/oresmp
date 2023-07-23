import React from 'react';
import logo from '../assets/oresmp.png';
import sword from '../assets/sword.png';
import pick from '../assets/pick.png';
import axe from '../assets/axe.png';
import shovel from '../assets/shovel.png';

function Landing() {
    return (
        <>
            <div className="w-full h-[320px] mt-16 flex justify-center relative">
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
        </>
    );
}

export default Landing;
