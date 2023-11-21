import styles from "./testimonials.module.css";

const TestimonialSection = () => {
  const testimonials = [
    {
      id: 1,
      author: "John Doe",
      position: "Tech Enthusiast",
      quote:
        "TechnoMatic is my go-to place for all things computer parts. The collection service is fantastic, and the platform is user-friendly.",
    },
    {
      id: 2,
      author: "Jane Smith",
      position: "Professional Developer",
      quote:
        "As a professional in the tech industry, I appreciate the opportunity to showcase and sell my products on TechnoMatic. Great platform!",
    },
    {
      id: 3,
      author: "Sam Trader",
      position: "Computer Parts Trader",
      quote:
        "Being a trader, posting my products on TechnoMatic has expanded my reach. The community is supportive, and the process is seamless.",
    },
  ];

  return (
    <section className={`${styles.testimonial_section} bg-gray-100 py-16`}>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-10">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className={`${styles.testimonial_card} bg-white p-6 rounded-md shadow-md flex flex-col justify-between`}
            >
              <div className={`${styles.quote_content} flex`}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M0 12.5001V22.7858H10.2857V12.5001H3.4286C3.4286 8.71914 6.50478 5.64295 10.2857 5.64295V2.21436C4.61384 2.21436 0 6.82819 0 12.5001Z"
                    fill="#3A4F39"
                  />
                  <path
                    d="M24 5.64295V2.21436C18.3281 2.21436 13.7143 6.82819 13.7143 12.5001V22.7858H24V12.5001H17.1429C17.1429 8.71914 20.219 5.64295 24 5.64295Z"
                    fill="#3A4F39"
                  />
                </svg>
                <p className="text-gray-600 mb-4 mx-2">{testimonial.quote}</p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="25"
                  viewBox="0 0 24 25"
                  fill="none"
                >
                  <path
                    d="M13.7143 2.21436V12.5001H20.5714C20.5714 16.281 17.4952 19.3572 13.7143 19.3572V22.7858C19.3862 22.7858 24 18.172 24 12.5001V2.21436H13.7143Z"
                    fill="#3A4F39"
                  />
                  <path
                    d="M0 12.5001H6.85713C6.85713 16.281 3.78095 19.3572 0 19.3572V22.7858C5.67189 22.7858 10.2857 18.172 10.2857 12.5001V2.21436H0V12.5001Z"
                    fill="#3A4F39"
                  />
                </svg>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://firebasestorage.googleapis.com/v0/b/iti-final-project-9831b.appspot.com/o/images%2Fman.png?alt=media&token=8cf8a573-a521-4a06-a55b-95ceed219259"
                    alt={`Portrait of ${testimonial.author}`}
                  />
                </div>
                <div className="ml-4">
                  <div className="text-sm font-medium text-gray-800">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-gray-800 font-bold">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
