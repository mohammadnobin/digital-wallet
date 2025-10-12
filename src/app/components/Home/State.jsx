export default function StatsSection() {
  const stats = [
    { value: "72K+", label: "Active Users" },
    { value: "45K+", label: "Daily Transactions" },
    { value: "99%", label: "Security Guaranteed" },
    { value: "500+", label: "Integrated Merchants" },
  ];

  return (
    <section className="bg-gray-50 py-20 px-6 ">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-sm p-8 flex flex-col md:flex-row justify-between items-center text-center gap-8">
        {stats.map((stat, index) => (
          <div key={index} className="flex flex-col items-center">
            <h2 className="text-4xl font-bold text-primary">{stat.value}</h2>
            <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
