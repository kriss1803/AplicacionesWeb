from flask import Flask
app = Flask(__name__)

@app.route("/")
def inicio():
    return "Bienvenidos al Sitio Web del Restaurante Bongo's Grill"

@app.route("/menu")
def menu():
    return "Menú Bongo's Grill"

@app.route("/eventos")
def eventos():
    return "Eventos Bongo's Grill"

@app.route("/contacto")
def contacto():
    return "Página Contacto Bongo's Grill"

@app.route("/reservaciones")
def reservaciones():
    return "Reservaciones para eventos o al resturant Bongo's Grill"

@app.route("/admin/login")
def admin_login():
    return "Página Login Administrador"

@app.route("/admin")
def admin():
    return "Página Administrador"

if __name__ == '__main__':
    app.run(debug=True)