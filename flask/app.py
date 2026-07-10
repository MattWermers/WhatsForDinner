from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def wfd_home():
    return render_template('WhatsForDinner.html', title="Whats for Dinner")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)