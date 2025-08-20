import { Role } from "@client";

export interface UserPayload {
  id: string;
  email: string;
  role: Role;
}