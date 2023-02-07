from http.server import *
import socketserver
import ssl

# class SimpleHTTPRequestHandler(BaseHTTPRequestHandler):
#     def do_GET(self):
#         self.send_response(200)




httpd = socketserver.TCPServer(('localhost',5000),SimpleHTTPRequestHandler)
httpd.socket = ssl.wrap_socket( httpd.socket,server_side= True,ssl_version = ssl.PROTOCOL_TLS)
httpd.serve_forever()



