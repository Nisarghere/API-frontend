export async function apiFetch(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    ...options,
    credentials: "include",
  });

  if (response.status === 401) {
    window.location.href = "/signin";
  }
  if (!response.ok) {
    const errorText = await response.text();
    console.log("API ERROR:", response.status, errorText);

    throw new Error(`Request failed: ${response.status}`);
  }
  return response.json();
}
