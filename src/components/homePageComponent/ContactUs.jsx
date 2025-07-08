import { PiMapPinAreaBold } from "react-icons/pi";
import { MdOutlineDoorSliding, MdOutlineContacts } from "react-icons/md";

// Social Media Icons
import { FaSquareInstagram, FaSquareYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

import ContactForm from "./ContactForm";

export function ContactUs() { 
  return (
    <>
      <div className="px-4 md:px-20 lg:px-40 py-10">
        <h1 className="text-center text-3xl font-light mb-8 text-white">
          Contact
        </h1>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Address Card */}
          <div className="bg-nav-fixed min-h-[250px] p-10 rounded-xl flex flex-col items-center justify-center text-white hover:bg-[#29b497]">
            <PiMapPinAreaBold className="h-14 w-20" />
            <h1 className="text-center text-3xl font-light mt-4">Address</h1>
            <div className="text-center mt-3">
              <p> The Kshipra Guest House	<br />Sunshine Towers, Bhatwal Talkies 3, Ashok Nagar, Madhav Nagar, Ujjain, Madhya Pradesh 456010</p>
            </div>
          </div>

          {/* Reservation Card */}
          <div className="bg-nav-fixed min-h-[250px] p-10 rounded-xl flex flex-col items-center justify-center text-white hover:bg-[#29b497]">
            <MdOutlineDoorSliding className="h-14 w-20" />
            <h1 className="text-center text-3xl font-light mt-4">
              Reservation
            </h1>
            <div className="text-center mt-3">
              <p>
                Call Us: <br />
                <a href="tel:+91 8878878086" className="text-[#white] hover:underline">
                  +91 8878878086
                </a>
                {/* <a href="tel:+917902915555" className="text-[#white] hover:underline">
       +91 9823728809
    </a> */}
                <br />

              </p>
            </div>
          </div>

          {/* Contact Card */}
          <div className="bg-nav-fixed min-h-[250px] p-10 rounded-xl flex flex-col items-center justify-center text-white hover:bg-[#29b497]">
            <MdOutlineContacts className="h-14 w-20" />
            <h1 className="text-center text-3xl font-light mt-4">Contact</h1>
            <div className="text-center mt-3">
              <p>
                Email Us: <br />
                <a href="mailto:kshipraguesthouse@gmail.com" className="text-[#white ] hover:underline">
                kshipraguesthouse@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        {/* <ContactForm /> */}

        {/* Social Media Icons */}
        {/* <div className="flex justify-center gap-6 mt-10">
          <a
            href="https://www.instagram.com/vocofarms.in/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareInstagram className="h-10 w-10 text-nav-fixed cursor-pointer hover:text-[#29b497]" />
          </a>

          <a
            href="https://www.facebook.com/people/Voco-Farms/61563327960670/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookSquare className="h-10 w-10 text-nav-fixed cursor-pointer hover:text-[#29b497]" />
          </a>

          <a
            href="https://www.youtube.com/channel/UCh9wKid3-F6ty_PSbMD48fQ"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaSquareYoutube className="h-10 w-10 text-nav-fixed cursor-pointer hover:text-[#29b497]" />
          </a>
        </div> */}

        {/* Google Map */}
      </div>
      <div className="w-full mt-4 px-4 pb-10">
        <iframe
          className="h-80 sm:h-96 md:h-[500px] lg:h-[600px] w-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d234739.50299935087!2d75.48319289453124!3d23.177325800000013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3963750061939871%3A0x9f1fadb6c05bdd85!2sKshipra%20guest%20house!5e0!3m2!1sen!2sin!4v1751868644261!5m2!1sen!2sin"
          loading="lazy"
          allowFullScreen

        ></iframe>
      </div>
    </>
  );
}