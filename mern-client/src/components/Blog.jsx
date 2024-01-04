import React from 'react'

const blogs = [
  {
    title: 'The Art of Reading',
    content:
      'In this blog post, we explore the beauty and significance of reading. Discover how literature has the power to transport us to different worlds and broaden our perspectives.',
    imageUrl: 'https://imgs.search.brave.com/yrHb-NLU55tTC42kIXiyZyk1Lq0NaU_3GkoHe0Len9Y/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE1/OTcxNjcxMDA5NTct/MWRmYTExMGMxYzE0/P3E9ODAmdz0xMDAw/JmF1dG89Zm9ybWF0/JmZpdD1jcm9wJml4/bGliPXJiLTQuMC4z/Jml4aWQ9TTN3eE1q/QTNmREI4TUh4elpX/RnlZMmg4TVRsOGZI/SmxZV1JwYm1jbE1q/QmliMjlyZkdWdWZE/QjhmREI4Zkh3dw.jpeg',
  },
  {
    title: 'Must-Read Classics',
    content:
      'Explore the timeless classics that have captivated readers for generations. From Shakespearean plays to Dickensian novels, these literary masterpieces continue to leave a lasting impact.',
    imageUrl: 'https://imgs.search.brave.com/Hub5Bu-3ACBBW3YfWvtSrMzOW9UEZYw0DfxbbCUSiKk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9ibG9n/Z2luZy5vcmcvd3At/Y29udGVudC91cGxv/YWRzL2Jvb2stMTY1/OTcxN18xOTIwLTEw/MjR4NTg4LmpwZw',
  },
  {
    title: 'Book Recommendations for Summer',
    content:
      'As the sun shines bright, grab a book and head outdoors. We share our top book recommendations for a perfect summer reading list. From thrillers to romance, there is something for everyone!',
    imageUrl: 'https://imgs.search.brave.com/_nqg5OjN6KLsDkQ6XHnUduozstSEdxVetK5bw3k0gxs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Jlc2VydmUv/TEpJWmx6SGdRN1dQ/U2g1S1ZUQ0JfVHlw/ZXdyaXRlci5qcGc_/cT04MCZ3PTEwMDAm/YXV0bz1mb3JtYXQm/Zml0PWNyb3AmaXhs/aWI9cmItNC4wLjMm/aXhpZD1NM3d4TWpB/M2ZEQjhNSHh6WldG/eVkyaDhNakI4ZkdK/c2IyZDhaVzU4TUh4/OE1IeDhmREE9',
  },
];

const Blog = () => {
  return (
    <div className="bg-teal-100 min-h-screen py-8">
      <header className="text-black text-center py-8">
        <h1 className="text-3xl font-semibold">Explore Our Blogs</h1>
      </header>

      <section className="max-w-3xl mx-auto">
        {blogs.map((blog, index) => (
          <article key={index} className="mb-8 bg-white rounded-md shadow-md p-6">
            <img
              src={blog.imageUrl}
              alt={`Blog ${index + 1}`}
              className="w-full h-50 object-cover mb-4 rounded-md"
            />
            <h2 className="text-2xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600">{blog.content}</p>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Blog