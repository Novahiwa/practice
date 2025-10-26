import React from 'react';
import bannerImage from "../assets/—Pngtree—cloud computing server digital data_20945994.png"

const Banner = () => {
  return (
    <div>
      <div className="p-10 flex flex-col md:flex-row gap-4 justify-around  items-center md:my-24">
        <img src={bannerImage} alt="banner image" width={400} /> <p className='md:w-150 md:text-2xl'>At Word Associator, we specialize in providing tailored web, app and software solutions to developers and businesses in Malawi. Our mission is to help you launch and grow your digital presence with ease. Whether you're looking to establish a new website, develop a custom application, or enhance your existing digital platforms, we offer the expertise and support you need to succeed in the digital world.</p>
      </div>
    </div>
  );
}

export default Banner;
