import { useRouter } from "next/router";
import fetch from "isomorphic-fetch";
import Layout from "../../components/layout";

const UserProfile = ({ user }) => {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <div className="col-md-6 offset-md-3">
        <div className="card">
          <div className="card-header text-center">
            <img src={user.avatar} alt="name" style={{ borderRadius: "50%" }} />
          </div>
          <div className="card-body text-center">
            <h3>
              {user.id}. {user.first_name} {user.last_name}
            </h3>
            <p>{user.email}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

UserProfile.getInitialProps = async (ctx) => {
  const res = await fetch(`https://reqres.in/api/users/${ctx.query.id}`);
  const resJSON = await res.json();
  return { user: resJSON.data };
};

export default UserProfile;
