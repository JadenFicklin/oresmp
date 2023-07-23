import { Link } from 'react-router-dom';
import key from '../assets/key.png';
import { BsDiscord } from 'react-icons/bs';
import { useState } from 'react';
import c from 'classnames';

function Nav() {
    const [menu, setMenu] = useState(false);
    const [home, setHome] = useState(false);
    const [forums, setForums] = useState(false);
    const [staff, setStaff] = useState(false);
    const [rules, setRules] = useState(false);

    return (
        <div>
            <div className="w-full h-[56px] bg-black opacity-90 border-b-[2px] border-white">
                <div className=" w-10/12  h-full mx-auto relative">
                    <div className=" w-[200px] md:w-[400px]  h-full absolute left-0 text-[#FFD798] grid grid-cols-5 content-center">
                        <p>
                            <p className="hidden md:block ">Discord</p>{' '}
                            <BsDiscord className="md:hidden mt-[3px]" />
                        </p>
                        <p className=" col-span-4 md:col-span-3 text-[12px] md:text-[18px]">
                            IP: play.oresmp.net
                        </p>
                    </div>
                    <div className=" w-[100px] md:w-[200px] h-full absolute right-0">
                        <p className="text-white md:text-[18px] flex justify-end items-center h-full text-[12px]  ">
                            Login or Sign Up
                            <img
                                src={key}
                                alt="login key"
                                className="w-[33px] h-[25px] ml-3 hidden md:block"
                            />
                        </p>
                    </div>
                </div>
            </div>
            <div className="hidden md:block text-[23px] w-10/12 mx-auto text-white  mt-10">
                <div className="flex">
                    <Link className="mr-10" to="/">
                        <p
                            onMouseEnter={() => setHome(true)}
                            onMouseLeave={() => setHome(false)}>
                            Home
                            <div
                                className={c(
                                    'mt-1 w-0 h-[3px] bg-white duration-300',
                                    home && 'w-full'
                                )}></div>
                        </p>
                    </Link>
                    <Link className="mr-10" to="/forums">
                        <p
                            onMouseEnter={() => setForums(true)}
                            onMouseLeave={() => setForums(false)}>
                            Forums
                            <div
                                className={c(
                                    'mt-1 w-0 h-[3px] bg-white duration-300',
                                    forums && 'w-full'
                                )}></div>
                        </p>
                    </Link>
                    <Link className="mr-10" to="/staff">
                        <p
                            onMouseEnter={() => setStaff(true)}
                            onMouseLeave={() => setStaff(false)}>
                            Staff
                            <div
                                className={c(
                                    'mt-1 w-0 h-[3px] bg-white duration-300',
                                    staff && 'w-full'
                                )}></div>
                        </p>
                    </Link>
                    <Link className="mr-10" to="/rules">
                        <p
                            onMouseEnter={() => setRules(true)}
                            onMouseLeave={() => setRules(false)}>
                            Rules
                            <div
                                className={c(
                                    'mt-1 w-0 h-[3px] bg-white duration-300',
                                    rules && 'w-full'
                                )}></div>
                        </p>
                    </Link>
                </div>
            </div>
            <div className="md:hidden w-[137px] h-[64px] text-white bg-[#d73ee8] flex items-center rounded-[10px] border-t-4 border-[#EC6BFB] cursor-pointer hover:-mt-1 duration-150 mt-3 -mb-3 ml-9">
                <div
                    className="w-10/12 grid grid-cols-2 h-4/6 "
                    onClick={() => setMenu(true)}>
                    <div className="w-full h-full grid place-content-center">
                        <div className="flex flex-col place-content-between w-[30px] h-[20px]">
                            <div className="w-full h-[3px] bg-white"></div>
                            <div className="w-full h-[3px] bg-white"></div>
                            <div className="w-full h-[3px] bg-white"></div>
                        </div>
                    </div>
                    <div className="text-[20px] flex self-center">MENU</div>
                </div>
            </div>
            {menu && (
                <div
                    className="w-full h-screen bg-[#402058] absolute top-0 left-0"
                    onClick={() => setMenu(false)}>
                    <div className="text-white text-[21px] ml-10 pt-10">
                        <h2 className="text-[26px] ml-8 mt-6">MENU</h2>
                        <div
                            className="w-[58px] h-[58px] bg-[#ee184b] border-[#ff688b] border-t-4 text-[40px] rounded-full grid place-content-center pb-[13px] absolute top-[50px] right-[60px] cursor-pointer"
                            onClick={() => setMenu(false)}>
                            x
                        </div>
                        <div className="grid grid-rows-4 mt-3">
                            <Link
                                className="m-3 w-10/12 pl-5 rounded-[10px] h-full flex items-center hover:bg-[#c39ce2] active-[#D73EE8]"
                                to="/">
                                Home
                            </Link>
                            <Link
                                className="m-3 w-10/12 pl-5 rounded-[10px] h-full flex items-center hover:bg-[#c39ce2] active-[#D73EE8]"
                                to="/forums">
                                Forums
                            </Link>
                            <Link
                                className="m-3 w-10/12 pl-5 rounded-[10px] h-full flex items-center hover:bg-[#c39ce2] active-[#D73EE8]"
                                to="/staff">
                                Staff
                            </Link>
                            <Link
                                className="m-3 w-10/12 pl-5 rounded-[10px] h-full flex items-center hover:bg-[#c39ce2] active-[#D73EE8]"
                                to="/rules">
                                Rules
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Nav;
