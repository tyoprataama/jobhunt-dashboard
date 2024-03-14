import  bcrypt  from 'bcryptjs';
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const hashPassword = async(password: string) => {
  const hashedPassword = await bcrypt.hash(password, 8);

  return hashedPassword;
}

export const comparePassword = async (password:string, hashedPassword:string) => {
  const comparePass = await bcrypt.compare(password, hashedPassword);
  return comparePass;
}

export async function fetcher<JSON = any>(input: RequestInfo, init?: RequestInit): Promise<JSON> {
  const res = await fetch(input, init)
  return res.json() as Promise<JSON>
  
}