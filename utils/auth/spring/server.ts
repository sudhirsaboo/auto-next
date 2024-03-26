
// Define a function to create a Supabase client for server-side operations
// The function takes a cookie store created with next/headers cookies as an argument
export const createClient = () => {
  return {
    auth :{
      resetPasswordForEmail:  async(email, redirectTo) =>{ return { data: {user:{}}, error:{message:""}}},
      signUp:  async({email, password, options}) =>{ return { data: {user:{identities:[]},session:{}}, error:{message:""}}},
      updateUser:  async(user, options?) =>{ return { data: { user:{}}, error:{message:""}}},
      signInWithOtp:  async(user, options?) =>{ return { data: {}, error:{message:""}}},
      signOut:  async() =>{ return { data: {}, error:{message:""}}},
      signInWithPassword:  async(config) =>{ return { data: { user:{}}, error:{message:""}}},

    }
  }
};
