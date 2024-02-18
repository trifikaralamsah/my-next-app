export default function AdminDashboardLayout({
  children,
  analytics,
  payments,
  products,
}: {
  children: React.ReactNode;
  analytics: React.ReactNode;
  payments: React.ReactNode;
  products: React.ReactNode;
}) {
  return (
    <div>
      <div>{children}</div>
      <div className="grid grid-cols-2 gap-4 mt-5 h-96">
        {analytics}
        {payments}
      </div>
      <div className="flex w-full justify-center mt-3">{products}</div>
    </div>
  );
}
