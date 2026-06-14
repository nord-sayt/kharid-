// config.js — این فایل رو توی همه صفحه‌ها include کن
const SUPABASE_URL = "https://ffpzdohwrhdrdgtczzjc.supabase.co";
const SUPABASE_KEY = "sb_publishable_J8zWi6EO4xP3LxmsS2gXig_HY3aHycL";
const ADMIN_EMAIL = "admin@bazarno.ir"; // ایمیل ادمین خودت رو بذار

// Helper: get current user
async function getUser() {
  const SB = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);
  const { data: { user } } = await SB.auth.getUser();
  return user;
}
