import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>Welcome to my Blog</h1>
      <div className="row row-cols-3">
        <BlogPostCard />
        <DynamicBlogPostCard title="My First Blog Post" desc="description" />
      </div>
      <div>
        <Counter />
      </div>
      <div>
        <Profile />
      </div>
    </div>
  );
}

export default App;

function BlogPostCard() {
  return (
    <div className="card">
      <h2>My First Blog Post</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti maiores eum dignissimos amet officiis saepe. Repudiandae, voluptates earum. Officia ratione quisquam
        repudiandae. Suscipit placeat temporibus similique beatae nesciunt natus quae.
      </p>
      <a href="/blog-post">Read More</a>
    </div>
  );
}

function DynamicBlogPostCard(props) {
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <p>{props.desc}</p>
      <a href={props.link}>Read More</a>
    </div>
  );
}

function Counter() {
  const [count, setCount] = useState(0);
  return (
    <h1>
      <button className="btn btn-primary" onClick={() => setCount(count - 1)}>
        -
      </button>
      <span>{count}</span>
      <button className="btn btn-primary" onClick={() => setCount(count + 1)}>
        +
      </button>
    </h1>
  );
}

function Profile() {
  const user = {
    firstName: "Katherine",
    lastName: "Johnson",
    profilePic: "https://i.imgur.com/MK3eW3Am.jpg",
  };

  return (
    <div>
      <h2>
        {user.firstName} {user.lastName}
      </h2>
      <img src={user.profilePic} />
    </div>
  );
}
