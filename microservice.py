from http.server import BaseHTTPRequestHandler, HTTPServer
import json

class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
    def do_GET(self):
        # Verifique o caminho da URL
        if self.path == '/get-url':
            # Defina a URL que será retornada
            response_data = {"url": "https://www.exemplo.com"}
            # Enviar resposta HTTP
            self.send_response(200)  # Código de sucesso
            self.send_header("Content-type", "application/json")
            self.end_headers()
            # Enviar o JSON de resposta
            self.wfile.write(json.dumps(response_data).encode("utf-8"))
        else:
            # Caso a URL não seja a esperada, retorna 404
            self.send_response(404)
            self.end_headers()
            self.wfile.write("URL não encontrada")

def run(server_class=HTTPServer, handler_class=SimpleHTTPRequestHandler, port=5000):
    server_address = ('', port)
    httpd = server_class(server_address, handler_class)
    print(f"Serviço rodando na porta {port}...")
    httpd.serve_forever()

if __name__ == '__main__':
    run()
