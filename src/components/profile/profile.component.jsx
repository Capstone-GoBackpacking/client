import React from "react"
import avatar from "../../assets/images/avatar.png"
import image from "../../assets/images/image1.png"
import {
  AiFillHome,
  AiFillStar,
  AiFillShop,
  AiFillPlusCircle,
} from "react-icons/ai"
import { MdOutlineEmojiPeople } from "react-icons/md"
import {
  BsFillCartFill,
  BsFillCameraFill,
  BsSearch,
  BsFileBarGraph,
  BsFillPeopleFill,
} from "react-icons/bs"
import { HiLocationMarker } from "react-icons/hi"
import { FaCarSide } from "react-icons/fa"

const Profile = () => {
  return (
    <div className="flex h-screen">
      <nav className="flex flex-col px-10 pt-40 border-r-[1px] border-black">
        <a className="flex mb-4 items-center">
          <AiFillHome className="mr-2" />
          Home
        </a>
        <a className="flex mb-4 items-center">
          <MdOutlineEmojiPeople className="mr-2" />
          Trip
        </a>
        <a className="flex mb-4 items-center">
          <BsFillCartFill className="mr-2" />
          Market
        </a>
        <a className="flex mb-4 items-center">
          <HiLocationMarker className="mr-2" />
          Locations
        </a>
      </nav>
      <div className="flex flex-col flex-1 px-60">
        <div className="flex justify-center mt-14 border-b-[1px] border-black pb-10">
          <img
            className="mr-10"
            src={avatar}
            alt="avatar-image"
          />
          <div className="flex flex-col pt-4">
            <span className="mb-2">Viet Anh Le</span>
            <span className="mb-2">18/8/2001</span>
            <span className="mb-2 flex items-center">
              <AiFillStar className="text-[#FFFD53] mr-2" />
              10
            </span>
          </div>
          <div className="bg-[#6C63FF] w-60 h-8 text-white flex justify-center items-center ml-32 mt-3 rounded-md">
            Edit Profile
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center my-4">
            <a className="mr-10 flex items-center">
              <FaCarSide className="mr-2" />
              My trips
            </a>
            <a className="mr-10 flex items-center">
              <BsFillCameraFill className="mr-2" />
              Images
            </a>
            <a className="mr-10 flex items-center">
              <AiFillShop className="mr-2" />
              Shop
            </a>
          </div>
          <div className="flex items-center mb-10">
            <div className="mr-10 flex items-center">
              <AiFillPlusCircle className="mr-2" />
              <span>New</span>
            </div>
            <div className="flex items-center">
              <BsSearch className="mr-2" />
              <input
                className="w-80 h-8 px-2  rounded-md border-black border-solid border-[1px] outline-none"
                type="text"
              />
            </div>
          </div>
          <div className="flex">
            <div className="flex px-4 border-r-[1px] border-black">
              <div>
                <BsFileBarGraph className="mr-2 mt-1" />
              </div>
              <div className="flex flex-col">
                <a className="pb-2 flex items-center">
                  Status
                </a>
                <a className="pb-2">Enable</a>
                <a className="pb-2">Disable</a>
                <a className="pb-2">Pending</a>
              </div>
            </div>
            <div>
              <div className="ml-4 p-4 border-solid border-black border-[1px] rounded-md flex">
                <img
                  className="mr-4"
                  src={image}
                  alt="image-rv"
                />
                <div className="flex flex-col">
                  <h3>
                    From: Lien Chieu, Danang - To: Hoi An
                  </h3>
                  <span>
                    10:30 25/3/2023 - 12h00 30/3/2023
                  </span>
                  <span className="flex items-center">
                    <MdOutlineEmojiPeople className="mr-2" />
                    Viet Anh Le
                  </span>
                  <span className="flex items-center">
                    <BsFillPeopleFill className="mr-2" />
                    5/10
                  </span>
                  <div className="flex items-center justify-center mt-4 bg-[#71FF76] w-20 text-white rounded-md">
                    Enable
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Profile
