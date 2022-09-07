import { User } from 'firebase/auth';
import { createContext, useContext } from 'react';

const AuthContext = createContext({} as { user: User | null });

type Props = {
	children: React.ReactNode;
	value: {
		user: User | null;
	};
};

export function AuthProvider({ children, value }: Props) {
	return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuthContext() {
	return useContext(AuthContext);
}
