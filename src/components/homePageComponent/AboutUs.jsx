import { TiTick } from "react-icons/ti";

export function AboutUs() {
  return (
    <div className="px-4 md:px-10 lg:px-20 xl:px-40">
      <div className="text-center font-sans">
        <h1 className="text-3xl  font-light mb-8">ABOUT US</h1>
        <div className="text-left font-light text-sm md:text-base lg:text-lg leading-relaxed">
          <p>
            Namaste 🙏🏻 from <strong>Kabana De Nature Resort</strong>, your tranquil escape located at
            <strong> V876+R82, Koti Mawga, Rajgarh, Himachal Pradesh</strong>. Nestled amidst apple orchards and pine
            forests, our resort offers a rejuvenating retreat into the lap of nature. Whether you’re a couple seeking
            romance, a family looking for bonding time, or a solo traveler chasing peace—our scenic mountain-view
            cottages and warm hospitality promise a memorable stay.
          </p>
          <br />
          <p>
            With a blend of natural beauty and engaging activities, guests can unwind or explore as they choose.
            From morning jungle walks to adventure activities like Tyre Wall and Burma Bridge, every moment at Kabana
            De Nature is designed to reconnect you with nature and yourself.
          </p>
          <br />
          <div className="px-4 md:px-8 lg:px-10 pb-5">
            <div className="flex items-start mt-2">
              <TiTick className="text-green-500 mt-1" />
              <span className="ml-2">
                Complimentary guided jungle walks, in-house games & adventure activities.
              </span>
            </div>
            <div className="flex items-start mt-2">
              <TiTick className="text-green-500 mt-1" />
              <span className="ml-2">
                Meals as per plan, with F&B service from 08:30 am to 10:30 pm.
              </span>
            </div>
            <div className="flex items-start mt-2">
              <TiTick className="text-green-500 mt-1" />
              <span className="ml-2">
                In-room tea/coffee maker and thoughtfully designed accommodations.
              </span>
            </div>
            <div className="flex items-start mt-2">
              <TiTick className="text-green-500 mt-1" />
              <span className="ml-2">
                Kindly note: pets are not allowed on the premises.
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              <ul className="list-disc list-inside">
                <li>Apple orchards & pine forest walks</li>
                <li>Mountain view cottages</li>
                <li>Star-lit bonfire nights</li>
              </ul>
              <ul className="list-disc list-inside">
                <li>Local village hikes</li>
                <li>Photography & birdwatching spots</li>
                <li>Private outdoor seating</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
