const BASE_URL = import.meta.env.VITE_API_BASE_URL;
async function request(endpoint, options = {}) {
  const url = `${BASE_URL}${endpoint}`;
  const token = localStorage.getItem('authToken');
  const defaultHeaders = {
    'Content-Type': 'application/json',
  };

  if (token) {
    defaultHeaders['Authorization'] = `Bearer ${token}`;
  }

  const config = {
    ...options,
    headers: {
      ...defaultHeaders,
      ...options.headers,
    },
  };
  try {
    const response = await fetch(url, config);
    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: `Ocorreu um erro no servidor (status: ${response.status})` }));
      throw new Error(errorData.message || 'Falha na comunicação com o servidor.');
    }
    if (response.status === 204) {
      return { success: true };
    }
    return await response.json();
  } catch (error) {
    console.error('Erro na chamada da API:', error);
    throw error;
  }
}
async function upload(endpoint, formData) {
  const url = `${BASE_URL}${endpoint}`;
  const token = localStorage.getItem('authToken');

  const headers = {};

  if (token) {
    headers['Authorization'] = `Bearer ${token}`;
  }
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: headers,
      body: formData,
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({ message: `Ocorreu um erro no servidor (status: ${response.status})` }));
      throw new Error(errorData.message || 'Falha no upload do arquivo.');
    }
    return await response.json();
  } catch (error) {
    console.error('Erro no upload:', error);
    throw error;
  }
}

export const api = {
  get: (endpoint) => request(endpoint),
  post: (endpoint, data) => request(endpoint, { method: 'POST', body: JSON.stringify(data) }),
  patch: (endpoint, data) => request(endpoint, { method: 'PATCH', body: JSON.stringify(data) }),
  delete: (endpoint) => request(endpoint, { method: 'DELETE' }),
  upload: (endpoint, formData) => upload(endpoint, formData),
};