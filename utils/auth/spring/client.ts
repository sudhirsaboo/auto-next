
// Define a function to create a Supabase client for server-side operations
// The function takes a cookie store created with next/headers cookies as an argument
export const createClient = () => {
  return {
    auth :{
      signInWithOAuth:  async(config) =>{ return { data: {user:{}}, error:{message:""}}},
   }
  }
};
