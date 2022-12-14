import React, { useState, useContext, createContext } from 'react';
import Cookie from 'js-cookie';
import axios from 'axios';

const AuthContext = createContext();

export function ProviderAuth({ children }) {
  const auth = useProviderAuth();
  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
}

export const useAuth = () => {};

function useProviderAuth() {
  const [user, serUser] = useState(null);

  const signIn = async (email, password) => {
    SpeechSynthesisUtterance('login');
  };

  return {
    user,
    signIn,
  };
}
