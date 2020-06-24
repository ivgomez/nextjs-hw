import Head from "next/head";
import Layout from "../components/layout";
import Users from "../components/users";
import fetch from "isomorphic-fetch";

const Index = (props) => {
  return (
    <Layout>
      <Head>
        <title>Index-page</title>
      </Head>
      <h1>Next data from API</h1>
      <Users users={props.users} />
    </Layout>
  );
};

Index.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users`);
  const resJSON = await res.json();
  return { users: resJSON.data };
};

export default Index;
