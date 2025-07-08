import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';

import LightGallery from 'lightgallery/react';

// Import LightGallery styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

// Import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

// Import images
import img1 from '../../assets/kshipra_guest_homes/img_1.jpeg';
import img2 from '../../assets/kshipra_guest_homes/img_17.jpeg';
import img3 from '../../assets/kshipra_guest_homes/img_19.jpeg';
import img4 from '../../assets/kshipra_guest_homes/img_6.jpeg';
import img5 from '../../assets/kshipra_guest_homes/img_12.jpeg';
import img6 from '../../assets/kshipra_guest_homes/img_11.jpeg';
import img7 from '../../assets/kshipra_guest_homes/img_13.jpeg';
import img8 from '../../assets/kshipra_guest_homes/img_18.jpeg';
import img9 from '../../assets/kshipra_guest_homes/img_9.jpeg';
import img10 from '../../assets/kshipra_guest_homes/img_20.jpeg';
import img12 from '../../assets/kshipra_guest_homes/img_15.jpeg';
import img13 from '../../assets/kshipra_guest_homes/img_2.jpeg';
import img14 from '../../assets/kshipra_guest_homes/img_3.jpeg';
import img15 from '../../assets/kshipra_guest_homes/img_5.jpeg';
import img16 from '../../assets/kshipra_guest_homes/img_4.jpeg';
import img18 from '../../assets/kshipra_guest_homes/img_14.jpeg';
import img17 from '../../assets/kshipra_guest_homes/img_16.jpeg';
import img19 from '../../assets/kshipra_guest_homes/img_17.jpeg';


export function Gallery() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img12, img13, img14, img15, img16, img17, img18, img19];

  // Group images differently based on screen size
  const mobileGroupedImages = [];
  for (let i = 0; i < images.length; i += 2) {
    mobileGroupedImages.push(images.slice(i, i + 2));
  }

  const desktopGroupedImages = [];
  for (let i = 0; i < images.length; i += 6) {
    desktopGroupedImages.push(images.slice(i, i + 6));
  }

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const groupedImages = isMobile ? mobileGroupedImages : desktopGroupedImages;

  // LightGallery reference
  const lightboxRef = useRef(null);

  return (
    <div className="container mx-auto px-4 md:px-60 bg-back py-8">
      <h1 className="text-center text-3xl font-light mb-8 text-white">GALLERY</h1>

      {/* LightGallery Wrapper */}
      <LightGallery
        onInit={(ref) => (lightboxRef.current = ref)}
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        selector=".lightbox-item"  // Ensures it selects only valid items
        licenseKey="0000-0000-000-0000" // Suppress warning
      >
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation
          modules={[Pagination, Navigation]}
          className="mySwiper"
        >
          {groupedImages.map((group, index) => (
            <SwiperSlide key={index}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-back">
                {group.map((src, imgIndex) => (
                  <a key={imgIndex} href={src} data-src={src} className="lightbox-item">
                    <div className="aspect-square overflow-hidden rounded-lg">
                      <img
                        src={src}
                        alt={`Gallery ${imgIndex + 1}`}
                        className="w-full h-full object-cover cursor-pointer"
                      />
                    </div>
                  </a>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </LightGallery>
    </div >
  );
}
