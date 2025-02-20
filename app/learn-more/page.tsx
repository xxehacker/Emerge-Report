import {
  Shield,
  FileText,
  Lock,
  MessageSquare,
  Search,
  Bell,
  AlertTriangle,
} from "lucide-react";

export default function LearnMore() {
  return (
    <div className="relative min-h-screen bg-gradient-to-b from-slate-950 to-black selection:bg-blue-500/20">
      {/* Animated Background */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(29,78,216,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.1),transparent_50%)]" />
      </div>

      <main className="relative">
        {/* Hero Section */}
        <div className="relative px-6 py-24 overflow-hidden border-b border-blue-900/30">
          <div className="absolute inset-0 bg-blue-600/5" />
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="flex-1 text-center md:text-left">
                <div className="inline-flex h-8 items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 text-sm text-blue-400">
                  <AlertTriangle className="h-4 w-4" />
                  Secure Cybercrime Reporting
                </div>

                <h1 className="mt-6 text-4xl md:text-6xl font-bold text-white">
                  Report Cybercrime
                  <span className="block mt-2 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
                    Securely & Anonymously
                  </span>
                </h1>

                <p className="mt-6 text-lg text-slate-300">
                  Your confidential portal for reporting cyber attacks, online
                  fraud, and digital threats. Help protect others while
                  maintaining your privacy.
                </p>

                <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                    <button className="inline-flex cursor-pointer h-12 items-center  justify-center gap-2 rounded-lg bg-blue-600 px-8 text-sm font-medium text-white transition-all hover:bg-red-500">
                      Submit Report
                      <Shield className="h-4 w-4" />
                    </button>
                    <button className="inline-flex h-12 items-center hover:bg-red-500 justify-center gap-2 rounded-lg border border-blue-500/20 bg-blue-500/10 px-8 text-sm font-medium text-blue-300 transition-all hover:bg-blue-500/20">
                      Check Status
                      <Search className="h-4 w-4" />
                    </button>
                </div>
              </div>

              {/* Stats Panel */}
              <div className="flex-1">
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "Reports Processed", value: "100+" },
                    { label: "Average Response", value: "< 12hrs" },
                    { label: "Resolution Rate", value: "94%" },
                    { label: "User Security", value: "100%" },
                  ].map((stat, i) => (
                    <div
                      key={i}
                      className="p-6 rounded-xl border border-blue-800/30 bg-slate-900/50 backdrop-blur-sm"
                    >
                      <div className="text-2xl font-bold text-white">
                        {stat.value}
                      </div>
                      <div className="mt-1 text-sm text-blue-300">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Steps */}
        <div className="px-6 py-24">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white">
                Reporting Process
              </h2>
              <p className="mt-4 text-slate-400">
                Your security and anonymity are guaranteed at every step
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "File Your Report",
                  description:
                    "Submit detailed information about the cybercrime incident with any supporting evidence. All data is encrypted and anonymized.",
                  icon: <FileText className="h-6 w-6 text-blue-400" />,
                },
                {
                  title: "Initial Assessment",
                  description:
                    "Our security team reviews and classifies your report, ensuring all necessary information is captured securely.",
                  icon: <Search className="h-6 w-6 text-blue-400" />,
                },
                {
                  title: "Case Processing",
                  description:
                    "Reports are routed to appropriate cybercrime units based on jurisdiction and incident classification.",
                  icon: <Bell className="h-6 w-6 text-blue-400" />,
                },
                {
                  title: "Secure Updates",
                  description:
                    "Receive case updates through our encrypted communication channel while maintaining anonymity.",
                  icon: <MessageSquare className="h-6 w-6 text-blue-400" />,
                },
              ].map((step, i) => (
                <div
                  key={i}
                  className="group relative overflow-hidden rounded-xl border border-blue-800/30 bg-slate-900/50 p-6 backdrop-blur-sm transition-all hover:bg-slate-800/50"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                      {step.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-medium text-white">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Features */}
        <div className="px-6 py-24 bg-slate-950/50">
          <div className="mx-auto max-w-6xl">
            <div className="rounded-xl border border-blue-800/30 bg-slate-900/50 p-8 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-white text-center mb-12">
                Security Measures
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Complete Anonymity",
                    description:
                      "Zero-knowledge system ensures your identity remains protected at all times.",
                    icon: <Shield className="h-6 w-6 text-blue-400" />,
                  },
                  {
                    title: "Military-Grade Encryption",
                    description:
                      "Advanced encryption protocols protect all data and communications.",
                    icon: <Lock className="h-6 w-6 text-blue-400" />,
                  },
                  {
                    title: "Secure Evidence Storage",
                    description:
                      "Tamper-proof storage system for all submitted evidence and documentation.",
                    icon: <FileText className="h-6 w-6 text-blue-400" />,
                  },
                ].map((feature, i) => (
                  <div key={i} className="text-center">
                    <div className="flex justify-center mb-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-500/10 border border-blue-500/20">
                        {feature.icon}
                      </div>
                    </div>
                    <h3 className="text-lg font-medium text-white mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-slate-400">
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="px-6 py-24 text-center">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-6">
              Report a Cybercrime Incident
            </h2>
            <p className="mb-8 text-slate-400">
              Help us combat cybercrime and protect others from becoming victims
            </p>
            <button className="inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-blue-600 px-8 text-sm font-medium text-white transition-all hover:bg-blue-500">
              Begin Secure Report
              <Shield className="h-4 w-4" />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
