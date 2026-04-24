import { createContext, useContext, useState,useEffect, type ReactNode } from "react";
import type { UserDto } from "../types/user";
import Cookies from "js-cookie"
import type { ProfileDto } from "../types/Profile";
import { profileService } from "../services/profileService";

interface AuthContextType
{
    token: string | null;
    user: UserDto | null;
    profile:ProfileDto | null;
    login: (token: string, user: UserDto) => void;
    logout: () => void;
    setProfile:(profile:ProfileDto | null)=> void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode })
{
    // const [token, setToken] = useState<string | null>(localStorage.getItem("token"));
    const [token, setToken] = useState<string | null>(() => {
        return Cookies.get("token") || null;
    });

    // const [user, setUser] = useState<UserDto | null>(() =>
    // {
    //     const savedUser = localStorage.getItem("user");
    //     return savedUser ? JSON.parse(savedUser) : null;
    // });
    const [user, setUser] = useState<UserDto | null>(() => {
        const savedUser = Cookies.get("user");
        try {
            return savedUser ? JSON.parse(savedUser) : null;
        } catch {
            return null;
        }
    });
    const [profile, setProfile] = useState<ProfileDto | null>(null);
    useEffect(() =>
    {
       const loadProfile = async ()=>
       {
        if(!token) return
        try
        {
            const data = await profileService.getMyProfile();
            setProfile(data)
        }
        catch
        {
            setProfile(null)
        }
        
       };
       loadProfile()
    }, [token]);

    const login = (token: string, user: UserDto) =>
    {
        // localStorage.setItem("token", token);
        // localStorage.setItem("user", JSON.stringify(user));
        Cookies.set("token", token, { expires: 7, secure: true, sameSite: 'strict' });
        Cookies.set("user", JSON.stringify(user), { expires: 7, secure: true, sameSite: 'strict' });

        setToken(token);
        setUser(user);
    };

    const logout = () =>
    {
        // localStorage.removeItem("token");
        // localStorage.removeItem("user");
        Cookies.remove("token");
        Cookies.remove("user");

        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ token, user,profile, login, logout,setProfile }}>
            {children}
        </AuthContext.Provider>
    );
}

export function useAuth()
{
    const context = useContext(AuthContext);
    if (!context) throw new Error("useAuth must be inside AuthProvider");
    return context;
}