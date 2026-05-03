import { collabProjects } from '../data/placeholder';

export default function CollabSection() {
  return (
    <section id="collab" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-10 gap-4">
          <div>
            <span className="text-[#C8102E] font-semibold text-sm uppercase tracking-widest">
              Kolaborasi
            </span>
            <h2 className="text-2xl md:text-3xl font-bold mt-2">
              Collab Projects
            </h2>
          </div>
          <a
            href="/collab"
            className="border-2 border-[#C8102E] text-[#C8102E] hover:bg-[#C8102E] hover:text-white font-semibold px-4 py-2 rounded-full transition-colors duration-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2"
          >
            Lihat Semua →
          </a>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {collabProjects.map((project) => (
            <article
              key={project.id}
              className="bg-white border border-[#E5E7EB] rounded-2xl overflow-hidden hover:-translate-y-1 hover:shadow-lg hover:border-[#C8102E] transition-all duration-200 flex flex-col"
            >
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              <div className="p-5 flex flex-col flex-1 gap-3">
                <span className="inline-flex items-center gap-1 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1 rounded-full w-fit">
                  ● {project.status}
                </span>
                <h3 className="font-bold text-[#1A1A1A] text-base line-clamp-2">
                  {project.title}
                </h3>
                <p className="text-sm text-[#6B7280] line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.faculties.map((fac) => (
                    <span
                      key={fac}
                      className="bg-[#FAFAFA] border border-[#E5E7EB] text-[#6B7280] text-xs px-2 py-1 rounded-full"
                    >
                      {fac}
                    </span>
                  ))}
                </div>
                <a
                  href={`/collab/${project.id}`}
                  className="text-[#C8102E] hover:text-[#8B0000] font-medium transition-colors duration-200 text-sm border-t border-[#E5E7EB] pt-3 focus:outline-none focus:ring-2 focus:ring-[#C8102E] focus:ring-offset-2"
                >
                  Lihat Detail →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
