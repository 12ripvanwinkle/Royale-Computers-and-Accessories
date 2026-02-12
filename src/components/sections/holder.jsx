import {
  Wrench,
  Clock,
  Cloud,
  ShieldCheck,
} from "lucide-react";

export default function CompanyHighlights() {
  return (
    <section className="w-full bg-black text-white py-28 px-6">
      <div className="max-w-6xl mx-auto">

        {/* === Top Feature Icons === */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 text-center">
          <Feature icon={<Wrench size={28} />} title="Device Setup" />
          <Feature icon={<Clock size={28} />} title="Urgent Fix" />
          <Feature icon={<Cloud size={28} />} title="Cloud Move" />
          <Feature icon={<ShieldCheck size={28} />} title="Cyber Audit" />
        </div>

        {/* Spacer */}
        <div className="my-24 border-t border-neutral-800" />

        {/* === Stats Section === */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-16 text-center">
          <Stat number="15+" label="Years Experience" />
          <Stat number="120+" label="Projects" />
          <Stat number="99%" label="Client Retention" />
        </div>

      </div>
    </section>
  );
}

/* ----------------------------- */
/* Sub Components */
/* ----------------------------- */

function Feature({ icon, title }) {
  return (
    <div className="flex flex-col items-center space-y-4">
      <div className="text-neutral-400">
        {icon}
      </div>
      <p className="text-white font-medium">
        {title}
      </p>
    </div>
  );
}

function Stat({ number, label }) {
  return (
    <div>
      <h3 className="text-5xl md:text-6xl font-semibold">
        {number}
      </h3>
      <p className="mt-3 text-gray-400">
        {label}
      </p>
    </div>
  );
}
