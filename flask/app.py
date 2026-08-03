from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def wfd_home():
    return render_template('WhatsForDinner.html', title="Whats for Dinner")

@app.route('/team')
def team():
    return render_template('team.html', title="team")

@app.route('/about')
def about():
    return render_template('about.html', title="about")

@app.route('/docs')
def docs():
    return render_template('docs.html', title="docs")

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=False)