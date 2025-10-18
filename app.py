from flask import Flask, send_file

app = Flask(__name__)

@app.route('/')
@app.route('/<path:path>')
def serve_index(path=''):
    return send_file('index.html', mimetype='text/html')

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=10000)