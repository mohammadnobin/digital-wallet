import MoneyTransfer from '../components/transfer';
import axios from "axios";
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth/next';


const page = async () => {
    const session=await getServerSession(authOptions);
      if (!session) {
    return <div>Please login to access this page</div>;
  }
  const email = session.user.email;
  const res = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/users/email?email=${encodeURIComponent(email)}`);
  const user = res.data;
    return (
        <div>
          <MoneyTransfer user={user} session={session} />
        </div>
    );
};

export default page;