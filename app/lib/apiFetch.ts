export async function apiFetch(url: string, options: RequestInit = {}) {
  const response = await fetch(url, {
    ...options,
    credentials: "include",
  });

  if (response.status === 401) {
    window.location.href = "/signin";
  }
  if (!response.ok) {
    const errorText = await response.json();
 
    throw new Error(` ${response.status} ${errorText.message} `);
  }
  return response.json();
}
