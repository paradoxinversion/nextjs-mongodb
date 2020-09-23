import { connectToDatabase } from "../utils/mongodb";

export default function HomePage() {
  return <div>Welcome to Next.js!</div>;
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
