import { useEffect, useState } from 'react';

import { useRouter } from 'next/router';

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
};

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080';

const Projects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      router.push('/login');
      return;
    }

    fetch(`${API_URL}/api/projects`, {
      headers: {
        Authorization: `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          localStorage.removeItem('token');
          router.push('/login');
          throw new Error('Unauthorized');
        }

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        return res.json();
      })
      .then((data: Project[]) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err: unknown) => {
        console.error('Projects error:', err);

        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('Failed to load projects');
        }

        setLoading(false);
      });
  }, [router]);

  if (loading) {
    return (
      <section
        id="projects"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <h2 className="mb-8 text-center text-2xl font-bold sm:mb-10 sm:text-3xl">
          Projects
        </h2>
        <div className="text-center">Loading projects...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section
        id="projects"
        className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
      >
        <h2 className="mb-8 text-center text-2xl font-bold sm:mb-10 sm:text-3xl">
          Projects
        </h2>
        <div className="text-center text-red-500">Error: {error}</div>
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
    >
      <h2 className="mb-8 text-center text-2xl font-bold sm:mb-10 sm:text-3xl">
        Projects
      </h2>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.length === 0 ? (
          <p className="text-center md:col-span-2 lg:col-span-3">
            No projects found
          </p>
        ) : (
          projects.map((project, index) => (
            <div
              key={index}
              className="flex min-h-[26rem] flex-col overflow-hidden rounded-lg bg-white shadow-md transition-shadow hover:shadow-lg sm:min-h-[28rem] lg:aspect-square lg:min-h-0"
            >
              <div className="relative h-1/2 w-full bg-gray-100">
                {project.imageUrl ? (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex h-full w-full items-center justify-center text-gray-400">
                    No image
                  </div>
                )}
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="mb-2 line-clamp-1 text-xl font-semibold">
                  {project.title}
                </h3>

                <p className="mb-4 line-clamp-3 flex-1 text-gray-600">
                  {project.description}
                </p>

                <div className="mt-auto flex flex-wrap gap-4 border-t border-gray-100 pt-4">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900"
                    >
                      GitHub
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-800"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;
