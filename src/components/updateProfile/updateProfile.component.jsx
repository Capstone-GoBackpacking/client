import React from "react";
import avatar from "../../assets/images/avatar.png"
import {
    AiFillHome,
} from "react-icons/ai"
import { HiLocationMarker } from "react-icons/hi"
import { MdOutlineEmojiPeople } from "react-icons/md"
import {
    BsFillCartFill
} from "react-icons/bs"
const UpdateProfile = () => {
    return (
        <div className="flex h-screen">
            <nav className="flex flex-col px-10 pt-40 border-r-[1px] border-black">
                <a className="flex mb-4 items-center hover:bg-slate-300 rounded-lg px-3" href="">
                    <AiFillHome className="mr-2" />
                    Home
                </a>
                <a className="flex mb-4 items-center  hover:bg-slate-300 rounded-lg px-3" href="">
                    <MdOutlineEmojiPeople className="mr-2" />
                    Trip
                </a>
                <a className="flex mb-4 items-center  hover:bg-slate-300 rounded-lg px-3" href="">
                    <BsFillCartFill className="mr-2" />
                    Market
                </a>
                <a className="flex mb-4 items-center  hover:bg-slate-300 rounded-lg px-3" href="">
                    <HiLocationMarker className="mr-2" />
                    Locations
                </a>
            </nav>
            <div className="flex w-8/12 mx-auto mt-10 ">
                <div className="w-1/5 text-left border-solid border border-slate-300">
                    <ul>
                        <a href=""><li className=" hover:bg-slate-300 py-2 pl-5 ">Edit profile</li></a>
                        <a href=""><li className=" hover:bg-slate-300 py-2 pl-5">Change password</li></a>
                    </ul>
                </div>
                <div className="w-4/5 border-solid border border-slate-300">
                    <div className="flex justify-center mt-10 w-full">
                        <img
                            className="mr-10 w-16"
                            src={avatar}
                            alt="avatar-image"
                        />
                        <div className="inline-block">
                            <p>Viet Anh Le</p>
                            <a className="text-blue-500 font-bold" href="">Change profile photo</a>
                        </div>
                    </div>
                    <div className="flex mt-4 w-full">
                        <label for="Name" className="py-3 px-3 text-right w-3/12">
                            Name
                        </label>
                        <input
                            id="Name"
                            name="Name"
                            type="text"
                            required
                            className=" float-right mr-52 w-9/12 relative block outline-none rounded-md text-black py-3 px-3 bg-white border-2 placeholder:text-black focus:z-10 sm:text-sm sm:leading-6"
                            placeholder="Viet Anh Le"
                        />
                    </div>
                    <div className="flex mt-4">
                        <label for="Username" className="py-3 px-3 text-right w-3/12">
                            Username
                        </label>
                        <input
                            id="Username"
                            name="Username"
                            type="text"
                            required
                            className=" float-right mr-52 w-9/12 relative block outline-none rounded-md text-black py-3 px-3 bg-white border-2 placeholder:text-black focus:z-10 sm:text-sm sm:leading-6"
                            placeholder="Viet Anh Le"
                        />
                    </div>
                    <div className="flex mt-4">
                        <label for="email" className="py-3 px-3 text-right w-3/12">
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="text"
                            required
                            className=" float-right mr-52 w-9/12 relative block outline-none rounded-md text-black py-3 px-3 bg-[#F2F2F2] placeholder:text-black focus:z-10 sm:text-sm sm:leading-6"
                            placeholder="email"
                            value="vietanh@gmail.com"
                            disabled
                        />
                    </div>
                    <div className="flex mt-4 w-full">
                        <label for="phoneNumber" className="py-3 px-3 text-right w-3/12">
                            Phone number
                        </label>
                        <input
                            id="phoneNumber"
                            name="phoneNumber"
                            type="tel"
                            required
                            className="float-right mr-52 w-9/12 relative block m- outline-none rounded-md text-black py-3 px-3 bg-white border-2 placeholder-opacity-75 focus:z-10 sm:text-sm sm:leading-6"
                            placeholder="Phone number"
                            maxLength="10"
                        />
                    </div>
                    <div className="flex mt-4">
                        <label for="gender" className="py-3 px-3 text-right w-3/12">
                            Gender
                        </label>
                        <select className="float-right mr-52 w-9/12 relative block m- outline-none rounded-md text-black py-3 px-3 bg-white border-2 focus:z-10 sm:text-sm sm:leading-6" name="" id="">
                            <option value="Prefer not to stay">Prefer not to stay</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Custome">Custome</option>
                        </select>
                    </div>
                    <div className="flex mt-4">
                        <label for="birthday" className="py-3 px-3 text-right w-3/12">
                            Birthday
                        </label>
                        <input
                            id="date"
                            name="date"
                            type="text"
                            required
                            className="float-right w-3/12 relative block outline-none rounded-md text-black py-3 px-3 bg-white border-2 placeholder-opacity-75 focus:z-10 sm:text-sm sm:leading-6"
                            placeholder="Day: 10/12/13/..."
                            maxLength="2"
                        />
                        <input
                            id="month"
                            name="month"
                            type="text"
                            required
                            className="float-right w-3/12 relative block m- outline-none rounded-md text-black py-3 px-3 bg-white border-2 placeholder-opacity-75 focus:z-10 sm:text-sm sm:leading-6"
                            placeholder="Month: 01/02/03/..."
                            maxLength="2"
                        />
                        <input
                            id="year"
                            name="year"
                            type="text"
                            required
                            className="float-right mr-52 w-3/12 relative block m- outline-none rounded-md text-black py-3 px-3 bg-white border-2 placeholder-opacity-75 focus:z-10 sm:text-sm sm:leading-6"
                            placeholder="Year: 1995/1996/..."
                            maxLength="4"
                        />

                    </div>
                    <div className="flex justify-center mt-10 w-full">
                        <button type="submit" className="text-white bg-slate-400 hover:bg-slate-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-20 mr-1 px-5 py-2.5 text-center dark:bg-white dark:hover:bg--white dark:focus:ring--white">
                            Cancel
                        </button>
                        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-20 mk-1 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                            Save
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdateProfile
