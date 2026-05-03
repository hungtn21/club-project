import { notFound } from 'next/navigation';
import Link from 'next/link';
import Container from '@/components/ui/Container';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { clubs } from '@/lib/mockData';

interface Props {
  params: Promise<{ id: string }>;
}

export default async function ClubDetailPage({ params }: Props) {
  const { id } = await params;
  const club = clubs.find((c) => c.id === id);

  if (!club) notFound();

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[480px] flex items-center justify-center overflow-hidden bg-surface border-b border-surface-variant">
        <Container className="py-16 flex flex-col items-center text-center gap-4">
          <Link
            href="/clubs"
            className="self-start text-sm text-secondary-text hover:text-red-600 transition-colors"
          >
            ← Back to clubs
          </Link>
          <div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full bg-surface border border-outline-variant shadow-sm">
            <span className="w-2 h-2 rounded-full bg-primary-container mr-2" />
            <span className="text-xs font-medium text-secondary-text tracking-widest uppercase">
              Official Academic Club
            </span>
          </div>
          <h1 className="text-5xl font-bold tracking-tight text-on-surface">
            {club.name}
          </h1>
          <p className="text-xl text-secondary-text max-w-2xl font-light leading-relaxed">
            {club.description}
          </p>
          <div className="flex gap-4 mt-2">
            <Button
              variant="primary"
              className="px-8 py-3 flex items-center gap-2"
            >
              <span>Tham gia câu lạc bộ</span>
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </Button>
            <Button variant="secondary" className="px-8 py-3">
              Liên hệ với chúng tôi
            </Button>
          </div>
        </Container>
      </section>

      <Container className="flex flex-col gap-16 py-16">
        {/* Vision & Mission */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-on-surface mb-6">
              Vision &amp; Mission
            </h2>
            <div className="w-12 h-1 bg-primary-container mb-8" />
            <p className="text-base text-secondary-text leading-relaxed">
              {club.vision}
            </p>
          </div>
          <div className="h-64 rounded-xl border border-surface-variant bg-surface-container flex items-center justify-center">
            <span className="material-symbols-outlined text-6xl text-gray-300">
              {club.icon}
            </span>
          </div>
        </section>

        {/* Stats */}
        <section className="py-12 border-y border-surface-variant">
          <div className="grid grid-cols-3 gap-8 text-center divide-x divide-surface-variant">
            <div className="flex flex-col items-center py-4">
              <span className="text-5xl font-bold text-primary-container mb-2">
                {club.memberCount}+
              </span>
              <span className="text-sm font-semibold text-secondary-text uppercase tracking-wider">
                Active Members
              </span>
            </div>
            <div className="flex flex-col items-center py-4">
              <span className="text-5xl font-bold text-primary-container mb-2">
                {club.annualProjects}
              </span>
              <span className="text-sm font-semibold text-secondary-text uppercase tracking-wider">
                Annual Projects
              </span>
            </div>
            <div className="flex flex-col items-center py-4">
              <span className="text-5xl font-bold text-primary-container mb-2">
                {club.awards}
              </span>
              <span className="text-sm font-semibold text-secondary-text uppercase tracking-wider">
                Awards
              </span>
            </div>
          </div>
        </section>

        {/* Core Activities */}
        <section>
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-on-surface mb-4">
              Core Activities
            </h2>
            <p className="text-base text-secondary-text max-w-2xl">
              Structured initiatives designed to elevate technical proficiency
              and professional readiness.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {club.activities.map((activity) => (
              <Card key={activity.title} className="flex flex-col gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary-container">
                    {activity.icon}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-on-surface">
                  {activity.title}
                </h3>
                <p className="text-sm text-secondary-text leading-relaxed">
                  {activity.description}
                </p>
              </Card>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="bg-surface-container-low border-t border-surface-variant py-12 -mx-6 px-6 rounded-xl">
          <h2 className="text-2xl font-semibold text-on-surface mb-6">
            Get in Touch
          </h2>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4">
              <span className="material-symbols-outlined text-primary-container mt-1">
                location_on
              </span>
              <div>
                <p className="text-sm font-semibold text-on-surface">
                  {club.address.split(',')[0]}
                </p>
                <p className="text-sm text-secondary-text">
                  {club.address.split(',').slice(1).join(',')}
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-container">
                mail
              </span>
              <p className="text-sm text-secondary-text">{club.email}</p>
            </div>
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-primary-container">
                language
              </span>
              <p className="text-sm text-secondary-text">{club.website}</p>
            </div>
          </div>
        </section>
      </Container>
    </div>
  );
}
