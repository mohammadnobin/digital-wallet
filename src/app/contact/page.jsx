import React from 'react';
import { authOptions } from '@/lib/authOptions';
import { getServerSession } from 'next-auth/next';
const page = async ()  => {
        const session=await getServerSession(authOptions);
    return (
        <div>
            thsi is concut page
        </div>
    );
};

export default page;