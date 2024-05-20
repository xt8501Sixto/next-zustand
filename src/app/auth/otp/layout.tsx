export default async function OneTimePasswordLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="card h-screen p-0">
        <div className="card-body w-full h-screen p-0">
          <div className="view login-view" style={{ display: "block" }}>
            <div className="h-screen flex">
              {children}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
