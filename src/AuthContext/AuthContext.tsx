import { createContext, useContext, useState,useEffect, type ReactNode } from "react";
import type { UserDto } from "../types/user";
import Cookies from "js-cookie"
import type { ProfileDto } from "../types/Profile";
import { profileService } from "../services/profileService";

interface AuthContextType
{
    token: string | null;
    refreshToken?: string | null;
    isEmailVerified:boolean;
    user: UserDto | null;
    profile:ProfileDto | null;
    login: (token: string,isEmailVerified:boolean,refreshToken: string, user: UserDto) => void;
    logout: () => void;
    setProfile:(profile:ProfileDto | null)=> void;
    setIsEmailVerified: (verified:boolean)=> void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: ReactNode })
{
    const [token, setToken] = useState<string | null>(() => Cookies.get("token") || null);
    const [refreshToken, setRefreshToken] = useState<string | null>(() => Cookies.get("refreshToken") || null);
    const [isEmailVerified, setIsEmailVerifiedState] = useState<boolean>(() => {
        return Cookies.get("isEmailVerified") === "true";
    });
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
        if(!token)
        {
            setProfile(null);
            return;
        }
       const loadProfile = async ()=>
       {
        try
        {
            const data = await profileService.getMyProfile();
            setProfile(data)
        }
        catch(error:any)
        {
            
                console.warn("Failed to load profile",error.message)
        }
       };
       loadProfile()
    }, [token]);

    const login = (token: string,isEmailVerified:boolean, refreshToken: string,user: UserDto) =>
    {
       
        Cookies.set("token", token, { expires: 7, secure: true, sameSite: 'strict' });
        Cookies.set("refreshToken", refreshToken, { expires: 7, secure: true, sameSite: 'strict' });
        Cookies.set("user", JSON.stringify(user), { expires: 7, secure: true, sameSite: 'strict' });
        Cookies.set("isEmailVerified", String(isEmailVerified), { expires: 7, secure: true, sameSite: 'strict' });

        setToken(token);
        setRefreshToken(refreshToken);
        setUser(user);
        setIsEmailVerifiedState(isEmailVerified)
    };
    const setIsEmailVerified = (verified: boolean) => {
        Cookies.set("isEmailVerified", String(verified), { expires: 7, secure: true, sameSite: 'strict' });
        setIsEmailVerifiedState(verified);
    };

    const logout = () =>
    {
        
        Cookies.remove("token");
        Cookies.remove("refreshToken");
        Cookies.remove("user");
        Cookies.remove("isEmailVerified");

        setToken(null);
        setRefreshToken(null);
        setUser(null);
        setIsEmailVerifiedState(false);
    };

    return (
        <AuthContext.Provider value={{ token, refreshToken,isEmailVerified, user, profile, login, logout, setProfile,setIsEmailVerified }}>
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