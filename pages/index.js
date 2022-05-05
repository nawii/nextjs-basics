import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <Link href="/product">
        <a>product</a>
      </Link>
      <h1>Home Pge</h1>
    </div>
  );
};

export default Home;
