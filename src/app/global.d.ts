import {Database} from "@/types/database.types";

declare global {
    type DB = Database;
    type Event = Database['public']['Tables']['events']['Row'];
}