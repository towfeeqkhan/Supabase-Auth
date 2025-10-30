import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { supabase } from "../supabaseClient";

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);

  // Sign up
  const signUpUser = async (email, password) => {
    const lowerCaseEmail = email.toLowerCase();

    const { data, error } = await supabase.auth.signUp({
      email: lowerCaseEmail,
      password: password,
    });

    if (error) {
      console.log("Something went wrong", error.message);
      return { success: false, error: error.message };
    } else {
      return { success: true, data };
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  // Sign out
  const signOutUser = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.log("Sign out error:", error.message);
      return { success: false, error: error.message };
    } else {
      console.log("Sign out successful");
      return { success: true };
    }
  };

  return (
    <AuthContext.Provider value={{ session, signUpUser, signOutUser }}>
      {children}
    </AuthContext.Provider>
  );
};
