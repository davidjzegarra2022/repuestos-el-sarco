/* Configuración pública de Supabase.
   La URL y la clave publicable NO son secretas: cualquier cliente que hable
   con esta base de datos las necesita. Lo que protege los datos es Row Level
   Security (RLS) en el servidor, que exige una sesión de usuario autenticado
   para leer o escribir en las tablas. Nunca pongas aquí la "service_role key". */
const SUPABASE_URL = "https://dkyqrmdmvonisozknmen.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_B5Suy9GrOkAuhwlCPN1upg_5psg3Ek4";
