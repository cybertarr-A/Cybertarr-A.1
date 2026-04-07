export interface Repo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  language: string;
  topics: string[];
  created_at: string;
}

const GITHUB_USERNAME = "cybertarr-A";

export async function fetchRepos(): Promise<Repo[]> {
  try {
    const res = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`,
      {
        headers: {
          Accept: "application/vnd.github+json",
          ...(process.env.GITHUB_TOKEN && {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        next: { revalidate: 60 }, // ISR: refresh every 60 seconds
      }
    );

    if (!res.ok) {
      console.error("GitHub API error:", res.status);
      return [];
    }

    const data = await res.json();

    return data
      .filter((repo: any) => !repo.fork)
      .map((repo: any) => ({
        id: repo.id,
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        homepage: repo.homepage,
        stargazers_count: repo.stargazers_count,
        language: repo.language,
        topics: repo.topics || [],
        created_at: repo.created_at,
      }));
  } catch (err) {
    console.error("Fetch error:", err);
    return [];
  }
}
