import axios from "axios";
/**
 * Receber code(string)
 * Recuperar o access_token no github
 * Verificar se o usuário existe no DB
 * ------ SIM = Gera um token
 * ------ NAO = Cria um DB, gera um token
 * Retornar o token com as infos do user
 */

class AuthenticationUserService {
  async execute(code: string) {
    const url = "https://github.com/login/oauth/access_token";

    const response = await axios.post(url, null, {
      params: {
        client_id: process.env.GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code,
      },
      headers: {
        "Accept": "application/json"
      }
    })

    return response.data;
  }
}

export { AuthenticationUserService }