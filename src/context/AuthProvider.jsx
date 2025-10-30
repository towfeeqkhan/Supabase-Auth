import { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { supabase } from "../supabaseClient";

export const AuthProvider = ({ children }) => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);

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

  // Sign in
  const signInUser = async (email, password) => {
    const lowerCaseEmail = email.toLowerCase();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: lowerCaseEmail,
        password: password,
      });
      if (error) {
        console.log("Sign in error", error.message);
        return { success: false, error: error.message };
      } else {
        console.log("Sign in success");
        return { success: true, data };
      }
    } catch (error) {
      console.log("an error occurred", error.message);
    }
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setLoading(false);
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
    <AuthContext.Provider
      value={{ session, signUpUser, signInUser, signOutUser, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};
