import React from 'react';

const travels = [
  {
    place: "Munnar, Kerala",
    date: "January 2019",
    image: "/m.JPG",
    note: "Explored the lush green tea plantations and scenic viewpoints a peaceful escape into nature."
  },
  {
    place: "Ponmudi, Kerala",
    date: "January 2020",
    image: "/p.jpg",
    note: "A misty hill station experience with winding roads, golden valley views, and fresh mountain air."
  },
  {
    place: "Kayaking in Varkala",
    date: "December 2022",
    image: "/v.jpg",
    note: "Enjoyed an adrenaline-filled kayaking session surrounded by serene backwaters and cliffs."
  },
  {
    place: "Kalavantin Durg Trek, Maharashtra",
    date: "July 2023",
    image: "/k.webp",
    note: "An intense monsoon trek with steep climbs and breathtaking valley views from the summit."
  },
  {
    place: "Harishchandragad Trek",
    date: "June 2024",
    image: "/h.avif",
    note: "Conquered the rugged trails of Harishchandragad and witnessed the majestic Konkan Kada cliff."
  },

  {
  place: "Indiana Dunes National Park",
  date: "September 2024",
  image: "/I.jpg",
  note: "Trekking through sand dunes and lakeshore trails with stunning views of Lake Michigan — a perfect Midwest adventure."
}
];

const Travel = () => {
  return (
    <section id="travel" className="py-20 px-6 bg-gradient-to-br from-rose-50 via-orange-50 to-amber-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-rose-800 mb-12">Travel & Hiking</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {travels.map((trip, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <img
                src={trip.image}
                alt={trip.place}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-1">{trip.place}</h3>
                <p className="text-sm text-gray-500 italic mb-2">{trip.date}</p>
                <p className="text-gray-700 text-sm">{trip.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Travel;
