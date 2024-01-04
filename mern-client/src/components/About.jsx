import React, { useState } from 'react'

const About = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    'https://picsum.photos/1600/900/?random'
  );

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setBackgroundImage(`https://picsum.photos/1600/900/?random&t=${Date.now()}`);
  //   },10000); // Change the image every 5 seconds (adjust as needed)

  //   return () => clearInterval(interval);
  // }, []);

  const backgroundStyles = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return  (
    <div style={backgroundStyles} className="bg-gray-100 h-screen mt-16">
      <header className="text-black text-center py-8">
        <h1 className="text-3xl font-semibold">About Your Book Store</h1>
      </header>

      <section className=" max-w-3xl mx-auto bg-white shadow-md shadow-slate-950 p-8 mt-8 rounded-lg ">
        <div className=" prose lg:prose-lg ">
          <p>
            Welcome to Your Book Store! We are passionate about providing a diverse collection
            of books for all readers. Whether you're a literature enthusiast, a student, or someone
            looking for a good read, we've got you covered.
          </p>

          <p>
            Our mission is to make the joy of reading accessible to everyone. With a carefully
            curated selection of books across genres, we aim to inspire and enrich the minds of our
            customers.
          </p>

          <p>
            At Your Book Store, we believe in the power of stories to connect, educate, and
            entertain. Our team is dedicated to creating an inviting space for book lovers and
            fostering a community that celebrates the magic of literature.
          </p>

          <p>
            Explore our online store, discover new titles, and embark on literary adventures with
            Your Book Store.
          </p>
        </div>
      </section>
    </div>
  )
}

export default About