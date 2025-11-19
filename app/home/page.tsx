import { redirect } from "next/navigation";

import { createClient } from "@/lib/supabase/server";

export default async function HomePage() {
  const supabase = await createClient();

  const { data: claimsData, error: claimsError } = await supabase.auth.getClaims();
  if (claimsError || !claimsData?.claims) {
    redirect("/auth/login");
  }

  const { data: expenses, error: expensesError } = await supabase
    .from("expense")
    .select("*")
    .order("date", { ascending: true });

  if (expensesError) {
    console.error("Error fetching expenses:", expensesError);
  }

  return (
    <div>
      <h2 className="mb-4">Your expenses</h2>
      <pre className="text-xs font-mono p-3 rounded border max-h-64 overflow-auto mb-8">
        {JSON.stringify(expenses, null, 2)}
      </pre>

      <h2 className="mb-4">Your user details</h2>
      <pre className="text-xs font-mono p-3 rounded border max-h-32 overflow-auto">
        {JSON.stringify(claimsData.claims, null, 2)}
      </pre>
    </div>
  );
}
