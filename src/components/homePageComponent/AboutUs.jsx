import { TiTick } from "react-icons/ti";

export function AboutUs() {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="text-center text-white">
        <h1 className="text-3xl font-light mb-8">ABOUT US</h1>
        <div className="text-left font-light text-sm md:text-base lg:text-lg leading-relaxed">
          <p>
            Nestled in the spiritual heart of Ujjain, our guest house at Sunshine Towers,
            Bhatwal Talkies 3, Ashok Nagar, Madhav Nagar, offers a warm and peaceful
            retreat for pilgrims, tourists, and business travelers alike. With easy access
            to major temples and city landmarks, our property is designed to offer a
            comfortable and convenient stay in a tranquil setting.
            Each room is thoughtfully furnished to ensure a restful experience,
            complemented by attentive service and modern amenities.
          </p>
          <br />
          <div className="px-4 md:px-8 lg:px-10 pb-5">
            <div className="flex items-start mt-2">
              <TiTick className="text-green-500 mt-1" />
              <span className="ml-2">
                Your serene stay just minutes away from Mahakaleshwar Jyotirlinga.
              </span>
            </div>
            <div className="flex items-start mt-2">
              <TiTick className="text-green-500 mt-1" />
              <span className="ml-2">
                Ideal for families, solo travelers, and groups exploring Ujjain.
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              <ul className="list-disc list-inside">
                <li>Mahakaleshwar Temple (3 km)</li>
                <li>Ram Ghat</li>
                <li>Kal Bhairav Temple</li>
              </ul>
              <ul className="list-disc list-inside">
                <li>Harsiddhi Temple</li>
                <li>Sandipani Ashram</li>
                <li>Vikram University Area</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}
