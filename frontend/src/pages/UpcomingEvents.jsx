// import React from "react";
// import "../styles/UpcomingEvents.css";

// const UpcomingEvents = () => {
//   return (
//     <div className="events-container">
//       <h1 className="events-heading">Elevate Your Consiousness</h1>
//       <div className="events-content">
//         <div className="events-text">
//           <p className="events-description">
//             Join us for a series of transformative events and workshops that
//             will guide you towards a deeper understanding of yourself and the
//             universe. From meditation retreats to thought-provoking lectures,
//             our events are designed to unlock your full potential and set you on
//             the path to enlightenment.
//           </p>
//         </div>
//         <div className="events-details">
//           <div className="events-image">
//             <img src="path/to/your/image.jpg" alt="Event" />
//           </div>
//           <div className="events-more-text">
//             <p>
//               We have a variety of events lined up including workshops, guest
//               lectures, and networking opportunities. Don't miss out on the
//               chance to be a part of our vibrant community and enhance your
//               skills.
//             </p>
//             <button className="home-button">View All Events</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UpcomingEvents;
import React, { useState } from "react";
import "../styles/UpcomingEvents.css";
import Modal from "./Modal";

const UpcomingEvents = () => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="events-container">
      <h1 className="events-heading">Elevate Your Consciousness</h1>
      <div className="events-content">
        <div className="events-text">
          <p className="events-description">
            Join us for a series of transformative events and workshops that
            will guide you towards a deeper understanding of yourself and the
            universe. From meditation retreats to thought-provoking lectures,
            our events are designed to unlock your full potential and set you on
            the path to enlightenment.
          </p>
        </div>
        <div className="events-details">
          {/* <div className="events-image">
            <img src="path/to/your/image.jpg" alt="Event" />
          </div> */}
          <div className="events-more-text">
            <p>
              We have a variety of events lined up including workshops, guest
              lectures, and networking opportunities. Don't miss out on the
              chance to be a part of our vibrant community and enhance your
              skills.
            </p>
            <button className="home-button" onClick={handleOpenModal}>
              View All Events
            </button>
          </div>
        </div>
      </div>
      <Modal show={showModal} handleClose={handleCloseModal}>
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#c7a551]">
            Upcoming Epsilon Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-[#01162c] rounded-lg overflow-hidden">
              <div className="h-48 bg-[url('/epsilon-event-1.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#c7a551]">
                  Epsilon Enlightenment Retreat
                </h3>
                <p className="text-lg text-[#b3b3b3]">
                  Join us for a transformative weekend of meditation, teachings,
                  and spiritual exploration in the serene Epsilon Sanctuary.
                </p>
                <div className="mt-4">
                  <button className="px-4 py-2 text-sm font-medium rounded-md border-[#c7a551] text-[#c7a551] hover:bg-[#c7a551] hover:text-[#1d4044]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#01162c] rounded-lg overflow-hidden">
              <div className="h-48 bg-[url('/epsilon-event-2.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#c7a551]">
                  Epsilon Prosperity Workshop
                </h3>
                <p className="text-lg text-[#b3b3b3]">
                  Discover the secrets to manifesting abundance and financial
                  freedom through the Epsilon principles of enlightenment.
                </p>
                <div className="mt-4">
                  <button className="px-4 py-2 text-sm font-medium rounded-md border-[#c7a551] text-[#c7a551] hover:bg-[#c7a551] hover:text-[#1d4044]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
            <div className="bg-[#01162c] rounded-lg overflow-hidden">
              <div className="h-48 bg-[url('/epsilon-event-3.jpg')] bg-cover bg-center"></div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2 text-[#c7a551]">
                  Epsilon Mystical Retreat
                </h3>
                <p className="text-lg text-[#b3b3b3]">
                  Embark on a journey of self-discovery and explore the mystical
                  realms of the Epsilon teachings in this exclusive retreat.
                </p>
                <div className="mt-4">
                  <button className="px-4 py-2 text-sm font-medium rounded-md border-[#c7a551] text-[#c7a551] hover:bg-[#c7a551] hover:text-[#1d4044]">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>

      {/* <Modal show={showModal} handleClose={handleCloseModal}>
        <div className="container mx-auto px-8">
          <h2 className="text-3xl font-bold mb-8 text-[#c7a551]">
            Upcoming Epsilon Events
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <div key={event.id} className="bg-[#2a5257] rounded-lg overflow-hidden">
                <div className="h-48 bg-cover bg-center" style={{ backgroundImage: `url(${event.imageUrl})` }}></div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold mb-2 text-[#c7a551]">
                    {event.title}
                  </h3>
                  <p className="text-lg text-[#b3b3b3]">
                    {event.description}
                  </p>
                  <div className="mt-4">
                    <button className="px-4 py-2 text-sm font-medium rounded-md border-[#c7a551] text-[#c7a551] hover:bg-[#c7a551] hover:text-[#1d4044]">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Modal> */}
    </div>
  );
};

export default UpcomingEvents;
