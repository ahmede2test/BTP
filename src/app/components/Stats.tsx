export function Stats() {
  const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "25", label: "Years Experience" },
    { value: "1M+", label: "Square Meters Built" },
    { value: "98%", label: "Client Satisfaction" }
  ];

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-5xl md:text-6xl mb-2 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-gray-400 text-lg">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
