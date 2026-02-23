import { useEffect, useState } from "react";
import { useRouter } from "next/router";

type Project = {
  title: string;
  description: string;
  imageUrl: string;
  githubUrl: string;
  liveUrl: string;
};

const Projects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Вземи токена от localStorage
    const token = localStorage.getItem("token");
    
    // Ако няма токен, прати към login
    if (!token) {
      router.push("/login");
      return;
    }

    // Изпрати заявка с токена в header-ite
    fetch("http://localhost:8080/api/projects", {
      headers: {
        'Authorization': 'Bearer ' + token,  // 👈 ТУК СЕ ПРАЩА ТОКЕНА
        'Content-Type': 'application/json'
      }
    })
      .then((res) => {
        if (res.status === 401) {
          // Ако токена не важи, прати към login
          localStorage.removeItem("token");
          router.push("/login");
          throw new Error("Unauthorized");
        }
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setProjects(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Projects error:", err);
        setError(err.message);
        setLoading(false);
      });
  }, [router]);

  if (loading) {
    return (
      <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="text-center">Loading projects...</div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
        <div className="text-center text-red-500">Error: {error}</div>
      </section>
    );
  }

  return (
    <section id="projects" className="max-w-7xl mx-auto px-6 py-16">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.length === 0 ? (
          <p className="col-span-3 text-center">No projects found</p>
        ) : (
          projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-semibold mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">
                {project.description}
              </p>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default Projects;