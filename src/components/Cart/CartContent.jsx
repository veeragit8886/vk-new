import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faYoutube,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";

const CartContent = () => {

  return (
<>
    <div className='text-lg my-16'>
        <p>About</p>
        <p>IT Management</p>
        <p>Hep Center</p>
        <p>Protfolio</p>
        <p>Blog</p>
    </div>
    <div className='my-16'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi earum quam assumenda soluta, mollitia repellendus aliquam vitae atque minima illum aspernatur magnam quasi molestiae cumque officia omnis provident dolore veritatis.</p>
    </div>
    <div className='my-16'>
        <h1>Contact</h1>
        <p>55 Main Street, 2nd Block</p>
        <p>Malborne, Australia</p>
        <p>support@wiatech.com</p>
        <p>+880 (123) 456 88</p>
    </div>
    <div className='my-16'>
                  <div className="space-x-4  flex">
                    <span className="flex justify-center items-center w-8 h-8   rounded-full text-white hover:bg-orange-300  group bg-blue-700 duration-100">
                      <FontAwesomeIcon
                        icon={faFacebookF}
                        className="group-hover:text-white "
                      />
                    </span>
                    <span className="flex justify-center items-center w-8 h-8   rounded-full text-white hover:bg-orange-300  group bg-blue-700 duration-100">
                      <FontAwesomeIcon
                        icon={faLinkedinIn}
                        className="group-hover:text-white "
                      />
                    </span>
                    <span className="flex justify-center items-center w-8 h-8  rounded-full text-white hover:bg-orange-300  group bg-blue-700 duration-100">
                      <FontAwesomeIcon
                        icon={faYoutube}
                        className="group-hover:text-white "
                      />
                    </span>
                    <span className="flex justify-center items-center w-8 h-8   rounded-full text-white  hover:bg-orange-300 group bg-blue-700 duration-100">
                      <FontAwesomeIcon
                        icon={faXTwitter}
                        className="group-hover:text-white  "
                      />
                    </span>
                  </div>
    </div>
</>
  )
}

export default CartContent