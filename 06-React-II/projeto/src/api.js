export const API_URL = "http://localhost:3000";

// Faz login do usuário
export function USER_LOGIN(body) {
  return {
    url: API_URL + "/login",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

// Faz o registro do usuário
export function USER_REGISTER(body) {
  return {
    url: API_URL + "/register",
    options: {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    },
  };
}

// Busca os produtos
export function GET_PRODUCTS(pageSize, page, searchTerm, genre) {
  return {
    url: API_URL + "/products?" + new URLSearchParams({
      ...(pageSize != -1 && { _limit: pageSize, _page: page }),
      ...(searchTerm  && { title_like: searchTerm }),
      ...(genre  && { genre }),
    }),
    options: {
      method: "GET"
    },
  };
}

// Busca um jogo
export function GET_PRODUCT(id) {
  return {
    url: API_URL + `/products/${id}`,
    options: {
      method: "GET"
    },
  };
}

//Busca um usuário
export function GET_USER(id) {
  return {
    url: API_URL + `/users/${id}?`,
    options: {
      method: "GET"
    },
  };
}