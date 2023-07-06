import User from '@/models/User';
import connect from '@/utils/db';
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/Google';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
    }),
    CredentialsProvider({
      id: 'credentials',
      name: 'Credentials',
      async authorize(credentials) {
        console.log(credentials);
        await connect();

        try {
          // check if the user exists in the database
          const userExist = await User.findOne({ email: credentials.email });

          if (userExist) {
            // check password
            const passCompare = await bcrypt.compare(credentials.password, userExist.password);

            if (passCompare) {
              return userExist;
            } else {
              throw new Error('wrong credentials');
            }
          } else {
            throw new Error('user not found');
          }
        } catch (err) {
          throw new Error(err);
        }
      },
    }),
  ],
  pages: {
    error: 'dashboard/login',
  },
});

export { handler as POST, handler as GET};
